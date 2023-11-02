import express from "express";
import {
  getLibros,
  getLibroById,
  agregarLibro,
  actualizarLibro,
  eliminarLibro,
} from "../controllers/libroController.js";

const router = express.Router();

router.get("/", getLibros);
router.get("/:id", getLibroById);
router.post("/", agregarLibro);
router.put("/:id", actualizarLibro);
router.delete("/:id", eliminarLibro);

export default router;
