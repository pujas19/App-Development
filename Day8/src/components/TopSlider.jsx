function TopSlider() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselExampleCaptions" data-slide-to={1} />
          <li data-target="#carouselExampleCaptions" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "450px" }}
              src={"/assets/slider1.png"}
              className="d-block w-100 "
              alt="Slides"
            />           
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "450px" }}
              src={"/assets/slider2.jpeg"}
              className="d-block w-100"
              alt="Slides"
            />            
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "450px" }}
              src={"/assets/slider3.webp"}
              className="d-block w-100"
              alt="Slides"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev bg-transparent border-0"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next bg-transparent border-0"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </button>
      </div>      
    </>
  );
}

export default TopSlider;
