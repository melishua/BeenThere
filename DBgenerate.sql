-- MySQL Script generated by MySQL Workbench
-- Fri Jun 12 23:33:55 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema beenthereDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `beenthereDB` ;

-- -----------------------------------------------------
-- Schema beenthereDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `beenthereDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `beenthereDB` ;


-- -----------------------------------------------------
-- Table `beenthereDB`.`accounts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`accounts` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`accounts` (
  `UID` INT NOT NULL AUTO_INCREMENT,
  `phoneNumber` INT NULL,
  `Email Address` VARCHAR(45) NULL,
  `Password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`UID`),
  UNIQUE INDEX `uid_UNIQUE` (`UID` ASC),
  UNIQUE INDEX `phoneNumber_UNIQUE` (`phoneNumber` ASC),
  UNIQUE INDEX `Email Address_UNIQUE` (`Email Address` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`accountToProfile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`accountToProfile` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`accountToProfile` (
  `accounts_UID` INT NOT NULL,
  `profile_PID` INT NOT NULL,
  INDEX `fk_accountToProfile_accounts_idx` (`accounts_UID` ASC),
  INDEX `fk_accountToProfile_profile1_idx` (`profile_PID` ASC),
  UNIQUE INDEX `accounts_UID_UNIQUE` (`accounts_UID` ASC),
  UNIQUE INDEX `profile_PID_UNIQUE` (`profile_PID` ASC),
  CONSTRAINT `fk_accountToProfile_accounts`
    FOREIGN KEY (`accounts_UID`)
    REFERENCES `beenthereDB`.`accounts` (`UID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_accountToProfile_profile1`
    FOREIGN KEY (`profile_PID`)
    REFERENCES `beenthereDB`.`profile` (`PID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`accountType`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`accountType` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`accountType` (
  `admin_adminID` INT NULL,
  `mentee_menteeID` INT NULL,
  `accounts_UID` INT NOT NULL,
  `mentor_mentorID` INT NOT NULL,
  INDEX `fk_accountType_admin1_idx` (`admin_adminID` ASC),
  INDEX `fk_accountType_mentee1_idx` (`mentee_menteeID` ASC),
  PRIMARY KEY (`accounts_UID`),
  UNIQUE INDEX `accounts_UID_UNIQUE` (`accounts_UID` ASC),
  INDEX `fk_accountType_mentor1_idx` (`mentor_mentorID` ASC),
  CONSTRAINT `fk_accountType_admin1`
    FOREIGN KEY (`admin_adminID`)
    REFERENCES `beenthereDB`.`admin` (`adminID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_accountType_mentee1`
    FOREIGN KEY (`mentee_menteeID`)
    REFERENCES `beenthereDB`.`mentee` (`menteeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_accountType_accounts1`
    FOREIGN KEY (`accounts_UID`)
    REFERENCES `beenthereDB`.`accounts` (`UID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_accountType_mentor1`
    FOREIGN KEY (`mentor_mentorID`)
    REFERENCES `beenthereDB`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`admin`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`admin` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`admin` (
  `adminID` INT NOT NULL AUTO_INCREMENT,
  `info` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`adminID`),
  UNIQUE INDEX `adminID_UNIQUE` (`adminID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`chat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`chat` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`chat` (
  `chatID` INT NOT NULL AUTO_INCREMENT,
  `chatPath` VARCHAR(255) NOT NULL,
  `chatRating` FLOAT NOT NULL,
  `TimeStamp` DATETIME NOT NULL,
  PRIMARY KEY (`chatID`),
  UNIQUE INDEX `chatID_UNIQUE` (`chatID` ASC),
  UNIQUE INDEX `chatPath_UNIQUE` (`chatPath` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`chatRelations`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`chatRelations` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`chatRelations` (
  `mentee_menteeID` INT NOT NULL,
  `mentor_mentorID` INT NOT NULL,
  `chat_chatID` INT NOT NULL,
  INDEX `fk_chatRelation_mentee1_idx` (`mentee_menteeID` ASC),
  INDEX `fk_chatRelation_mentor1_idx` (`mentor_mentorID` ASC),
  INDEX `fk_chatRelations_chat1_idx` (`chat_chatID` ASC),
  PRIMARY KEY (`chat_chatID`),
  UNIQUE INDEX `chat_chatID_UNIQUE` (`chat_chatID` ASC),
  CONSTRAINT `fk_chatRelation_mentee1`
    FOREIGN KEY (`mentee_menteeID`)
    REFERENCES `beenthereDB`.`mentee` (`menteeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_chatRelation_mentor1`
    FOREIGN KEY (`mentor_mentorID`)
    REFERENCES `beenthereDB`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_chatRelations_chat1`
    FOREIGN KEY (`chat_chatID`)
    REFERENCES `beenthereDB`.`chat` (`chatID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`medal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`medal` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`medal` (
  `medal1` TINYINT NOT NULL DEFAULT 0,
  `medal2` TINYINT NOT NULL DEFAULT 0,
  `mentor_mentorID` INT NOT NULL,
  PRIMARY KEY (`mentor_mentorID`),
  INDEX `fk_medal_mentor1_idx` (`mentor_mentorID` ASC),
  UNIQUE INDEX `mentor_mentorID_UNIQUE` (`mentor_mentorID` ASC),
  CONSTRAINT `fk_medal_mentor1`
    FOREIGN KEY (`mentor_mentorID`)
    REFERENCES `beenthereDB`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`medal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`medal` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`medal` (
  `medal1` TINYINT NOT NULL DEFAULT 0,
  `medal2` TINYINT NOT NULL DEFAULT 0,
  `mentor_mentorID` INT NOT NULL,
  PRIMARY KEY (`mentor_mentorID`),
  INDEX `fk_medal_mentor1_idx` (`mentor_mentorID` ASC),
  UNIQUE INDEX `mentor_mentorID_UNIQUE` (`mentor_mentorID` ASC),
  CONSTRAINT `fk_medal_mentor1`
    FOREIGN KEY (`mentor_mentorID`)
    REFERENCES `beenthereDB`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`mentee`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`mentee` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`mentee` (
  `menteeID` INT NOT NULL AUTO_INCREMENT,
  `info` VARCHAR(255) NULL,
  PRIMARY KEY (`menteeID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`mentor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`mentor` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`mentor` (
  `mentorID` INT NOT NULL AUTO_INCREMENT,
  `descriptionPath` VARCHAR(255) NOT NULL,
  `storyPath` VARCHAR(255) NOT NULL,
  `videoPath` VARCHAR(255) NOT NULL,
  `photosPath` VARCHAR(255) NOT NULL,
  `rating` FLOAT NOT NULL,
  `price` FLOAT NOT NULL,
  `numberConsultations` INT NOT NULL,
  `audioDesPath` VARCHAR(255) NOT NULL,
  `balance` FLOAT NOT NULL,
  PRIMARY KEY (`mentorID`),
  UNIQUE INDEX `audioDesPath_UNIQUE` (`audioDesPath` ASC),
  UNIQUE INDEX `photosPath_UNIQUE` (`photosPath` ASC),
  UNIQUE INDEX `videoPath_UNIQUE` (`videoPath` ASC),
  UNIQUE INDEX `storyPath_UNIQUE` (`storyPath` ASC),
  UNIQUE INDEX `descriptionPath_UNIQUE` (`descriptionPath` ASC),
  UNIQUE INDEX `mentorID_UNIQUE` (`mentorID` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`profile`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`profile` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`profile` (
  `PID` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `wechat` VARCHAR(45) NOT NULL,
  `birthday` DATETIME NOT NULL,
  `picurePath` VARCHAR(255) NULL,
  PRIMARY KEY (`PID`),
  UNIQUE INDEX `PID_UNIQUE` (`PID` ASC),
  UNIQUE INDEX `wechat_UNIQUE` (`wechat` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `beenthereDB`.`thanksCard`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `beenthereDB`.`thanksCard` ;

CREATE TABLE IF NOT EXISTS `beenthereDB`.`thanksCard` (
  `cardID` INT NOT NULL AUTO_INCREMENT,
  `mentee_menteeID` INT NOT NULL,
  `mentor_mentorID` INT NOT NULL,
  `cardcontent` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`cardID`),
  UNIQUE INDEX `cardID_UNIQUE` (`cardID` ASC),
  INDEX `fk_thanksCard_mentee1_idx` (`mentee_menteeID` ASC),
  INDEX `fk_thanksCard_mentor1_idx` (`mentor_mentorID` ASC),
  CONSTRAINT `fk_thanksCard_mentee1`
    FOREIGN KEY (`mentee_menteeID`)
    REFERENCES `beenthereDB`.`mentee` (`menteeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_thanksCard_mentor1`
    FOREIGN KEY (`mentor_mentorID`)
    REFERENCES `beenthereDB`.`mentor` (`mentorID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
