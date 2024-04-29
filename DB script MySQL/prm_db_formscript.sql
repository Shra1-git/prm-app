-- -----------------------------------------------------
-- Schema prm-form-db
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `prm-form-db`;

CREATE SCHEMA `prm-form-db`;
USE `prm-form-db` ;

-- -----------------------------------------------------
-- Table `prm-form-db`.`prm_form_table`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `prm-form-db`.`prm_form_table` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
  `platform` VARCHAR(100) DEFAULT NULL,
  `rag_status` VARCHAR(20) DEFAULT NULL,
  `study_status` VARCHAR(20) DEFAULT NULL,
  `project_code` VARCHAR(20) DEFAULT NULL,
  `sponsor_name` VARCHAR(50) DEFAULT NULL,
  `protocol_number` VARCHAR(20) DEFAULT NULL,
  `lead_programmer` VARCHAR(50) DEFAULT NULL,
  `clinical_research_lead` VARCHAR(50) DEFAULT NULL,
  `technical_designer` VARCHAR(50) DEFAULT NULL,
  `validation_lead` VARCHAR(50) DEFAULT NULL,
  `data_team_lead` VARCHAR(50) DEFAULT NULL,
  `planned_migration_date` DATETIME(6) DEFAULT NULL,
  `actual_migration_date` DATETIME(6) DEFAULT NULL,
  `prcf_number` VARCHAR(20) DEFAULT NULL,
  `lm_action_items` VARCHAR(200) DEFAULT NULL,
  
  PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Inser Sample values in table
-- -----------------------------------------------------

INSERT INTO prm_form_Table (platform) VALUES ('Rave Maintance');

INSERT INTO prm_form_Table (platform) VALUES ('Rave Build');