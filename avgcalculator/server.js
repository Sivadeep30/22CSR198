const express=require('express')
const cors =require('cors')
const app=express()
app.get(cors())
const port=5000

app.use(express.json)
app.get('/items',async (req,res)=>{
    
})

app.get('/numbers/{numberid}',async(req,res)=>{
    
})


app.listen(port,()=>{
    console.log('Server is running in port http://localhost:5000')
});