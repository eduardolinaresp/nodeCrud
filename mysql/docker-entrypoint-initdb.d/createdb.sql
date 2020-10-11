#
# Copy createdb.sql.example to createdb.sql
# then uncomment then set database name and username to create you need databases
#
# example: .env MYSQL_USER=appuser and needed db name is myshop_db
#
#    CREATE DATABASE IF NOT EXISTS `myshop_db` ;
#    GRANT ALL ON `myshop_db`.* TO 'appuser'@'%' ;
#
#
# this sql script will auto run when the mysql container starts and the $DATA_PATH_HOST/mysql not found.
#
# if your $DATA_PATH_HOST/mysql exists and you do not want to delete it, you can run by manual execution:
#
#     docker-compose exec mysql bash
#     mysql -u root -p < /docker-entrypoint-initdb.d/createdb.sql
#

#CREATE DATABASE IF NOT EXISTS `dev_db_1` COLLATE 'utf8_general_ci' ;
#GRANT ALL ON `dev_db_1`.* TO 'default'@'%' ;

#CREATE DATABASE IF NOT EXISTS `dev_db_2` COLLATE 'utf8_general_ci' ;
#GRANT ALL ON `dev_db_2`.* TO 'default'@'%' ;

#CREATE DATABASE IF NOT EXISTS `dev_db_3` COLLATE 'utf8_general_ci' ;
#GRANT ALL ON `dev_db_3`.* TO 'default'@'%' ;

FLUSH PRIVILEGES ;




CREATE DATABASE IF NOT EXISTS ng_games COLLATE 'utf8_general_ci';
#GRANT ALL ON `ng_games`.* TO 'default'@'%' ;

USE ng_games;

CREATE TABLE games (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

FLUSH PRIVILEGES ;

DESCRIBE games;

