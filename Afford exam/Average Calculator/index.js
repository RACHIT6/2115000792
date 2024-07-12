const express = require("express");




const app = express();


app.get ('/numbers/:numberid', async(req, res)=> {
    const numberid = req.params.numberid;
    if (numberid === 'p') {
        let resp = await fetch('http://20.244.56.144/test/primes');
        let data = resp.json();
        res.send(data);
    }
    if (numberid === 'f') {
        let resp = await fetch('http://20.244.56.144/test/fibo');
        let data = resp.json();
        res.send(data);
    }
    if (numberid === 'e') {
        let resp = await fetch('http://20.244.56.144/test/even');
        let data = resp.json();
        res.send(data);
    }
    if (numberid === 'r') {
        let resp = await fetch('http://20.244.56.144/test/rand');
        let data = resp.json();
        res.send(data);
    }
})


const port = 4000;
app.listen(port, ()=> {
    console.log(`Server running at ${port}`);
})
