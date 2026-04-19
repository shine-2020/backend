const express=require('express')
const app=express()
const PORT = process.env.PORT || 3000;
const cors = require("cors");

app.use(express.json())
app.use(cors())

const user={
    username:"admin",
    password:"1234"
}

app.post('/login',(req,res)=>{
    const {username,password}=req.body
    if (username===user.username&& password===user.password){
        res.json({
            success:true,message:"login succesful"
        })
    }else{
        res.json({
            success:'false',message:'invalide credential'
        })
    }




})









// app.get('/', (req,res)=>{
//     res.send('hellos express  fucker server')

// })


app.listen(PORT,()=>{
    console.log('server is running')
})