-- MySQL Script generated by MySQL Workbench
-- Mon Jul  6 20:18:36 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema beentheredb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `beentheredb` ;

-- -----------------------------------------------------
-- Schema beentheredb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `beentheredb` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `beentheredb` ;

-- -----------------------------------------------------
-- Table `beentheredb`.`account`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`account` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`account` (
  `UID` INT NOT NULL AUTO_INCREMENT,
  `phoneNumber` INT NULL DEFAULT NULL,
  `emailAddress` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE INDEX `uid_UNIQUE` (`UID` ASC) VISIBLE,
  UNIQUE INDEX `phoneNumber_UNIQUE` (`phoneNumber` ASC) VISIBLE,
  UNIQUE INDEX `Email Address_UNIQUE` (`emailAddress` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`profile` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`profile` (
  `PID` INT NOT NULL DEFAULT '0',
  `name` VARCHAR(255) NOT NULL,
  `wechat` VARCHAR(20) NULL DEFAULT NULL,
  `birthday` DATETIME NULL DEFAULT NULL,
  `picurePath` VARCHAR(255) NULL DEFAULT NULL,
  `program` VARCHAR(255) NULL DEFAULT NULL,
  `school` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`PID`),
  UNIQUE INDEX `PID_UNIQUE` (`PID` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`accountToProfile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`accountToProfile` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`accountToProfile` (
  `accounts_UID` INT NULL DEFAULT NULL,
  `profile_PID` INT NOT NULL,
  UNIQUE INDEX `profile_PID_UNIQUE` (`profile_PID` ASC) VISIBLE,
  UNIQUE INDEX `accounts_UID_UNIQUE` (`accounts_UID` ASC) VISIBLE,
  INDEX `fk_accountToProfile_accounts_idx` (`accounts_UID` ASC) VISIBLE,
  INDEX `fk_accountToProfile_profile1_idx` (`profile_PID` ASC) VISIBLE,
  CONSTRAINT `fk_accountToProfile_accounts`
    FOREIGN KEY (`accounts_UID`)
    REFERENCES `beentheredb`.`account` (`UID`),
  CONSTRAINT `fk_accountToProfile_profile1`
    FOREIGN KEY (`profile_PID`)
    REFERENCES `beentheredb`.`profile` (`PID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`admin` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`admin` (
  `adminID` INT NOT NULL DEFAULT '0',
  `info` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`adminID`),
  UNIQUE INDEX `adminID_UNIQUE` (`adminID` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`mentee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`mentee` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`mentee` (
  `menteeID` INT NOT NULL AUTO_INCREMENT,
  `info` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`menteeID`),
  UNIQUE INDEX `menteeID_UNIQUE` (`menteeID` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`mentor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`mentor` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`mentor` (
  `mentorID` INT NOT NULL,
  `descriptionPath` VARCHAR(255) NOT NULL,
  `profilePicturePath` VARCHAR(255) NOT NULL,
  `rating` FLOAT NOT NULL DEFAULT '5',
  `price` FLOAT NOT NULL DEFAULT '0',
  `numberConsultations` INT NOT NULL DEFAULT '0',
  `audioDesPath` VARCHAR(255) NOT NULL,
  `balance` FLOAT NOT NULL DEFAULT '0',
  PRIMARY KEY (`mentorID`),
  UNIQUE INDEX `descriptionPath_UNIQUE` (`descriptionPath` ASC) VISIBLE,
  UNIQUE INDEX `mentorID_UNIQUE` (`mentorID` ASC) VISIBLE,
  UNIQUE INDEX `profilePicturePath_UNIQUE` (`profilePicturePath` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`accountType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`accountType` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`accountType` (
  `adminID` INT NOT NULL,
  `menteeID` INT NOT NULL,
  `mentorID` INT NOT NULL,
  `profile_PID` INT NOT NULL,
  PRIMARY KEY (`adminID`, `menteeID`, `mentorID`, `profile_PID`),
  UNIQUE INDEX `profile_PID_UNIQUE` (`profile_PID` ASC) VISIBLE,
  INDEX `fk_accountType_admin1_idx` (`adminID` ASC) VISIBLE,
  INDEX `fk_accountType_mentee1_idx` (`menteeID` ASC) VISIBLE,
  INDEX `fk_accountType_mentor1_idx` (`mentorID` ASC) VISIBLE,
  INDEX `fk_accountType_profile1_idx` (`profile_PID` ASC) VISIBLE,
  CONSTRAINT `fk_accountType_admin1`
    FOREIGN KEY (`adminID`)
    REFERENCES `beentheredb`.`admin` (`adminID`),
  CONSTRAINT `fk_accountType_mentee1`
    FOREIGN KEY (`menteeID`)
    REFERENCES `beentheredb`.`mentee` (`menteeID`),
  CONSTRAINT `fk_accountType_mentor1`
    FOREIGN KEY (`mentorID`)
    REFERENCES `beentheredb`.`mentor` (`mentorID`),
  CONSTRAINT `fk_accountType_profile1`
    FOREIGN KEY (`profile_PID`)
    REFERENCES `beentheredb`.`profile` (`PID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`chat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`chat` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`chat` (
  `chatID` INT NOT NULL AUTO_INCREMENT,
  `chatPath` VARCHAR(255) NOT NULL,
  `chatRating` FLOAT NOT NULL,
  `TimeStamp` DATETIME NOT NULL,
  PRIMARY KEY (`chatID`),
  UNIQUE INDEX `chatID_UNIQUE` (`chatID` ASC) VISIBLE,
  UNIQUE INDEX `chatPath_UNIQUE` (`chatPath` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`chatRelation`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`chatRelation` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`chatRelation` (
  `menteeID` INT NOT NULL,
  `mentorID` INT NOT NULL,
  `chatID` INT NOT NULL,
  PRIMARY KEY (`menteeID`, `mentorID`, `chatID`),
  UNIQUE INDEX `chat_chatID_UNIQUE` (`chatID` ASC) VISIBLE,
  INDEX `fk_chatRelation_mentee1_idx` (`menteeID` ASC) VISIBLE,
  INDEX `fk_chatRelation_mentor1_idx` (`mentorID` ASC) VISIBLE,
  INDEX `fk_chatRelations_chat1_idx` (`chatID` ASC) VISIBLE,
  CONSTRAINT `fk_chatRelation_mentee1`
    FOREIGN KEY (`menteeID`)
    REFERENCES `beentheredb`.`mentee` (`menteeID`),
  CONSTRAINT `fk_chatRelation_mentor1`
    FOREIGN KEY (`mentorID`)
    REFERENCES `beentheredb`.`mentor` (`mentorID`),
  CONSTRAINT `fk_chatRelations_chat1`
    FOREIGN KEY (`chatID`)
    REFERENCES `beentheredb`.`chat` (`chatID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`medal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`medal` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`medal` (
  `medal1` TINYINT(1) NOT NULL DEFAULT '0',
  `medal2` TINYINT(1) NOT NULL DEFAULT '0',
  `mentor_mentorID` INT NOT NULL,
  PRIMARY KEY (`mentor_mentorID`),
  UNIQUE INDEX `mentor_mentorID_UNIQUE` (`mentor_mentorID` ASC) VISIBLE,
  INDEX `fk_medal_mentor1_idx` (`mentor_mentorID` ASC) VISIBLE,
  CONSTRAINT `fk_medal_mentor1`
    FOREIGN KEY (`mentor_mentorID`)
    REFERENCES `beentheredb`.`mentor` (`mentorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`thanksCard`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`thanksCard` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`thanksCard` (
  `cardID` INT NOT NULL AUTO_INCREMENT,
  `menteeID` INT NULL,
  `mentorID` INT NOT NULL,
  `cardPath` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`cardID`),
  UNIQUE INDEX `cardID_UNIQUE` (`cardID` ASC) VISIBLE,
  INDEX `fk_thanksCard_mentee1_idx` (`menteeID` ASC) VISIBLE,
  INDEX `fk_thanksCard_mentor1_idx` (`mentorID` ASC) VISIBLE,
  CONSTRAINT `fk_thanksCard_mentee1`
    FOREIGN KEY (`menteeID`)
    REFERENCES `beentheredb`.`mentee` (`menteeID`),
  CONSTRAINT `fk_thanksCard_mentor1`
    FOREIGN KEY (`mentorID`)
    REFERENCES `beentheredb`.`mentor` (`mentorID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `beentheredb`.`mentorVideo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`mentorVideo` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`mentorVideo` (
  `videoID` INT NOT NULL,
  `videoPath` VARCHAR(255) NOT NULL,
  `mentorID` INT NOT NULL,
  PRIMARY KEY (`videoID`),
  INDEX `fk_mentorVideos_mentor1_idx` (`mentorID` ASC) VISIBLE,
  UNIQUE INDEX `videoPath_UNIQUE` (`videoPath` ASC) VISIBLE,
  UNIQUE INDEX `videoID_UNIQUE` (`videoID` ASC) VISIBLE,
  CONSTRAINT `fk_mentorVideos_mentor1`
    FOREIGN KEY (`mentorID`)
    REFERENCES `beentheredb`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beentheredb`.`mentorImage`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`mentorImage` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`mentorImage` (
  `imageID` INT NOT NULL,
  `imagePath` VARCHAR(255) NOT NULL,
  `mentorID` INT NOT NULL,
  PRIMARY KEY (`imageID`),
  UNIQUE INDEX `imagePath_UNIQUE` (`imagePath` ASC) VISIBLE,
  INDEX `fk_mentorImage_mentor1_idx` (`mentorID` ASC) VISIBLE,
  UNIQUE INDEX `imageID_UNIQUE` (`imageID` ASC) VISIBLE,
  CONSTRAINT `fk_mentorImage_mentor1`
    FOREIGN KEY (`mentorID`)
    REFERENCES `beentheredb`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beentheredb`.`mentorStory`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beentheredb`.`mentorStory` ;

CREATE TABLE IF NOT EXISTS `beentheredb`.`mentorStory` (
  `storyID` INT NOT NULL,
  `storyPath` VARCHAR(255) NOT NULL,
  `mentorID` INT NOT NULL,
  PRIMARY KEY (`storyID`),
  UNIQUE INDEX `storyPath_UNIQUE` (`storyPath` ASC) VISIBLE,
  INDEX `fk_mentorStory_mentor1_idx` (`mentorID` ASC) VISIBLE,
  UNIQUE INDEX `storyID_UNIQUE` (`storyID` ASC) VISIBLE,
  CONSTRAINT `fk_mentorStory_mentor1`
    FOREIGN KEY (`mentorID`)
    REFERENCES `beentheredb`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
