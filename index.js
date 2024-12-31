const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');  
const userRoutes = require('./routes/userRoutes')
const storyRoutes = require('./routes/storyRoutes')
const audiouserRoutes = require('./routes/audioUsersRoutes')

    
dotenv.config();    
const app = express();
const server = http.createServer(app);  

app.use(express.json()); 
app.use(cors());  
app.use(bodyParser.json());  

mongoose.connect(`${process.env.dbUrl}`)
    .then(() => console.log("MongoDB Connected"))
    .catch(error => console.log("Error connecting to MongoDB:", error));


    app.get('/', (req, res) => {
        res.send('Hello root node');  
    });    
  
    app.use('/user',userRoutes)
    app.use('/story',storyRoutes)
    app.use('/audiouser',audiouserRoutes)
    
    
    const PORT = process.env.PORT;

server.listen(PORT, () => console.log(`App is listening on port ${PORT}`));