CREATE DATABASE `neo_lethal_blast`;

USE `neo_lethal_blast`;

CREATE TABLE `word_datas` (
	`id` int AUTO_INCREMENT NOT NULL PRIMARY KEY,
	`name` varchar(10),
	`type` ENUM('SMASH', 'SLASH', 'PENE'),
	`element` ENUM('FIRE', 'WATER', 'WIND'),
	`use` boolean
	);
