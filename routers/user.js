const express=require('express');
const pool=require('../pool.js');
var router=express.Router();


//登录
router.get("/login",(req,res)=>{
	var $phone=req.query.phone;
	var $upwd=req.query.upwd;
	if (!$phone){
		res.send("用户名不存在");
		return;
	}
	if (!$upwd){
		res.send("密码不正确")
	}
	var sql="select * from s_user where phone=? and upwd=?"
	pool.query(sql,[$phone,$upwd],(err,result)=>{
		if (err)throw err;
		if (result.length>0){
			res.send("1")
		}else{
			res.send("0")	
		}
	})
});


//注册查询手机号是否重复
router.get("/listPhone",(req,res)=>{
	var $phone=req.query.phone;
	if (!$phone){
		res.send("没有此手机号")
	}
	var sql="select * from s_user where phone=?"
	pool.query(sql,[$phone],(err,result)=>{
		if (result.length>0){
			res.send(result[0])
		}
	})
})

//注册添加到数据库
router.get("/updateuser",(req,res)=>{
	var $phone=req.query.phone;
	var $upwd=req.query.upwd
	if (!$phone){
		res.send("没有接收到手机号")
	}
	if (!$upwd){
		res.send("没有接收到密码")
	}
		
	var sql="INSERT INTO s_user  (phone, upwd) VALUES (?, ?)"
	pool.query(sql,[$phone,$upwd],(err,result)=>{
		if (err) throw err;
		if (result.affectedRows>0){
			res.send("1")
		}else{
			res.send("0")
		}
	})
})
module.exports=router;