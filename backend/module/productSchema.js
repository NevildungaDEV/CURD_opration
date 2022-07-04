const mongoose=require("mongoose")

const ProuctSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        number:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        price:{
            type:String,
            required:true
        },
        total:{
            type:String,
            required:true
        }
    }
)


module.exports=mongoose.model("productcollection",ProuctSchema)