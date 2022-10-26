const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const coursesInfo =require('./data/coursesNames.json')
app.get('/', (req, res) =>{
    res.send('Courses API running')
});

app.get('/all-curseName', (req,res) =>{
    res.send(coursesInfo);
})

app.listen(port , () =>{
    console.log('Courses server running on port', port);
})