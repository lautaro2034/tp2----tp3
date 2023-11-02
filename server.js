import express from "express";
import libroRouter from "./routes/libroRouter.js";

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static("public"));
app.use("/api/libros", libroRouter);

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
