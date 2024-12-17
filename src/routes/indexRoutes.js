const { Router } = require('express');
const router = Router();

router.get("/", (req,res) => {
    res.send("Hola usuario, te encuentras en el indice general<br>Marque los siguientes parametros para acceder al resto de paginas creadas<br>/corredoresDelViento<br>/rompedoresDelCielo<br>/danzantesDelFilo<br>/escultoresDeVoluntad");
})

router.get("/corredoresDelViento", function (req,res) {
    res.send("1º Ideal: Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino. <br>2º Ideal: Protegeré a aquellos que no puedan protegerse a si mismos<br>3º Ideal: Protegeré incluso a quienes odie. Mientras sea lo justo.<br> 4º Ideal: Aceptaré que habrá a quienes no pueda proteger.");
});

router.get("/rompedoresDelCielo", (req, res) =>{
    res.send("1º Ideal: Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino. <br> 2º Ideal: Juro buscar la justicia y permitir que me guíe hasta que halle un ideal más perfecto. <br> 3º Ideal: Juro cumplir la voluntad de la ley. <br> 4º Ideal: Purgare el mal que nos atormenta, siempre que la ley lo permita.<br> 5º Ideal: Acepto mi verdad, acepto convertirme en la ley");
});

router.get("/danzantesDelFilo", function (req,res) {
    res.send("1º Ideal: Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino<br>2º Ideal: Recordaré a aquellos que han sido olvidados. <br>3º Ideal: Escuchare a aquellos que han sido ignorados");
});

router.get("/escultoresDeVoluntad", (req,res) => {
    res.json({
        Title : "1º Ideal:Vida antes que muerte, fuerza antes que debilidad, viaje antes que destino",
        Title1 : "2º Ideal: Procuraré la libertad a quienes están atados "
    })
});

module.exports = router;