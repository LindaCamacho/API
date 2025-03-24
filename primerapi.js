const express = require("express"); 
const app = express(); 
const port = 3333;

//RUTA DE PRUEBA
app.get("/", (req, res) => {
    res.json({mensaje: "Hola mundo!"})
}); 

//INICAR SERVIDOR
app.listen(port, () => {
    console.log(`Servidor API inicializado en --> http://localhost:${port}`);
});
