const express = require('express');
const app = express();  // create an instance of express func

// express methods 
// app.get  
// app.post
// app.put
// app.delete
// app.all  - serves all the methods
// app.use - serves static and middleware
// app.listen - listening the server on port

// serving the resources
app.get('/', (req, res) => {
    console.log('user hit the home page');
    res.status(200).send('<h1>Home Page</h1>')      // writing content in express
})

app.get('/about', (req, res) => {
    console.log('user hit the about page');
    res.status(200).send('<h1>About Page</h1>')      // writing content in express
})

// default (*) add.
app.all('*',(req, res) => {
    res.status(404).send('<h1>page not found</h1>')
})

// port on which the server is listening on 
app.listen(5000, () => {
    console.log('Server is listening on port 5000...');
})
