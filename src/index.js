const express = require ('express');
const app = express();

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
    console.log("Te encuentras en el puerto "+ app.get("port"));
});



app.use(require("./routes/indexRoutes"));