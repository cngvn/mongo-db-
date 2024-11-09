const { error } = require("console")
const express = require("express")
const app = express()
const { MongoClient} = require("mongodb")
app.use(express.json())

 const client = new MongoClient("mongodb+srv://cngvn66:Nr1IHJqhJIz4g1th@cngvn.5oleg.mongodb.net/?retryWrites=true&w=majority&appName=cngvn")
 
 let db
 const connenctDB = () =>{
    try{
    client.connect()
   db = client.db("sample_mflix")
   console.log("conn db")
    }catch (error){
      console.log(error)
      res.send(`error ${error}`)
    }
 }
 connenctDB()
app.delete("/users", async (req, res) => {
    try{
    const user = req.body
    const responsse = await db.collection("users").deleteOne()

    res.send("done")  
    }catch{

    }
})



 app.listen(8080,console.log(" running server"))