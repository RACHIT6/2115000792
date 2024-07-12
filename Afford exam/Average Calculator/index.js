const express = require("express");




const app = express();


app.get ('/numbers/:numberid', (req, res)=> {
    const numberid = req.params.numberid;

    let response = fetch ('');
})


const port = 4000;
app.listen(port, ()=> {
    console.log(`Server running at ${port}`);
})