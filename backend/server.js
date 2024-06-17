require('express-async-errors');

require('dotenv').config();
const connectDB = require('./db/connect');

const express = require('express');
const cors = require('cors');
const app = express();

const errorHandler = require('./middleware/error-handler');

const todoRoutes = require('./routes/todoRoutes');

// Middleware
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api/v1/todos', todoRoutes);

app.use(errorHandler);

const MONGO_URL = process.env.MONGO_URI;
const start = async () => {
  try {
    await connectDB(MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
