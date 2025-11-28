require ('dotenv').config();
const express = require('express')
const app = express()
const helloRouter = require('./routes/hello');
app.use(express.json())

app.use('/hello',helloRouter)

app.get('/',(req,res)=>{
    res.send('Welcome to sample Node.js on Azure!')
})

const port = process.env.PORT || 3000;
app.listen(port,()=>
    console.log(`Server is running on port ${port}`)
)