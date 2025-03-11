const express = require('express');
const cors = require('cors'); // Add this line at the top
const app = express();
app.use(cors()); // Use this middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/home', (req, res)=>{
    res.send('on home');
});
app.post('/sendLink', async(req, res)=>{
    const {reelLink} = req.body;
    console.log(reelLink);
});

app.listen(3000, ()=>{
    console.log('ON PORT 3000!');
})