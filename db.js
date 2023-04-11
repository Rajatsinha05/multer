const mongoose=require('mongoose')

let connect=async()=>{

    await mongoose.connect('mongodb+srv://daksh1or2:test@cluster0.d9vq3ik.mongodb.net/?retryWrites=true&w=majority')
    console.log("conected to db")
}
module.exports=connect

