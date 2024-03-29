const express=require('express');
const app=express();
require('./db/config');
const User=require('./models/users');
const cors=require('cors');
const authRoutes=require('./routes/authRoutes');
const tokenRoutes=require('./routes/tokenRoute');
const adminRoutes=require('./routes/adminRoutes')

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(tokenRoutes);
app.use(adminRoutes);

app.listen(3000)