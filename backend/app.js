const express=require('express');
const app=express();
require('./db/config');
const User=require('./models/users');
const cors=require('cors');
const authRoutes=require('./routes/authRoutes')

app.use(cors());
app.use(express.json());

app.use(authRoutes);

app.listen(3000)