-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: laravel
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.16.04.1-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attributes`
--

DROP TABLE IF EXISTS `attributes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `attributes` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attributes`
--

LOCK TABLES `attributes` WRITE;
/*!40000 ALTER TABLE `attributes` DISABLE KEYS */;
INSERT INTO `attributes` VALUES (1,'string',NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(2,'integer',NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(3,'decimal',NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(4,'text',NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(5,'boolean',NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(6,'datetime',NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24');
/*!40000 ALTER TABLE `attributes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `core_app_id` int(11) NOT NULL,
  `child_count` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'product',
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (14,'b56eea00-bbf1-11e8-9899-cd5d69fdec2f','Thú Bông',NULL,'thu-bong',1,NULL,0,'product',1,1,'2018-09-19 02:52:24','2018-09-19 03:30:50');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_app_users`
--

DROP TABLE IF EXISTS `core_app_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `core_app_users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `core_app_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_app_users`
--

LOCK TABLES `core_app_users` WRITE;
/*!40000 ALTER TABLE `core_app_users` DISABLE KEYS */;
INSERT INTO `core_app_users` VALUES (1,1,1,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(2,2,1,'2018-08-28 03:08:24','2018-08-28 03:08:24');
/*!40000 ALTER TABLE `core_app_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `core_apps`
--

DROP TABLE IF EXISTS `core_apps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `core_apps` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `core_apps`
--

LOCK TABLES `core_apps` WRITE;
/*!40000 ALTER TABLE `core_apps` DISABLE KEYS */;
INSERT INTO `core_apps` VALUES (1,'40837a70-a5f0-11e8-b762-513c5b8cd70c','moriko','2018-08-28 03:08:24','2018-08-28 03:08:24');
/*!40000 ALTER TABLE `core_apps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `layouts`
--

DROP TABLE IF EXISTS `layouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `layouts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `core_app_id` int(11) NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `layouts`
--

