const express = require('express')
const app = express()
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cors = require('cors')



app.use(bodyParser.json());
app.use(cors( ));




const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test8-7-2022'
});


app.get('/', (req, resp) => {
    resp.send('text')
})

//Authentication

app.post('/Login', function (request, response) {
    // Capture the input fields
    let user = request.body.user;
    let password = request.body.password;

    var data = [user, password]




    var sql = `SELECT * FROM userinfo WHERE user = ? AND password = ?`;

    connection.query(sql,data, function (error, results) {

      
        try {
            response.send(results).status(200); 
        }
        catch (error) {
           response.status(400).send(error);
          
          
        }

    

    });

});

app.post('/Createuser', function (request, response) {
    // Capture the input fields
    let user = request.body.user;
    let password = request.body.password;
    user = user.toString();
    password = password.toString();

    // Ensure the input fields exists and are not empty
    if (user && password) {

        var sql = `INSERT INTO userinfo (user, password) VALUES (?, ?)`;
        connection.query(sql, [user, password], function (error, results) {
    
            try {
                response.status(200).send(results.message);
            
            }

            catch (error) {
                response.status(400).send(error);
                
            }
        });
    } else {
        response.send('Please enter Username and Password! Again');
        response.end();
    }
});

//Room List

//Get All Room
app.get('/getallroom', function (request, response) {

    var sql = `SELECT * FROM roomlist`;
    connection.query(sql, function (error, results) {

        try {
            response.status(200).send(results);

        }

        catch (error) {
            response.status(400).send(error);

        }
    });

});

//Update Room
app.post('/updateroom', function (request, response) {
    // Capture the input fields
    let roomid = request.body.roomid;
    let roomname = request.body.roomname;
    let student = request.body.student;

    let data = [roomname, student, roomid]



    var sql = `UPDATE roomlist SET roomname = ? , student = ? WHERE roomid = ?`;
    connection.query(sql, data, function (error, results) {

        try {
            response.status(200).send(results.message);
            
        }

        catch (error) {
           response.status(400).send(error);
           
        }
    });

});

//Create Room
app.post('/createroom', function (request, response) {
    // Capture the input fields

    let roomname = request.body.roomname;
    let student = request.body.student;

    let data = [roomname, student]


    var sql = `INSERT INTO roomlist (roomname, student) VALUES (?, ?)`;
    connection.query(sql, data, function (error, results) {


        try {
            response.status(200).send(results.message);
            
        }

        catch (error) {
            response.status(400).send(error);
           
        }
    });

});

//Delete Room
app.post('/Deleteroom', function (request, response) {
    // Capture the input fields
    let roomid = request.body.roomid;

console.log(request.body.roomid)

    var sql = `DELETE FROM roomlist WHERE roomid = ?`;
    connection.query(sql, roomid, function (error, results) {


        try {
            response.status(200).send(results.message);
            
        }

        catch (error) {
            response.status(400).send(error);
           
        }
    });

});



const port = 5000
app.listen(port, () => console.log(`Server started on ${port}`))