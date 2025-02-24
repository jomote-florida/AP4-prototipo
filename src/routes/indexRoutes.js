const { Router } = require('express');
const router = Router();

router.get("/", (req,res) => {//Get 1 indice
    res.send("Hola usuario, te encuentras en el indice general<br>Marque los siguientes parametros para acceder al resto de paginas creadas<br>/corredoresDelViento<br>/rompedoresDelCielo<br>/danzantesDelFilo<br>/escultoresDeVoluntad<br>Desde las rutas post debes entar en /Scadrial");
})

router.get("/roshar",(req,res) => {
    res.send("Selecciona tu orden de caballeros radiantes");
    console.log("Han entrado en el sistema de Roshar");
})

router.get("/corredoresDelViento", function (req,res) {//Get 2, utilizamos funcion
    res.send("1º Ideal: Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino. <br>2º Ideal: Protegeré a aquellos que no puedan protegerse a si mismos<br>3º Ideal: Protegeré incluso a quienes odie. Mientras sea lo justo.<br> 4º Ideal: Aceptaré que habrá a quienes no pueda proteger.<br>5º Ideal Para poder proteger a los demás, primero me protegeré a mi mismo");
});

router.get("/rompedoresDelCielo", (req, res) =>{//Get 3, tenemos función flecha
    res.send("1º Ideal: Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino. <br> 2º Ideal: Juro buscar la justicia y permitir que me guíe hasta que halle un ideal más perfecto. <br> 3º Ideal: Juro cumplir la voluntad de la ley. <br> 4º Ideal: Purgare el mal que nos atormenta, siempre que la ley lo permita.<br> 5º Ideal: Acepto mi verdad, acepto convertirme en la ley");
});

router.get("/danzantesDelFilo", function (req,res) { //Get 4
    res.send("1º Ideal: Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino<br>2º Ideal: Recordaré a aquellos que han sido olvidados. <br>3º Ideal: Escuchare a aquellos que han sido ignorados");
});

router.get("/escultoresDeVoluntad", (req,res) => {//Get 5 intento con JSON
    res.json({
        Title : "1º Ideal:Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino",
        Title1 : "2º Ideal: Procuraré la libertad a quienes están atados "
    })
});

router.post("/Scadrial", function (req,res) { 
    res.send("Selecciona el tipo de investidura que quieres investigar<br>/Alomancia<br>/Hemalurgia<br>/Feruquimia<br>/Metales");
    console.log("Han entrado en el sistema de Scadrial");
});
router.post("/Scadrial/Alomancia", function (req,res) { 
    res.send("La alomancia es la forma de Investidura más utilizada en Scadrial.<br>Las personas que tienen una o más habilidades alománticas se denominan alománticos o alomantes, y cada poder alomántico está emparejado con un tipo de metal, que debe ser ingerido y quemado para activarse.");
});
router.post("/Scadrial/hemalurgia", function (req,res) { 
    res.send("La hemalurgia es una de las tres manifestaciones principales de la Investidura en Scadrial. Los nativos de ese mundo la consideran una de las tres Artes Metálicas. Los practicantes de la hemalurgia se denominan hemalurgos.");
});
router.post("/Scadrial/Feruquimia", function (req,res) { 
    res.send("La feruquimia es una manifestación de Investidura de fin-neutral que permite al usuario convertir ciertos atributos en Investidura y almacenarlos en un metal con el que mantiene contacto físico, para luego recuperarlos del mismo metal.");
});
router.post("/Scadrial/Metales", function (req,res) { 
    res.send("Acero<br>Hierro<br>Cinc<br>Laton<br>Peltre<br>Estaño<br>Cobre<br>Bronce<br>Duraluminio<br>Aluminio<br>Oro<br>Electrum<br>Nicrosil<br>Cromo<br>Cadmio<br>Bendaleo");
});
module.exports = router;//Comando para exportar nuestros gets al index.js