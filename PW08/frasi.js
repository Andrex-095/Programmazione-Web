const express = require("express");     //Crea ponti API di routing e di impostare middleware per rispondere alle richieste HTTP
const fs = require("fs");   //Consente di lavorare con i file system,ad esempio leggere e scrivere


const app = express();  //Gestisce le richieste HTTP come GET, POST ecc..

const cors = require("cors");   //condivide risorse di diversa origine 
app.use(cors()); //Il client con questo può fare qualsiasi richiesta al server 

const prod_list = JSON.parse(fs.readFileSync("frasi.json")); /*legge il file frasi.json utilizzando il metodo
fs.readFileSync() e pooi viene convertito in un oggetto JS tramite JSON.parse e poi assegnato alla variabile prod_list*/


//GESTIONE DELLE ROUTE '/cictions' ( GET all citations )
app.get("/citations", (req, res) => {
    if (!prod_list) {
        const response = ({
            "status" : "error",
            "message" : "Product not found",
        });
        res.json(response);
    }
    else {
        const response = ({
            "status" : "Tutto ok",
            data: prod_list,
        });
        res.json(response);
    }
});


//GESTIONE DELLE ROUTE '/cictions/:id' ( GET by ID )
app.get("/citations/:id", (req, res) => {
    const id = req.params.id;
    const product = prod_list.find((item) => item.ID === parseInt(id));
    if (!product) {
        const response = ({
            "status" : "error",
            "message" : "ID errato",
        });
        res.json(response);
    }
    else {
        const response = ({
            "status" : "Tutto ok",
            data: product,
        });
        res.json(response);
    }
});

app.listen(3000, () => {
    console.log("Server in ascolto sulla porta 3000");
})