-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema cartodolisttrackerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `cartodolisttrackerdb` ;

-- -----------------------------------------------------
-- Schema cartodolisttrackerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `cartodolisttrackerdb` ;
USE `cartodolisttrackerdb` ;

-- -----------------------------------------------------
-- Table `car_project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `car_project` ;

CREATE TABLE IF NOT EXISTS `car_project` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `engine` VARCHAR(250) NULL,
  `exterior` VARCHAR(250) NULL,
  `interior` VARCHAR(250) NULL,
  `suspension` VARCHAR(250) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS todolistuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'todolistuser'@'localhost' IDENTIFIED BY 'password';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'todolistuser'@'localhost';
GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'todolistuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `car_project`
-- -----------------------------------------------------
START TRANSACTION;
USE `cartodolisttrackerdb`;
INSERT INTO `car_project` (`id`, `model`, `engine`, `exterior`, `interior`, `suspension`) VALUES (1, '240sx', 'Fix exhaust leak on exhaust manifold ', 'Replace rear quarter panels with smaller ones, and get entire car painted', 'Repair dash, and door panels as well as finish tucking interior wiring under glove box', 'Replace front lower control arms with oem ones and add roll center correction kit');
INSERT INTO `car_project` (`id`, `model`, `engine`, `exterior`, `interior`, `suspension`) VALUES (2, 'Aristo', 'Repair coolant leaks, rethread front oil pan bolt, and replace o-ring on powersteering pump feed', 'Get body kit, and paint match', 'Finish installing e-brake setup, and subwoofer', 'Get heat lightening angle kit and flca setup');

COMMIT;

