const express = require("express");
const mongoose = require("mongoose");
const app = express();
const personRoutes = require('./routes/userRoutes')
const BlogRoutes = require('./routes/blogRoutes')
const commentRoute = require('./routes/commentRoute')
const model = require('./Dbmodels/userModels');
const personModel = require("./Dbmodels/userModels");

app.use(express.json())
mongoose
    .connect('mongodb://127.0.0.1:27017/test', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log("dbconnected") })
    .catch(error => console.log(error));

app.use('/api/v1/users', personRoutes);
app.use('/api/v1/blogs', BlogRoutes);
app.use('/api/v1/blogs', commentRoute);



app.listen(5000, () => { console.log("connection is established") })
