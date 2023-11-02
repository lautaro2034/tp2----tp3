import Libro from "../models/libro.js";

class LibroService {
  constructor() {
    this.libros = [];
  }

  getLibros() {
    return this.libros;
  }

  getLibroById(id) {
    return this.libros.find((libro) => libro.id === id);
  }

  agregarLibro(libro) {
    this.libros.push(libro);
  }

  actualizarLibro(id, nuevoLibro) {
    const libroIndex = this.libros.findIndex((libro) => libro.id === id);
    if (libroIndex !== -1) {
      this.libros[libroIndex] = nuevoLibro;
    }
  }
  obtenerLibroPorId(id) {
    const libroEncontrado = this.libros.find((libro) => libro.id === id);
    return libroEncontrado;
  }

  eliminarLibro(id) {
    const libroIndex = this.libros.findIndex((libro) => libro.id === id);
    if (libroIndex !== -1) {
      this.libros.splice(libroIndex, 1);
      return true; 
    } else {
      return false; 
    }
  }
}

export default LibroService;
