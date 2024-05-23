const express = require('express');
const app = express();
const CORS = require('cors');
const PORT = 9000;
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(CORS({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student_marks'
})

db.connect((err) => {
    if (err) {
        console.log(`${err} is Occured`);
    } else {
        console.log("MySQL Connected");
    }
})

app.get("/", (req, res) => {
    res.send("This is Our Website Baby");
})

app.post("/genResult", async (req, res) => {
    const Name = req.body.UserName;
    const MSE = req.body.UserMSE;
    const ESE = req.body.USerESE;
    const totalmarks=parseInt(MSE)+parseInt(ESE);
    console.log("TotalMarks Are : "+totalmarks)

    const FinalMarksPercentage = (totalmarks/200)* 100;
    const IntFinalMarks=parseInt(FinalMarksPercentage);

    const Query = `INSERT INTO finalmarks (Name, ESE_Marks, MSE_Marks, TESTFINALMarks) values ("${Name}",${ESE},${MSE},${IntFinalMarks})`

    db.query(Query, (err, res) => {
        if (err) {
            console.log(`Error is Occured While Handling Query:${err}`);
        } else {
            console.log(res);
        }
    })

    res.send(`${FinalMarksPercentage}`);

});

app.listen(PORT, () => {
    console.log(`Server is Listening on PORT:${PORT}`);
})