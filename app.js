const express =require('express')
const app=express();

const PORT =process.env.PORT||4000;
app.get('/',(req,res)=> {
    request.send("i am connected")
}); 
 const start = async () =>{
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} i am here`);
        })
    } catch (error) {
        console.log(error);
    }
 };
 start();