LOCK TABLES `layouts` WRITE;
/*!40000 ALTER TABLE `layouts` DISABLE KEYS */;
INSERT INTO `layouts` VALUES (6,'home_banners',1,'<p><br></p><p><img src=\"/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4226964978_478221028.jpg\"></p><p><img src=\"/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020383696_1526850498.400x400.jpg\"><img src=\"/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/7432485099_887932983.400x400.jpg\"></p>','2018-09-07 07:27:08','2018-09-19 03:46:09');
/*!40000 ALTER TABLE `layouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `extension` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumb_url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `core_app_id` int(11) NOT NULL,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `domain` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `folder` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (38,'18cb2220-bbe5-11e8-9ddb-895481187d55','9059480347_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059480347_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059480347_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(39,'18cc78e0-bbe5-11e8-b0d1-99c854e5cbe7','9059450579_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059450579_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059450579_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(40,'18cc7880-bbe5-11e8-b623-21cd992cc73c','9059456589_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059456589_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059456589_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(41,'18e25680-bbe5-11e8-8e1b-c7feac092247','9059444656_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059444656_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059444656_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(42,'18e3af10-bbe5-11e8-99ac-e3fc34d1448e','9059447604_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059447604_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059447604_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(43,'18e52f80-bbe5-11e8-a79b-a98f358116e4','9059477392_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059477392_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059477392_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(44,'18f73cb0-bbe5-11e8-8662-079b6bb9a1ae','9059435700_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059435700_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059435700_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(45,'18f9ea20-bbe5-11e8-8d22-eb60b2959225','9041389172_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9041389172_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9041389172_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(46,'18fccf60-bbe5-11e8-b1c4-25bbd52dac5a','9020775115_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020775115_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020775115_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(47,'190dee40-bbe5-11e8-a65f-bf5f49646467','9059441692_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059441692_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059441692_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(48,'190f9500-bbe5-11e8-b9e9-edc76ba9c3c7','9059423809_1775375862.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059423809_1775375862.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9059423809_1775375862.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(49,'1910efa0-bbe5-11e8-9a97-dd4a029226ca','9020781045_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020781045_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020781045_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(50,'19252a20-bbe5-11e8-a32f-67165ad59a11','9020760426_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020760426_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020760426_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(51,'192705e0-bbe5-11e8-a1cf-190790f48a70','9020769186_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020769186_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020769186_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(52,'1927b640-bbe5-11e8-be70-5fff96ea477b','9020739772_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020739772_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020739772_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:07','2018-09-19 01:22:07'),(53,'1941c0d0-bbe5-11e8-a48c-813418e8acb5','9020730843_1775375862.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020730843_1775375862.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020730843_1775375862.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:08','2018-09-19 01:22:08'),(54,'22f7f1f0-bbe5-11e8-a80c-f38e736a4903','8571642989_24286371.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571642989_24286371.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571642989_24286371.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(55,'22f7c590-bbe5-11e8-bb4b-8f48a4567d99','8571705024_24286371.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571705024_24286371.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571705024_24286371.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(56,'22fa5860-bbe5-11e8-8d9d-3357bbda9f26','8571687915_24286371.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571687915_24286371.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571687915_24286371.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(57,'230bd4f0-bbe5-11e8-af07-71c39d183cd5','8605796129_24286371.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8605796129_24286371.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8605796129_24286371.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(58,'230eb2f0-bbe5-11e8-9aa7-dd54d8f2bdc0','8571672704_24286371.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571672704_24286371.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8571672704_24286371.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(59,'23102f70-bbe5-11e8-8a56-07af5704478e','8591566091_24286371.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591566091_24286371.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591566091_24286371.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(60,'23215f00-bbe5-11e8-9573-4d078b675b72','8591482902_24286371.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591482902_24286371.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591482902_24286371.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(61,'23224310-bbe5-11e8-8a7d-950b0279d051','8591521890_24286371.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591521890_24286371.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591521890_24286371.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(62,'23250690-bbe5-11e8-9d48-6908b3681977','8591527335_24286371.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591527335_24286371.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8591527335_24286371.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:24','2018-09-19 01:22:24'),(63,'34781330-bbe5-11e8-ac4e-4f3358e432b2','8727224479_2025844726.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8727224479_2025844726.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8727224479_2025844726.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:53','2018-09-19 01:22:53'),(64,'3479e8c0-bbe5-11e8-afb3-cfd8c44ab025','8711416286_2025844726.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8711416286_2025844726.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8711416286_2025844726.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:53','2018-09-19 01:22:53'),(65,'347a8f20-bbe5-11e8-8687-c1a5366a61cf','8692044880_2025844726.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8692044880_2025844726.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8692044880_2025844726.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:53','2018-09-19 01:22:53'),(66,'348c7840-bbe5-11e8-a671-dd1216fde355','8727254353_2025844726.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8727254353_2025844726.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8727254353_2025844726.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:22:53','2018-09-19 01:22:53'),(67,'4084a6e0-bbe5-11e8-acfd-f93586f38f18','TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:13','2018-09-19 01:23:13'),(68,'408c2690-bbe5-11e8-b7a1-4ff992eca24e','TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:13','2018-09-19 01:23:13'),(69,'409186f0-bbe5-11e8-b9b2-01f9b745bcdb','TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:13','2018-09-19 01:23:13'),(70,'40abadd0-bbe5-11e8-82f2-d7be41c908a1','7432485099_887932983.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/7432485099_887932983.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/7432485099_887932983.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:14','2018-09-19 01:23:14'),(71,'4bf1cc50-bbe5-11e8-a39c-5b96605f923b','9020371798_1526850498.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020371798_1526850498.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020371798_1526850498.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:33','2018-09-19 01:23:33'),(72,'4bf65e00-bbe5-11e8-8add-05aacb484fcc','9020389489_1526850498.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020389489_1526850498.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020389489_1526850498.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:33','2018-09-19 01:23:33'),(73,'4bf7c800-bbe5-11e8-b9be-d3dac3280562','9020383696_1526850498.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020383696_1526850498.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9020383696_1526850498.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:33','2018-09-19 01:23:33'),(74,'4c063f30-bbe5-11e8-b3c1-e95b64d92e4b','9038054349_1526850498.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9038054349_1526850498.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9038054349_1526850498.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:33','2018-09-19 01:23:33'),(75,'4c0ba690-bbe5-11e8-8d44-b1af6832f124','8999934730_1526850498.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8999934730_1526850498.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8999934730_1526850498.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:33','2018-09-19 01:23:33'),(76,'524a3750-bbe5-11e8-9c9e-6f5b863c623e','4302653016_1846066037.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4302653016_1846066037.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4302653016_1846066037.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:43','2018-09-19 01:23:43'),(77,'52539ae0-bbe5-11e8-8580-b5c5db08603f','4304269664_1846066037.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4304269664_1846066037.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4304269664_1846066037.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:43','2018-09-19 01:23:43'),(78,'5261b200-bbe5-11e8-b4c4-cf4bd2d13ea0','4304278318_1846066037.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4304278318_1846066037.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4304278318_1846066037.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:43','2018-09-19 01:23:43'),(79,'52657680-bbe5-11e8-86d7-8bbf17c85933','4302641798_1846066037.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4302641798_1846066037.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4302641798_1846066037.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:43','2018-09-19 01:23:43'),(80,'526a29c0-bbe5-11e8-93c6-cf191415e699','4307658712_1846066037.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4307658712_1846066037.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4307658712_1846066037.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:43','2018-09-19 01:23:43'),(81,'5276d320-bbe5-11e8-bf66-71ecf5d288ab','4307658659_1846066037.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4307658659_1846066037.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4307658659_1846066037.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:23:44','2018-09-19 01:23:44'),(82,'7a1a6260-bbe5-11e8-9539-f776e3324fb0','1847397128_478221028.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/1847397128_478221028.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/1847397128_478221028.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:24:50','2018-09-19 01:24:50'),(83,'7a1b21f0-bbe5-11e8-a965-4f36378b9445','1847397090_478221028.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/1847397090_478221028.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/1847397090_478221028.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:24:50','2018-09-19 01:24:50'),(84,'7a1d6630-bbe5-11e8-bbdf-c9e12d484d7d','4226964978_478221028.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4226964978_478221028.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4226964978_478221028.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:24:50','2018-09-19 01:24:50'),(85,'7a32b220-bbe5-11e8-b689-cfdeac41dc1d','4226982503_478221028.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4226982503_478221028.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/4226982503_478221028.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:24:50','2018-09-19 01:24:50'),(86,'837ef170-bbe5-11e8-980f-a16d741b7ac7','9029600796_1670322891.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9029600796_1670322891.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9029600796_1670322891.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:25:06','2018-09-19 01:25:06'),(87,'8386bef0-bbe5-11e8-8385-dddfd8eeaa13','8991786664_1670322891.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991786664_1670322891.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:25:06','2018-09-19 01:25:06'),(88,'8390d980-bbe5-11e8-b520-cfb12b2c2e09','9029615874_1670322891.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9029615874_1670322891.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/9029615874_1670322891.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:25:06','2018-09-19 01:25:06'),(89,'83a04260-bbe5-11e8-9037-7becefdbb219','8991810733_1670322891.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991810733_1670322891.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/8991810733_1670322891.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 01:25:06','2018-09-19 01:25:06'),(90,'da7cb100-bbf9-11e8-b899-0d68d98fa326','TB26MDRs7KWBuNjy1zjXXcOypXa_!!408034679.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB26MDRs7KWBuNjy1zjXXcOypXa_!!408034679.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB26MDRs7KWBuNjy1zjXXcOypXa_!!408034679.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 03:50:42','2018-09-19 03:50:42'),(91,'da9493e0-bbf9-11e8-b4ae-a1e292abf576','TB208wns1uSBuNjSsziXXbq8pXa_!!408034679.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB208wns1uSBuNjSsziXXbq8pXa_!!408034679.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB208wns1uSBuNjSsziXXbq8pXa_!!408034679.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 03:50:42','2018-09-19 03:50:42'),(92,'da964840-bbf9-11e8-b55b-c3ef7820199a','TB2u538s4WYBuNjy1zkXXXGGpXa_!!408034679.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2u538s4WYBuNjy1zkXXXGGpXa_!!408034679.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2u538s4WYBuNjy1zkXXXGGpXa_!!408034679.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-19 03:50:42','2018-09-19 03:50:42'),(93,'ba7253d0-bca7-11e8-9d04-f9fb709a3dd6','TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-20 00:35:20','2018-09-20 00:35:20'),(94,'ba757730-bca7-11e8-bbbf-f7b2b05a46aa','TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-20 00:35:20','2018-09-20 00:35:20'),(95,'ba755620-bca7-11e8-949f-8dd1e5d32cc5','TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-20 00:35:20','2018-09-20 00:35:20'),(96,'ba854ca0-bca7-11e8-a8c9-efd7afdb172c','7432485099_887932983.400x400.jpg','jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/7432485099_887932983.400x400.jpg','/storage/images/40837a70-a5f0-11e8-b762-513c5b8cd70c/7432485099_887932983.400x400.jpg','image/jpeg',1,NULL,NULL,NULL,'2018-09-20 00:35:20','2018-09-20 00:35:20');
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_09_12_102033_create_core_applications_table',1),(2,'2014_10_12_000000_create_users_table',1),(3,'2014_10_12_100000_create_password_resets_table',1),(4,'2016_06_01_000001_create_oauth_auth_codes_table',1),(5,'2016_06_01_000002_create_oauth_access_tokens_table',1),(6,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(7,'2016_06_01_000004_create_oauth_clients_table',1),(8,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(9,'2018_08_11_084401_create_products_table',1),(10,'2018_08_11_085044_create_orders_table',1),(11,'2018_08_11_085055_create_order_products_table',1),(12,'2018_08_13_073200_create_posts_table',1),(13,'2018_08_13_073219_create_category_table',1),(14,'2018_08_13_073933_create_roles_table',1),(15,'2018_08_13_074010_create_permissions_table',1),(16,'2018_08_13_074101_create_user_roles_table',1),(17,'2018_08_13_074117_create_role_permissions_table',1),(18,'2018_08_13_102150_create_oauth_application_tokens_table',1),(19,'2018_08_13_102355_create_core_application_users_table',1),(20,'2018_08_17_090203_create_product_types_table',1),(21,'2018_08_17_090215_create_product_type_attrs_table',1),(22,'2018_08_17_093559_create_attributes_table',1),(23,'2018_08_20_134640_create_media_table',1),(24,'2018_09_07_075216_create_layouts_table',2),(25,'2018_09_19_141210_add_more_product',3),(26,'2018_09_20_085547_add_product_price',4);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('f8034a61ce9ad90a1733d407af4474a1f30ff03ce0b496fe6edce6b2cf79b55770923c9bbc6e62bb',2,1,'Personal Access Token','[]',0,'2018-08-28 03:09:11','2018-08-28 03:09:11','2019-08-28 10:09:11'),('fbff3a3386c873a2954ba85e82869bcb178d954ae9f928d063c4dc01e2f62c5b7c471671aa7c18fe',1,1,'Personal Access Token','[]',0,'2018-08-28 03:08:32','2018-08-28 03:08:32','2019-08-28 10:08:32');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_app_tokens`
--

DROP TABLE IF EXISTS `oauth_app_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_app_tokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `core_app_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `access_token` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_app_tokens`
--

LOCK TABLES `oauth_app_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_app_tokens` DISABLE KEYS */;
INSERT INTO `oauth_app_tokens` VALUES (1,1,1,'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZiZmYzYTMzODZjODczYTI5NTRiYTg1ZTgyODY5YmNiMTc4ZDk1NGFlOWY5MjhkMDYzYzRkYzAxZTJmNjJjNWI3YzQ3MTY3MWFhN2MxOGZlIn0.eyJhdWQiOiIxIiwianRpIjoiZmJmZjNhMzM4NmM4NzNhMjk1NGJhODVlODI4NjliY2IxNzhkOTU0YWU5ZjkyOGQwNjNjNGRjMDFlMmY2MmM1YjdjNDcxNjcxYWE3YzE4ZmUiLCJpYXQiOjE1MzU0NTA5MTIsIm5iZiI6MTUzNTQ1MDkxMiwiZXhwIjoxNTY2OTg2OTEyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.kQ0RXR1W8ez6_F6Q7b68XLs8c7N9aViZ7HaLssqBt5q9A-Bs9Aatfv2MjNz28jXt1cm6i4VZzqwEpczLsq_XbAc42XELL1fk1cVKrVrB05ih_1bPDJwDJocwpk9d5z7qWAcmS_EysacTCII0g5BIXKNTBOFZYoFvIzauMaNNtECexgA3XI8Z2FkHpkr2wnTK4jUwF4Lf68Qa3grkaWVsL9-xMM9nIOohYvNI6hXAL7kHKm-BzQQzrfhR5QK__Sl1gaEx9eO1cJ8KNALdQYlNd38ilADv17i4Pn8qvadcnvy1l1_qK4sQGoT7VATZgdEbKpWzI7jrPcS8P0eSTjY8IA1qccpeVrtKhjASsIWFpurfISEhuqm_fnH2rWOqew6vgj2zWN613oGNPRHkseH0L8gEEU2ZGvbdr-dvWNUMumwstXx_4UkxZaKoRb66jstlqkt977sq4zVItOE8s7MrvTcEvacogPQ9HJ6496_r9fZGq8FUZpwrnqCt3hbK0bBpItoStXkBPbB3JeZoa3cAZy66sENRicXkCLJDgyWTKLS6G1DLHEQO8LuTNWXK0yGnC7X7rnHrOCEeiIa7bRI_qJBHlHkkPTlccxzLUctjWZEK1rFMPsjKNGh1SJKl8yL7OUdTTbnJwr4x9_TZeb2ch9nWMxrHpfP-Lzq8Ol31Zyw','2019-08-28 10:08:32','2018-08-28 03:08:32','2018-08-28 03:08:32'),(2,1,2,'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImY4MDM0YTYxY2U5YWQ5MGExNzMzZDQwN2FmNDQ3NGExZjMwZmYwM2NlMGI0OTZmZTZlZGNlNmIyY2Y3OWI1NTc3MDkyM2M5YmJjNmU2MmJiIn0.eyJhdWQiOiIxIiwianRpIjoiZjgwMzRhNjFjZTlhZDkwYTE3MzNkNDA3YWY0NDc0YTFmMzBmZjAzY2UwYjQ5NmZlNmVkY2U2YjJjZjc5YjU1NzcwOTIzYzliYmM2ZTYyYmIiLCJpYXQiOjE1MzU0NTA5NTEsIm5iZiI6MTUzNTQ1MDk1MSwiZXhwIjoxNTY2OTg2OTUxLCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.FBnMrVIzCpFrdI8H4H5CbqZHsAG-Rnijx7PWx9VulmNbgzesPuW1BybHMI4sEzOJyCHmw4H_TiKGGAm_i2gaGhBh9LtQABO5Bmdh4Rmai3SBi3cPmOiADlp26bn3Ja9N-D9XDEmH8Hxv-lId9o0prEqPJZwhINAVqAOe497KHYEcNwyW2-HpOJk33v1q-mdHWQ2fM9Vqaj4U33AETQVgbBkW_nKQHYzyLlFBFzZVn-Nng_f4wKinC_HJUV4c88GgocVRDophiJ8JzNMyXyrgf0hXZqNpgs1pauaR8vqlxNJvx04KafFvMF2OIfEmohG0ZEckwzez3u9cpTCcexH6BrqvWRddgrzylHb_2MBWXK-GG_leO2Ix7FJZ4A_4rkvRJtE5u5IAPO5BxXD_RY0IYzf5aCc-iasTPqZ3gdPs_pEZGjYwLUM7Xwx-wK7qert3oSlcBd_s_2W5grcSMW8pjyG-ZCkZ32NeKlK5CrY84lJsbVX8Q9r4Y6SsVgZUUKYGCvKWrW2C0o91AeOPVeDLbS19Tpad7EMDp7vmmH70EF3b55RmuB7wXQwY_pQL-dXh4gk06EY7GiPkCjUIAauyMAje84EfQ-UfpFWCLAnNUykW9OYvXs2T7dnOldVaSIQ_brohuMZLm9dha9C-CKQBWk8JizOVs4begh8Z81KlSPw','2019-08-28 10:09:11','2018-08-28 03:09:11','2018-08-28 03:09:11');
/*!40000 ALTER TABLE `oauth_app_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Laravel Personal Access Client','9H4QDr0FWADOdn4Vand3HdAOdVQReUu6fdsWk9Ao','http://localhost',1,0,0,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(2,NULL,'Laravel Password Grant Client','4Q6qu7KV2YqJmX5cOrZgyUEjILh0bCkkjmRBV7lR','http://localhost',0,1,0,'2018-08-28 03:08:24','2018-08-28 03:08:24');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2018-08-28 03:08:24','2018-08-28 03:08:24');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_products`
--

DROP TABLE IF EXISTS `order_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_products`
--

LOCK TABLES `order_products` WRITE;
/*!40000 ALTER TABLE `order_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `orders` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  `quality` int(11) DEFAULT NULL,
  `total` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `posts` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `core_app_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `body` text COLLATE utf8mb4_unicode_ci,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_types`
--

DROP TABLE IF EXISTS `product_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `real_price` int(11) DEFAULT '0',
  `price` int(11) DEFAULT '0',
  `discount` int(11) DEFAULT '0',
  `quality` int(11) DEFAULT '0',
  `price_unit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'vnd',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_types`
--

LOCK TABLES `product_types` WRITE;
/*!40000 ALTER TABLE `product_types` DISABLE KEYS */;
INSERT INTO `product_types` VALUES (1,8,'Gấu Panda 25cm',NULL,100000,NULL,1,'vnd','2018-09-25 06:27:03','2018-09-25 06:32:13'),(2,8,'Gấu Panda 35cm',NULL,180000,NULL,1,'vnd','2018-09-25 06:32:49','2018-09-25 06:32:49'),(3,7,'Chó Corgi 35cm',NULL,190000,NULL,2,'vnd','2018-09-25 06:54:41','2018-09-25 06:54:58'),(4,7,'Chó Corgi 50cm',NULL,270000,NULL,2,'vnd','2018-09-25 06:56:11','2018-09-25 06:57:58'),(5,7,'Chó Corgi 60cm',NULL,320000,NULL,4,'vnd','2018-09-25 07:00:10','2018-09-25 07:00:10'),(6,9,'Hamster Cute 30cm',NULL,230000,NULL,1,'vnd','2018-09-25 07:01:25','2018-09-25 07:01:25'),(7,9,'Hamster Cute 40cm',NULL,260000,NULL,1,'vnd','2018-09-25 07:02:02','2018-09-25 07:02:02'),(8,6,'Váy Lolita',NULL,300000,NULL,1,'vnd','2018-09-25 07:04:11','2018-09-25 07:04:20');
/*!40000 ALTER TABLE `product_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `core_app_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `seo_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `excerpt` text COLLATE utf8mb4_unicode_ci,
  `description` text COLLATE utf8mb4_unicode_ci,
  `media` text COLLATE utf8mb4_unicode_ci,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `hot` int(11) NOT NULL DEFAULT '3',
  `new` tinyint(1) NOT NULL,
  `price` int(11) NOT NULL DEFAULT '0',
  `real_price` int(11) NOT NULL DEFAULT '0',
  `discount` int(11) NOT NULL DEFAULT '0',
  `quality` int(11) NOT NULL DEFAULT '0',
  `price_unit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'vnd',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (6,'3a18c7c0-bbfa-11e8-a42a-8b3b982b93d6','Váy Lolita',1,1,0,NULL,'vay-lolita','+ Chất liệu : Vải cát trắng+ Màu sắc : Trắng+ Thích hợp cho các bạn thích style Nhật Bản đáng yêu. Màu sắc t...','<p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">+ Chất liệu : Vải cát trắng</span></p><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">+ Màu sắc : Trắng</span></p><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">+ Thích hợp cho các bạn thích style Nhật Bản đáng yêu. Màu sắc tươi tắn, kín đáo nên vô tư mặc đi học nhe các bạn. From áo rộng, to, có dây buộc điều chỉnh. Các bạn 60kg cũng mặc vừa luôn ạ.</span></p><p><span style=\"color: rgb(0, 0, 0); background-color: transparent;\">+ Giá : 300 K</span></p><p><br></p>','[{\"id\":92,\"uuid\":\"da964840-bbf9-11e8-b55b-c3ef7820199a\",\"name\":\"TB2u538s4WYBuNjy1zkXXXGGpXa_!!408034679.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2u538s4WYBuNjy1zkXXXGGpXa_!!408034679.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2u538s4WYBuNjy1zkXXXGGpXa_!!408034679.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 10:50:42\",\"updated_at\":\"2018-09-19 10:50:42\",\"selected\":true},{\"id\":91,\"uuid\":\"da9493e0-bbf9-11e8-b4ae-a1e292abf576\",\"name\":\"TB208wns1uSBuNjSsziXXbq8pXa_!!408034679.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB208wns1uSBuNjSsziXXbq8pXa_!!408034679.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB208wns1uSBuNjSsziXXbq8pXa_!!408034679.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 10:50:42\",\"updated_at\":\"2018-09-19 10:50:42\",\"selected\":true},{\"id\":90,\"uuid\":\"da7cb100-bbf9-11e8-b899-0d68d98fa326\",\"name\":\"TB26MDRs7KWBuNjy1zjXXcOypXa_!!408034679.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB26MDRs7KWBuNjy1zjXXcOypXa_!!408034679.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB26MDRs7KWBuNjy1zjXXcOypXa_!!408034679.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 10:50:42\",\"updated_at\":\"2018-09-19 10:50:42\",\"selected\":true}]',0,1,'2018-09-19 03:53:22','2018-09-25 07:03:29',3,1,0,0,0,0,'vnd'),(7,'c9a40810-bc13-11e8-84ba-85ce9a9844c4','Chó Corgi',1,1,14,NULL,'cho-corgi','Chó Corgi 35cm - 190KChó Corgi 50cm - 270KChó Corgi 60cm - 320KChất liệu : Bông mềm&nbsp;Màu : Nâu','<p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Chó Corgi 35cm - 190K</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Chó Corgi 50cm - 270K</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Chó Corgi 60cm - 320K</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Chất liệu : Bông mềm&nbsp;</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Màu : Nâu</span></p>','[{\"id\":70,\"uuid\":\"40abadd0-bbe5-11e8-82f2-d7be41c908a1\",\"name\":\"7432485099_887932983.400x400.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/7432485099_887932983.400x400.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/7432485099_887932983.400x400.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:23:14\",\"updated_at\":\"2018-09-19 08:23:14\",\"selected\":true},{\"id\":69,\"uuid\":\"409186f0-bbe5-11e8-b9b2-01f9b745bcdb\",\"name\":\"TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2Ajz4fz3z9KJjy0FmXXXiwXXa_!!2398596044.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:23:13\",\"updated_at\":\"2018-09-19 08:23:13\",\"selected\":true},{\"id\":68,\"uuid\":\"408c2690-bbe5-11e8-b7a1-4ff992eca24e\",\"name\":\"TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2NYBygJbJ8KJjy1zjXXaqapXa_!!2398596044.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:23:13\",\"updated_at\":\"2018-09-19 08:23:13\",\"selected\":true},{\"id\":67,\"uuid\":\"4084a6e0-bbe5-11e8-acfd-f93586f38f18\",\"name\":\"TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/TB2ZO88gNPI8KJjSspoXXX6MFXa_!!2398596044.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:23:13\",\"updated_at\":\"2018-09-19 08:23:13\",\"selected\":true}]',1,1,'2018-09-19 06:56:20','2018-09-25 06:58:17',5,1,0,0,0,0,'vnd'),(8,'cb6347d0-bc13-11e8-bc1e-8b899d864535','Gấu Panda',1,1,14,NULL,'gau-panda','Gấu Panda 25cm - 100KGấu Panda 35cm - 180KGấu Panda 45cm - 220KGấu Panda 55cm - 280KChất liệu : Bông mềmMàu : Trắng đenHiện shop có 2 mẫu cười t...','<p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Gấu Panda 25cm - 100K</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Gấu Panda 35cm - 180K</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Gấu Panda 45cm - 220K</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Gấu Panda 55cm - 280K</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Chất liệu : Bông mềm</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Màu : Trắng đen</span></p><p><span style=\"color: rgb(29, 33, 41); background-color: rgb(255, 255, 255);\">Hiện shop có 2 mẫu cười tít mắt và cười hở miệng</span></p>','[{\"id\":85,\"uuid\":\"7a32b220-bbe5-11e8-b689-cfdeac41dc1d\",\"name\":\"4226982503_478221028.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/4226982503_478221028.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/4226982503_478221028.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:24:50\",\"updated_at\":\"2018-09-19 08:24:50\",\"selected\":true},{\"id\":84,\"uuid\":\"7a1d6630-bbe5-11e8-bbdf-c9e12d484d7d\",\"name\":\"4226964978_478221028.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/4226964978_478221028.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/4226964978_478221028.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:24:50\",\"updated_at\":\"2018-09-19 08:24:50\",\"selected\":true},{\"id\":83,\"uuid\":\"7a1b21f0-bbe5-11e8-a965-4f36378b9445\",\"name\":\"1847397090_478221028.400x400.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/1847397090_478221028.400x400.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/1847397090_478221028.400x400.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:24:50\",\"updated_at\":\"2018-09-19 08:24:50\",\"selected\":true},{\"id\":82,\"uuid\":\"7a1a6260-bbe5-11e8-9539-f776e3324fb0\",\"name\":\"1847397128_478221028.400x400.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/1847397128_478221028.400x400.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/1847397128_478221028.400x400.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:24:50\",\"updated_at\":\"2018-09-19 08:24:50\",\"selected\":true}]',1,1,'2018-09-19 06:56:23','2018-09-25 06:25:18',3,1,0,0,0,0,'vnd'),(9,'d68e2f70-bc13-11e8-83b1-5d5efa505cbf','Hamster Cute',1,1,14,NULL,'hamster-cute','Hamster Cute 30cm - 230KHamster Cute 40cm - 260KChất liệu : Bông mềm&nbsp;Màu sắc : Xám, Nâu','<p><span style=\"background-color: rgb(255, 255, 255); color: rgb(29, 33, 41);\">Hamster Cute 30cm - 230K</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(29, 33, 41);\">Hamster Cute 40cm - 260K</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(29, 33, 41);\">Chất liệu : Bông mềm&nbsp;</span></p><p><span style=\"background-color: rgb(255, 255, 255); color: rgb(29, 33, 41);\">Màu sắc : Xám, Nâu</span></p>','[{\"id\":66,\"uuid\":\"348c7840-bbe5-11e8-a671-dd1216fde355\",\"name\":\"8727254353_2025844726.400x400.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8727254353_2025844726.400x400.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8727254353_2025844726.400x400.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:22:53\",\"updated_at\":\"2018-09-19 08:22:53\",\"selected\":true},{\"id\":65,\"uuid\":\"347a8f20-bbe5-11e8-8687-c1a5366a61cf\",\"name\":\"8692044880_2025844726.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8692044880_2025844726.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8692044880_2025844726.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:22:53\",\"updated_at\":\"2018-09-19 08:22:53\",\"selected\":true},{\"id\":64,\"uuid\":\"3479e8c0-bbe5-11e8-afb3-cfd8c44ab025\",\"name\":\"8711416286_2025844726.400x400.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8711416286_2025844726.400x400.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8711416286_2025844726.400x400.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:22:53\",\"updated_at\":\"2018-09-19 08:22:53\",\"selected\":true},{\"id\":63,\"uuid\":\"34781330-bbe5-11e8-ac4e-4f3358e432b2\",\"name\":\"8727224479_2025844726.jpg\",\"extension\":\"jpg\",\"url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8727224479_2025844726.jpg\",\"thumb_url\":\"\\/storage\\/images\\/40837a70-a5f0-11e8-b762-513c5b8cd70c\\/8727224479_2025844726.jpg\",\"mime_type\":\"image\\/jpeg\",\"core_app_id\":1,\"size\":null,\"domain\":null,\"folder\":null,\"created_at\":\"2018-09-19 08:22:53\",\"updated_at\":\"2018-09-19 08:22:53\",\"selected\":true}]',1,1,'2018-09-19 06:56:42','2018-09-25 03:43:26',4,1,0,0,0,0,'vnd');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permissions`
--

DROP TABLE IF EXISTS `role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `role_permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permissions`
--

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `core_app_id` int(10) unsigned NOT NULL,
  `admin` int(11) NOT NULL DEFAULT '0',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'4c97c0d0-aaaa-11e8-b905-4d694c13fa34','moriko_admin','moriko_admin@gmail.com','$2y$10$az4plmMind5V20ADPo7RpeRYHi4nAsemk74HEqE9cJ6tROtUEcK7K',1,1,1,NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24'),(2,'4ca22ef0-aaaa-11e8-891e-cf80aa18cdd1','moriko_guest','moriko_guest@gmail.com','$2y$10$j2IlGdNTSRUzxqlZDiuTuOU87/S2mhuDowAoQQKvTpubQ9CwSbGTC',1,1,0,NULL,'2018-08-28 03:08:24','2018-08-28 03:08:24');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-27 17:53:56
