console.log('hi1')
const dotenv = require('dotenv').config()
console.log('hi2')
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE
});


var count=3;
function validate()
{
    connection.connect();
    connection.query('SELECT * from sampletable',function(error, results,fields){
        if (error) throw error;
        console.log(results[0].solution);

    });
    
//     var username = document.login.username.value;
//     var password = document.login.password.value;
//     var valid = false;
//     var usernameArray = ["aaa","bbb","ccc"];
//     var passwordArray = ["123","456","789"];
//     for(var i=0; i<usernameArray.length; i++)
//     {
//         if((username == usernameArray[i]) && (password == passwordArray[i]))
//         {
//             valid=true;
//             break;
//         }
//     }
//     if(valid)
//     {
//         alert("login Success");
//         window.location = "watches.html";
//         return false;

//     }
//     var again = "retry";
//     if (count==1)
//     {
//         again = "try"
//     }
//     if (count>=1)
//     {
//         alert("incorrect password")
//         count--;
//     }
//     else 
//     {
//         alert("Please try again later");
//         document.login.username.value = "Try again later";
//         document.login.password.value = "check it again later";
//         document.login.username.disabled = true;
//         document.login.password.disabled = true;
//         return false;
//     }
}
connection.end();
