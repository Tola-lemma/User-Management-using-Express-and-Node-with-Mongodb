const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.get('/',(req,res) => {
   res.send('Welcome to crud Application ')
});
app.listen(PORT,()=>console.log(`Server is running on http://localhost:${PORT} ...`))