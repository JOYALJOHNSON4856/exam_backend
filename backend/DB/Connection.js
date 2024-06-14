const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://joyal123:labour@cluster0.mzr7ysm.mongodb.net/joyal123?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('mongodb atlas connected with testserver')
}).catch((err)=>{
    console.log(`connection error ${err}`);
})