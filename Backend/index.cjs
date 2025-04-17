
const express=require("express");
const cors=require("cors");
const mongoClient=require("mongodb").MongoClient;

const app=express();
const constr="mongodb://127.0.0.1:27017"

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/users",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{
        var database=clientObject.db("bookstore");
        database.collection("users").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})
app.post("/register-user",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{
        var user={
            fullname:req.body.fullname,
            email:req.body.email,
            password:req.body.password
        }
        var database=clientObject.db("bookstore");
        database.collection("users").insertOne(user).then(document=>{
            console.log("registered..")
            res.send()
        })
    })
})
app.get("/books",(req,res)=>{
    mongoClient.connect(constr).then(clientObject=>{
        var database=clientObject.db("bookstore");
        database.collection("books").find({}).toArray().then(document=>{
            res.send(document);
            res.end();
        })
    })
})
app.listen(4030);
console.log("Server started http://127.0.0.1:4030")