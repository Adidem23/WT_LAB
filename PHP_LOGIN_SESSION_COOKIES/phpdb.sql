-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 22, 2024 at 04:57 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phpdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` text NOT NULL,
  `email` varchar(20) NOT NULL,
  `Gender` text NOT NULL,
  `Age` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `email`, `Gender`, `Age`) VALUES
(1, '', '', '', 0),
(2, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 20),
(3, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 21),
(4, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 21),
(5, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 21),
(6, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 21),
(7, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 21),
(8, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 21),
(9, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 21),
(10, 'Prasad Shelke', '', 'Male', 21),
(11, 'Prasad Shelke', 'shelkeprasad639@gmai', 'Male', 20),
(12, 'tony stark', 'tonystark.@gmail.com', 'Male', 35),
(13, 'Prasad Shelke', 'Av@gmail.com', 'Male', 20),
(14, 'Swapnil pawar', 'Swpnil@123', 'Male', 25),
(15, 'Swapnil pawar', 'Swpnil@123', 'Male', 25),
(16, 'Swapnil pawar', 'Swpnil@123', 'Male', 25),
(17, 'Swapnil pawar', 'Swpnil@123', 'Male', 25),
(18, 'Nikhil shinde', 'NIkhil@123', 'Male', 21),
(19, 'Nikhil shinde', 'NIkhil@123', 'Male', 21),
(20, 'Nikhil shinde', 'nikhil@123', 'Male', 23),
(21, 'Nikhil shinde', 'nikhil@123', 'Male', 23),
(22, 'Nikhil shinde', 'nikhil@123', 'Male', 32),
(23, 'Nikhil shinde', 'nikhil@123', 'Male', 32),
(24, 'Swapnil pawar', 'nikhil@123', 'Male', 32),
(25, 'Swapnil pawar', 'nikhil@123', 'Male', 32),
(26, 'Swapnil pawar', 'swapnil@123', 'Male', 10),
(27, 'Tony stark', 'Tony@123', 'Male', 35),
(28, 'tony stark', 'tonystark.@gmail.com', 'Male', 21);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
