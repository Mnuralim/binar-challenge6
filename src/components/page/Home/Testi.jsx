import ElipseIcon from "../../../assets/images/Ellipse 10 (1).png";
import RateIcon from "../../../assets/images/Rate.svg";
import BillBrake from "../../../assets/images/BillFagerbakke (1).jpg";
import LeftButton from "../../../assets/images/Leftbutton.png";
import RightButton from "../../../assets/images/Rightbutton.png";

const Testi = () => {
  return (
    <section className="bagiancarousel" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center my-5">
            <h1 className="fw-bold">Testimonial</h1>
            <p className="mt-3">Berbagai review positif dari para pelanggan kami</p>
          </div>
        </div>
        <div className="row gap-3 gap-md-0 mx-1 pt-5 pb-4 pt-md-3 testi-content">
          <div className="col-md-12 d-flex justify-content-center">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div>
                    <div className="row d-flex align-items-center flex-column flex-md-row justify-content-center">
                      <div className="col-md-2">
                        <div className="d-flex justify-content-center">
                          <img src={ElipseIcon} className="d-block rounded-circle" style={{ width: "80px", height: "80px", objectFit: "fill" }} alt="testi-profile" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <div className="d-flex justify-content-center justify-content-md-start">
                            <img src={RateIcon} alt="rate" className="d-block my-4" />
                          </div>
                          <p className="testi-comment">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod”
                          </p>
                          <h2 className="testi-user">John Dee 32, Bromo</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item active">
                  <div>
                    <div className="row d-flex align-items-center flex-column flex-md-row justify-content-center">
                      <div className="col-md-2">
                        <div className="d-flex justify-content-center">
                          <img src={BillBrake} className="d-block rounded-circle" style={{ width: "80px", height: "80px", objectFit: "fill" }} alt="testi-profile" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div>
                          <div className="d-flex justify-content-center justify-content-md-start">
                            <img src={RateIcon} alt="rate" className="d-block my-4" />
                          </div>
                          <p className="testi-comment">
                            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod”
                          </p>
                          <h2 className="testi-user">Subagyo 42, Karawang</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <img src={LeftButton} alt="" />
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <img src={RightButton} alt="" />
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testi;
