class Libro {
  static idCounter = 0;

  constructor(titulo, autor, año) {
    this.id = ++Libro.idCounter;
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }
}

export default Libro;
