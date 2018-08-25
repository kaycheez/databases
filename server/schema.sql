CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id int AUTO_INCREMENT, 
  name varchar (255),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int AUTO_INCREMENT,
  user_id int,
  message varchar (255),
  room varchar (255),
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

