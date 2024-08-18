const express = require('express');
const fs = require('fs');

const app = express();

const cors = require('cors');
app.use(cors());

const person_list = JSON.parse(fs.readFileSync("nomi.json"));

app.get("/persone", (req, res) =>{
    if (!person_list) {
        const response = ({
            "status": "error",
            "message": "Product not found",
        });
        res.json(response);
    }
    else{
        const response = ({
            "status": "Tutto ok",
            dati: person_list,
        });
        res.json(response);
    }
});

app.get("/persone/:id", (req, res) =>{
    const id = req.params.id;
    const persona = person_list.find((item) => item.id === parseInt(id));
    if (!persona) {
        const response=({
        "status": "error",
        "message": "ID errato",
        });
        res.json(response);
    }else{
        const response = ({
            "status": "Tutto ok",
            dati: persona,
        });
        res.json(response);
    }
});

app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000");
})