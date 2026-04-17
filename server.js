const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();

const TOKEN = "ISI_TOKEN_KAMU";

let history = [];
let lastPeriod = "";

async function getData(){
    const res = await fetch("https://api.55fiveapi.com/api/webapi/GetGameIssue",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+TOKEN
        },
        body: JSON.stringify({ typeId: 1 })
    });

    const json = await res.json();
    return json.data;
}

function prediksi(period){
    return (parseInt(period.slice(-2)) % 2 === 0) ? "BIG" : "SMALL";
}

async function loop(){
    try{
        const data = await getData();

        const period = data.issueNumber;
        const number = data.number;
        const hasil = number >= 5 ? "BIG" : "SMALL";

        if(period !== lastPeriod){

            const pred = prediksi(period);

            setTimeout(()=>{
                const status = pred === hasil ? "WINN" : "LOSE";

                history.unshift({
                    period,
                    number,
                    pred,
                    hasil,
                    status
                });

                if(history.length > 20) history.pop();

            },30000);

            lastPeriod = period;
        }

    }catch(e){
        console.log(e.message);
    }
}

setInterval(loop,5000);

app.get("/",(req,res)=>{
    res.send("SERVER RUNNING 🔥");
});

app.get("/data",(req,res)=>{
    res.json(history);
});

app.listen(3000,()=>{
    console.log("RUNNING");
});
