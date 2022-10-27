const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())
const coursesInfo =require('./data/coursesNames.json')
const coursesNews = require('./data/coursesCard.json')


app.get('/', (req, res) =>{
    res.send('Courses API running')
});

app.get('/all-curseName', (req,res) =>{
    res.send(coursesInfo);
});

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const category_news = coursesNews.filter(n => n.category_id === id);
    res.send(category_news);
});
app.get('/coursesNews' , (req, res) =>{
    res.send(coursesNews);
})

app.get('/coursesNews/:id' ,(req, res) =>{
    const id = req.params.id;
    const selectedCourseNews = coursesNews.find( n => n._id === id)
    res.send(selectedCourseNews);
})

app.listen(port , () =>{
    console.log('Courses server running on port', port);
})

