import React from "react";
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
    textField: {
        width: 350,
        margin: 0
    },
}));

export default function SignupPage(props) {
    const [value, setValue] = React.useState("intermediare");
    const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div id="example1">
            <div className='container'>
                <div className='row'>
                    <div className="black-text col-4">
                        <h1 className="h1-responsive font-weight-bold mt-sm-5" style={{
                            color: "#34009f"
                        }}>
                            Inscription
                        </h1>
                        <h2 className="h2-responsive font-weight-normal" style={{
                            color: "#34009f"
                        }}>
                            Bienvenue à TadwireStore
                  </h2>
                        <Divider style={{
                            backgroundColor: "#34009f",
                            height: '5px',
                            borderRadius: '5px',
                            width: '70px'
                        }} />
                    </div>
                </div>
                <div className='row mt-4'>
                    <div className='col-4'>
                        <form>
                            <label htmlFor="defaultFormLoginEmailEx" className='font-weight-bold' style={{
                                color: "#34009f",
                                fontSize: "15px"
                            }}>
                                Email
            </label>
                            <TextField
                                id="outlined-email"
                                className={classes.textField}
                                placeholder="Email"
                                margin="normal"
                                type="email"
                                variant="outlined"
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className='font-weight-bold mt-2' style={{
                                color: "#34009f",
                                fontSize: "15px"
                            }}>
                                Mot de passe
            </label>
                            <TextField
                                id="outlined-pw"
                                className={classes.textField}
                                placeholder="Mot de passe"
                                margin="normal"
                                type="password"
                                variant="outlined"
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className='font-weight-bold mt-2' style={{
                                color: "#34009f",
                                fontSize: "15px"
                            }}>
                                Confirmez le mot de passe
            </label>
                            <TextField
                                id="outlined-pw2"
                                className={classes.textField}
                                placeholder="Mot de passe"
                                margin="normal"
                                type="password"
                                variant="outlined"
                            />
                            <br />
                            <label htmlFor="defaultFormLoginPasswordEx" className='font-weight-bold mt-2' style={{
                                color: "#34009f",
                                fontSize: "15px"
                            }}>
                                Vous ete
            </label>
                            <FormControl variant="outlined" className={classes.textField}>
                                <Select
                                    value={value}
                                    onChange={handleChange}
                                    inputProps={{
                                        name: "qualite",
                                        id: "outlined-qualite-simple"
                                    }}
                                >
                                    <MenuItem value="intermediare">intermediare</MenuItem>
                                    <MenuItem value={2}>moyenne qualité</MenuItem>
                                    <MenuItem value={3}>haute qualité</MenuItem>
                                </Select>
                            </FormControl>
                            <div className="mt-4">
                                <Fab style={{
                                    backgroundColor: "#34009f",
                                    color: "white",
                                    fontSize: "15px"
                                }} variant="extended" className='pr-5 pl-5' aria-label="delete" >
                                    Suivante
      </Fab>
                                <Link href="/login" style={{
                                    color: "#34009f",
                                    fontSize: "15px",
                                    fontWeight: 'normal',
                                    position: 'relative',
                                    left: '115px'
                                }}>
                                    <span className='mr-2'>Login</span>
                                    <Icon fontSize='small' style={{
                                        position: 'relative',
                                        top: '5px'
                                    }} className="fas fa-chevron-right"></Icon>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
