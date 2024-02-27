-- MySQL dump 10.13  Distrib 8.3.0, for macos14 (x86_64)
--
-- Host: localhost    Database: publications
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Author_Paper`
--

DROP TABLE IF EXISTS `Author_Paper`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Author_Paper` (
  `author_id` int NOT NULL,
  `paper_id` int NOT NULL,
  PRIMARY KEY (`author_id`,`paper_id`),
  KEY `paper_id` (`paper_id`),
  CONSTRAINT `author_paper_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `Authors` (`author_id`),
  CONSTRAINT `author_paper_ibfk_2` FOREIGN KEY (`paper_id`) REFERENCES `Research_Papers` (`paper_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Author_Paper`
--

LOCK TABLES `Author_Paper` WRITE;
/*!40000 ALTER TABLE `Author_Paper` DISABLE KEYS */;
INSERT INTO `Author_Paper` VALUES (1,1),(3,1),(5,1),(2,2),(4,2),(6,2),(3,3),(5,3),(7,3),(4,4),(6,4),(8,4),(5,5),(7,5),(9,5),(6,6),(8,6),(10,6),(7,7),(9,7),(11,7),(8,8),(10,8),(12,8),(9,9),(11,9),(13,9),(10,10),(12,10),(14,10),(11,11),(13,11),(15,11),(1,12),(12,12),(14,12),(2,13),(13,13),(15,13),(1,14),(3,14),(14,14),(2,15),(4,15),(15,15),(1,16),(3,16),(5,16),(2,17),(4,17),(6,17),(3,18),(5,18),(7,18),(4,19),(6,19),(8,19),(5,20),(7,20),(9,20),(6,21),(8,21),(10,21),(7,22),(9,22),(11,22),(8,23),(10,23),(12,23),(9,24),(11,24),(13,24),(10,25),(12,25),(14,25),(11,26),(13,26),(15,26),(1,27),(12,27),(14,27),(2,28),(13,28),(15,28),(1,29),(3,29),(14,29),(2,30),(4,30),(15,30);
/*!40000 ALTER TABLE `Author_Paper` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Authors`
--

DROP TABLE IF EXISTS `Authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Authors` (
  `author_id` int NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) NOT NULL,
  `university` varchar(255) NOT NULL,
  `date_of_birth` date NOT NULL,
  `h_index` int DEFAULT NULL,
  `gender` char(1) DEFAULT NULL,
  `mentor` int DEFAULT NULL,
  PRIMARY KEY (`author_id`),
  KEY `fk_mentor` (`mentor`),
  CONSTRAINT `fk_mentor` FOREIGN KEY (`mentor`) REFERENCES `Authors` (`author_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Authors`
--

LOCK TABLES `Authors` WRITE;
/*!40000 ALTER TABLE `Authors` DISABLE KEYS */;
INSERT INTO `Authors` VALUES (1,'John Doe','University of Michigan','1980-01-01',100,'M',15),(2,'Alice Johnson','Stanford University','1985-03-15',95,'F',1),(3,'David Smith','Harvard University','1982-05-20',90,'M',1),(4,'Emily Brown','Massachusetts Institute of Technology','1988-07-10',85,'F',2),(5,'Michael Clark','Massachusetts Institute of Technology','1983-09-25',80,'M',3),(6,'Sophia Wilson','Harvard University','1987-11-12',85,'F',4),(7,'Matthew Taylor','Stanford University','1984-04-08',75,'M',2),(8,'Olivia Martinez','Stanford University','1986-06-30',80,'F',5),(9,'Daniel Anderson','University of Oxford','1981-10-17',70,'M',6),(10,'Isabella White','Princeton University','1989-12-05',75,'F',7),(11,'James Lee','Yale University','1980-02-14',65,'M',8),(12,'Charlotte Hall','Princeton University','1984-08-20',70,'F',9),(13,'Andrew Garcia','University of Toronto','1983-03-10',60,'M',10),(14,'Emma Harris','Cornell University','1987-05-22',65,'F',11),(15,'William Thompson','Cornell University','1982-09-28',55,'M',12);
/*!40000 ALTER TABLE `Authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Research_Papers`
--

DROP TABLE IF EXISTS `Research_Papers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Research_Papers` (
  `paper_id` int NOT NULL AUTO_INCREMENT,
  `paper_title` varchar(255) NOT NULL,
  `conference` varchar(255) DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  PRIMARY KEY (`paper_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Research_Papers`
--

LOCK TABLES `Research_Papers` WRITE;
/*!40000 ALTER TABLE `Research_Papers` DISABLE KEYS */;
INSERT INTO `Research_Papers` VALUES (1,'Advancements in Quantum Computing','Quantum Computing Conference','2020-01-15'),(2,'Machine Learning in Healthcare','MLHC 2020','2020-03-20'),(3,'Renewable Energy Technologies','Renewable Energy Conference','2020-05-10'),(4,'Advancements in Artificial Intelligence','AAAI 2020','2020-07-01'),(5,'Neuroscience Research: Recent Findings','Neuroscience Conference','2020-09-15'),(6,'Climate Change and Its Impacts','Climate Change Symposium','2020-11-30'),(7,'Advancements in Robotics','Robotics Summit','2021-02-28'),(8,'The Future of Space Exploration','Space Exploration Conference','2021-04-10'),(9,'Data Privacy and Security','Privacy & Security Symposium','2021-06-20'),(10,'Advancements in Biotechnology','Biotechnology Conference','2021-08-01'),(11,'Emerging Trends in Computer Vision','Computer Vision Workshop','2021-10-15'),(12,'Blockchain Technology: Recent Developments','Blockchain Summit','2021-12-30'),(13,'Advancements in Nanotechnology','Nanotechnology Symposium','2022-03-05'),(14,'Recent Trends in Cybersecurity','Cybersecurity Conference','2022-05-15'),(15,'Health Informatics: Current State and Future Directions','Health Informatics Symposium','2022-07-01'),(16,'Advancements in Quantum Computing Technologies','Quantum Technologies Conference','2022-09-15'),(17,'AI Ethics: Challenges and Solutions','AI Ethics Symposium','2022-11-01'),(18,'Renewable Energy Integration in Smart Grids','Smart Grid Conference','2023-01-20'),(19,'Neuroplasticity and Learning: Recent Discoveries','Neuroscience Symposium','2023-03-10'),(20,'Advancements in Natural Language Processing','NLP Summit','2023-05-01'),(21,'Biomedical Imaging Technologies: Innovations and Applications','Biomedical Imaging Symposium','2023-07-15'),(22,'Blockchain Applications in Supply Chain Management','Supply Chain Summit','2023-09-30'),(23,'Emerging Trends in Quantum Computing','Quantum Computing Workshop','2023-11-15'),(24,'Advances in Gene Editing Technologies','Gene Editing Symposium','2024-01-01'),(25,'Cybersecurity Threats in IoT Devices','IoT Security Conference','2024-03-20'),(26,'Recent Developments in Machine Learning','ML Summit','2024-05-10'),(27,'Climate Change Adaptation Strategies','Climate Change Symposium','2024-07-01'),(28,'The Future of Autonomous Vehicles','Autonomous Vehicles Conference','2024-09-15'),(29,'Advancements in Quantum Machine Learning','Quantum Machine Learning Workshop','2024-11-01'),(30,'Applications of Artificial Intelligence in Finance','AI in Finance Symposium','2024-12-15');
/*!40000 ALTER TABLE `Research_Papers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-27 16:11:32
