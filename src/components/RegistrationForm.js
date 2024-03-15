var exp = require('express');
var mysql = require('mysql2');

var app = exp();

var con = mysql.createConnection({
	host:"localhost",
	user: "root",
	password:"root",
	database:"miniproject"
});

con.connect(function(err){
	if(!err)
		console.log("db connected");
	else
		console.log("db connection failed");
})

app.listen(9000, function() {
	console.log("exp with mysql - 9000")
});


//route handler - show data emps from table
app.get('/emps',function(req,res){
	con.query("select * from tenant",function(err,result){
		if(!err)
		{
			res.write("<table border=1>");
			result.forEach(function(emp){
				res.write("<tr>");
				res.write("<td>"+emp.id+"</td>");
				res.write("<td>"+emp.Name+"</td>");
				res.write("<td>"+emp.Mobile_Number+"</td>");
				res.write("<td>"+emp.Email+"</td>");
				res.write("<td>"+emp.Password+"</td>");	
				res.write("</tr>");
			})
			res.write("</table>");
			res.end();
		}
	})
})

//default route
app.all('*',function(req,res){
	res.send("<p> Undefined URL </p>");
})