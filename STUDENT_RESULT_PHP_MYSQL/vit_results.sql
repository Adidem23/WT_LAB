SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `prn_no` varchar(10) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `mse_marks` decimal(5,2) DEFAULT NULL,
  `ese_marks` decimal(5,2) DEFAULT NULL,
  `max_marks_mse` decimal(5,2) DEFAULT NULL,
  `max_marks_ese` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `results` (`id`, `prn_no`, `subject`, `mse_marks`, `ese_marks`, `max_marks_mse`, `max_marks_ese`) VALUES
(9, '12220122', 'SDM', '28.00', '69.00', '30.00', '70.00'),
(10, '12220122', 'DAA', '25.00', '65.00', '30.00', '70.00'),
(11, '12220122', 'CN', '22.00', '68.00', '30.00', '70.00'),
(12, '12220122', 'WT', '27.00', '61.00', '30.00', '70.00');


ALTER TABLE `results`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;
