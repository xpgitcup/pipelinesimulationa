/*
Navicat MySQL Data Transfer

Source Server         : sample
Source Server Version : 50620
Source Host           : localhost:3306
Source Database       : psdba

Target Server Type    : MYSQL
Target Server Version : 50620
File Encoding         : 65001

Date: 2016-02-13 17:29:27
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `component_factor`
-- ----------------------------
DROP TABLE IF EXISTS `component_factor`;
CREATE TABLE `component_factor` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `version` bigint(20) NOT NULL,
  `factor_type_id` bigint(20) NOT NULL,
  `fluid_gas_id` bigint(20) NOT NULL,
  `gas_component_id` bigint(20) NOT NULL,
  `value` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_8loxi49f6tlyu63vq1hfk65kt` (`factor_type_id`),
  KEY `FK_hs2s7b6kviaa4ykpx5oynr507` (`fluid_gas_id`),
  KEY `FK_3j97outpxwcr8p7949gls7a63` (`gas_component_id`),
  CONSTRAINT `FK_3j97outpxwcr8p7949gls7a63` FOREIGN KEY (`gas_component_id`) REFERENCES `gas_component` (`id`),
  CONSTRAINT `FK_8loxi49f6tlyu63vq1hfk65kt` FOREIGN KEY (`factor_type_id`) REFERENCES `component_factor_type` (`id`),
  CONSTRAINT `FK_hs2s7b6kviaa4ykpx5oynr507` FOREIGN KEY (`fluid_gas_id`) REFERENCES `fluid_gas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of component_factor
-- ----------------------------
