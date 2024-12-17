const express = require ('express');
const app = express();//Creamos nuestra variable que contiene el objeto express

app.set("port", process.env.PORT || 8080);//Buscamos el puerto

app.listen(app.get("port"), () => {//Función flecha para saber en que puerto estamos mandando mensaje a consola
    console.log("Te encuentras en el puerto "+ app.get("port"));
});



app.use(require("./routes/indexRoutes"));//Una exportación de modulos de nuestro otro archivo donde tenemos los gets