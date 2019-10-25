const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const auth = require("../../middleware/auth");
const jwt = require("jsonwebtoken");
const config = require("config");
const findUser = require("../../Utils/FindUser");
const countRating = require("../../Utils/CountRating");
const conn = require("../../config/db");
const datetime = require("node-datetime");

// @route   Get api/auth
// @desc
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    const getUser = await findUser.findUserbyId(req.user.id);
    const profileimg = await findUser.findProfilePicture(req.user.id);

    if (profileimg.length) {
      const User = {
        User: getUser,
        profileimg: profileimg[0].path,
        Tags: FinalAllTags,
        Match: UserMatch,
        Block: UserBlock,
        UserLiked: UserLiked,
        finalRating: finalRating
      };
      res.json(User);
    } else {
      const User = {
        User: getUser,
        Tags: FinalAllTags,
        Match: Match,
        finalRating: finalRating
      };
      res.json(User);
    }
  } catch (err) {
    console.error(err.message);
    res.send("Server error");
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @acess   Public
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await findUser.findUserbyUsername(username);

    if (user.length) {
      const profilePreference = await findUser.findUserPreference(user[0].id);

      if (profilePreference.length === 0) {
        await conn.query(
          "INSERT INTO preferences SET user_id = ?, age_min = ?, age_max = ?, rating_min = ?, rating_max = ?, distance_max = ?, tags_match = ?",
          [user[0].id, 13, 99, 0, 10, 199, 1]
        );
      }
    }

    if (!user.length) {
      return res.json({ errors: [{ msg: "Username not found" }] });
    }

    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    if (!user[0].isVerified) {
      return res.json({
        errors: [{ msg: "Please validate your account before" }]
      });
    }

    const payload = {
      user: {
        id: user[0].id
      }
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 18000 },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.send("Server error");
  }
});

// @route   GET api/auth/logout
// @desc    Logout User
// @acess   Private
router.get("/logout", auth, async (req, res) => {
  const dt = datetime.create();
  const formatted = dt.format("Y-m-d H:M:S");

  conn.query(
    "UPDATE users SET isOnline = ? , logout_at = ? WHERE id = ?",
    [0, formatted, req.user.id],
    (err, result) => {
      if (result) return res.json({ msg: "ok" });
    }
  );
});

module.exports = router;
