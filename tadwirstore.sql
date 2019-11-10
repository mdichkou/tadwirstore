-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql:3306
-- Généré le :  Dim 10 nov. 2019 à 13:39
-- Version du serveur :  5.7.27
-- Version de PHP :  7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `tadwirstore`
--

-- --------------------------------------------------------

--
-- Structure de la table `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `poids` int(11) NOT NULL,
  `prix` int(11) NOT NULL,
  `type` int(2) NOT NULL,
  `vues` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `qualite` int(11) NOT NULL,
  `livraison` varchar(3) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `Creation_Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `enchere` int(2) NOT NULL DEFAULT '0',
  `images` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `articles`
--

INSERT INTO `articles` (`id`, `name`, `user_id`, `poids`, `prix`, `type`, `vues`, `quantite`, `qualite`, `livraison`, `ville`, `description`, `Creation_Date`, `enchere`, `images`) VALUES
(1, 'test', 1, 20, 1000, 1, 10, 3, 3, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:40:16', 1, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(2, 'test', 1, 20, 2000, 0, 10, 3, 2, 'Oui', 'Khouribga', 'bottles of water', '2019-10-23 16:40:24', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(3, 'test', 1, 20, 1500, 1, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:40:33', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(4, 'test', 1, 20, 2000, 1, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:40:40', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(5, 'test', 1, 20, 2000, 1, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:40:50', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(6, 'test', 1, 30, 2000, 1, 10, 2, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:40:57', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(7, 'test', 1, 20, 2000, 3, 10, 3, 3, 'Oui', 'Khouribga', 'bottles of water', '2019-10-23 16:41:03', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(8, 'test', 1, 20, 2000, 3, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:41:10', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(9, 'test', 1, 10, 2000, 1, 10, 1, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:41:16', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(10, 'test', 1, 20, 2000, 1, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:41:28', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(11, 'test', 1, 20, 2000, 4, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:41:39', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(12, 'test', 1, 20, 2000, 1, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:41:46', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}'),
(13, 'test', 1, 20, 2000, 1, 10, 3, 2, 'No', 'Khouribga', 'bottles of water', '2019-10-23 16:41:53', 0, '{\"image_1\":\"/images/plastique.jpg\",\"image_2\":\"/images/plastique.jpg\",\"image_3\":\"/images/plastique.jpg\",\"image_4\":\"/images/plastique.jpg\"}');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(100) DEFAULT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `verification_code` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email_verified` int(11) DEFAULT '0',
  `Creation_Date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ville` varchar(30) NOT NULL,
  `telephone` int(20) NOT NULL,
  `adresse` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `username`, `first_name`, `last_name`, `verification_code`, `avatar`, `email`, `password`, `email_verified`, `Creation_Date`, `ville`, `telephone`, `adresse`) VALUES
(1, 'mdichkou', 'amine', 'dichkour', 'sqdqDZAF645FS23CXC', '/images/pdp.jpg', 'mdichkou@gmail.com', 'cryptocrypto', 1, '2019-10-23 16:54:45', 'Khouribga', 682704475, 'Yassmine 1 212');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
