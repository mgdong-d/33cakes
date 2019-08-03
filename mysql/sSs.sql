 #设置客户端连接服务器端的编码为utf8
 SET NAMES UTF8;

 #丢弃数据库
DROP DATABASE IF EXISTS sSs;

#创建数据库 设置存储的编码为utf8
CREATE DATABASE gd CHARSET=UTF8;

#进入该数据库
USE sSs;

#创建保存用户数据的表user
CREATE TABLE s_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  user_id  INT,                #用户编号
  uname varchar(4),   #用户名
  upwd varchar(20),   #密码
   phone  VARCHAR(16),      #手机          
);

#添加数据
INSERT INTO user VALUES('001','萨达','123456','12345678912');
INSERT INTO user VALUES('002','火锅','123456','14521123546');
INSERT INTO user VALUES('003','骑猪','123456','14528956835');
INSERT INTO user VALUES('004','灯泡','123456','18976879654');
INSERT INTO user VALUES('005','活力','123456','19786543213');
INSERT INTO user VALUES('006','蛋糕','123456','19786543213');
INSERT INTO user VALUES('007','咯咯','123456','19786543213');
INSERT INTO user VALUES('008','合肥','123456','19786543213');
INSERT INTO user VALUES('009','单双','123456','19786543213');
INSERT INTO user VALUES('010','单杀','123456','19786543213');

