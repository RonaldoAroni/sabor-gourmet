function Gallery() {
  return (
    <section id="galeria" className="container py-5">
      <h2 className="text-center mb-4">Galería</h2>

      <div className="row">
        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            className="img-fluid rounded"
            alt="Restaurante"
          />
        </div>

        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9"
            className="img-fluid rounded"
            alt="Comida"
          />
        </div>

        <div className="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
            className="img-fluid rounded"
            alt="Chef"
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;