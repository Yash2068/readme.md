CREATE DATABASE office_planning;
USE office_planning;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);
CREATE TABLE projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  creator VARCHAR(255) NOT NULL,
  collaborator VARCHAR(255),
  total_budget DECIMAL(15, 2) DEFAULT 0
);
CREATE TABLE positions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT,
  name VARCHAR(255),
  budget DECIMAL(15, 2),
  FOREIGN KEY (project_id) REFERENCES projects(id)
);