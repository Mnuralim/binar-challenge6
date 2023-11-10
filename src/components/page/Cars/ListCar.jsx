const ListCar = ({ cars, error }) => {
  return (
    <section className="cars">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 ">
            <div className="row" id="cars-container">
              {!error && <p>Menampilkan {cars.length} data pencarian</p>}
              {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
              {cars.length === 0 ? (
                <p style={{ textAlign: "center" }}>Data tidak ditemukan</p>
              ) : (
                !error &&
                cars.map((car) => (
                  <div key={car.id} className="card px-2 py-4">
                    <img src={car.image} className="card-img-top mt-4" />
                    <div className="card-body">
                      <h5 className="card-title fs-6">
                        {car.manufacture}/{car.model}
                      </h5>
                      <h5 className="card-title fs-5 fw-bold">Rp {car.rentPerDay} / hari</h5>
                      <p className="cars__p">{car.description}</p>
                      <div className="row">
                        <div className="col-1">
                          <img src="images/fi_users1.png" width="20px" alt="" />
                        </div>
                        <div className="col-10 ms-lg-2">{car.capacity} orang</div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-1">
                          <img src="images/fi_settings.png" width="20px" alt="" />
                        </div>
                        <div className="col-10 ms-lg-2">{car.transmission}</div>
                      </div>
                      <div className="row mt-2 mb-4">
                        <div className="col-1">
                          <img src="images/fi_calendar.png" width="20px" alt="" />
                        </div>
                        <div className="col-10 ms-lg-2">Tahun {car.year}</div>
                      </div>

                      <a href="#" className="btn btn-utama" style={{ width: "100%" }}>
                        Go somewhere
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListCar;
