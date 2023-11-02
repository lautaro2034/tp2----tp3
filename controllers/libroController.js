import LibroService from "../services/libroService.js";
import Libro from "../models/libro.js";

const libroService = new LibroService();

export const getLibros = (req, res) => {
  const libros = libroService.getLibros();
  res.json(libros);
};

export const getLibroById = (req, res) => {
  const id = parseInt(req.params.id);
  const libro = libroService.getLibroById(id);
  if (libro) {
    res.json(libro);
  } else {
    res.status(404).json({ message: "Libro no encontrado" });
  }
};

export const agregarLibro = (req, res) => {
  const { titulo, autor, año } = req.body;
  const nuevoLibro = new Libro(titulo, autor, año);
  libroService.agregarLibro(nuevoLibro);
  res.status(201).json(nuevoLibro);
};
export const actualizarLibro = (req, res) => {
  const id = parseInt(req.params.id);
  const nuevoLibro = req.body;
  
  const libroActual = libroService.obtenerLibroPorId(id); 

  if (libroActual) {
   
    console.log("Detalles actuales del libro:", libroActual);

    nuevoLibro.id = libroActual.id;

   
    libroActual.titulo = nuevoLibro.titulo;
    libroActual.autor = nuevoLibro.autor;
    libroActual.año = nuevoLibro.año; 

   
    res.json(libroActual);
  } else {
    res.status(404).json({ message: "No se encontró el libro para actualizar" });
  }
};

export const eliminarLibro = (req, res) => {
  const id = parseInt(req.params.id);
  const exito = libroService.eliminarLibro(id);
  if (exito) {
    res.json({ message: "Libro eliminado" });
  } else {
    res.status(404).json({ message: "No se encontró el libro para eliminar" });
  }
};
