const express = require('express');
const path = require('path');

const app = express();

// creating the gym project site using express 

app.get('/', (req, res) => {
    // provide the absolute path
    res.sendFile(path.resolve(__dirname,'./PROJECT-GYM/index.html'))
})

// store all the static files (not main html file) in folder named "public"
// static files - files that servers cannot change
app.use(express.static('./public'))  

// default page
app.all('*', (req, res) => {
    res.status(404).send('Page not found')
})

app.listen(5000, () => {
    console.log('Server listening on port 5000...');
})