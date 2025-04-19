const express= require('express');
const cors= require('cors');
const connectDB= require('./config/db');
const bookRoutes= require('./routes/bookRoutes');
require('dotenv').config();

const app= express();
connectDB();

app.get('/', (req, res) => {
    res.send('📚 Welcome to BookBuddy Backend');
  });
  

app.use(cors({origin: 'http://localhost:3000'}));
app.use(express.json());
app.use('/api/books', bookRoutes);

app.listen(3000,()=> console.log('Server is running on port 3000'));