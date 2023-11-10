import { useEffect, useState } from "react";
import ListCar from "./page/Cars/ListCar";
import MainSectionCar from "./page/Cars/MainSection";
import SearchSection from "./page/Cars/SearchSection";
import getData from "../../utils/fetch";

const Cars = () => {
  const [originalCars, setOriginalCars] = useState([]);
  const [cars, setCars] = useState([]);
  const [passenger, setPassenger] = useState(null);
  const [pickTime, setPickTime] = useState("");
  const [pickDate, setPickDate] = useState("");
  const [typeDriver, setTypeDriver] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        const data = await response.json();
        setOriginalCars(data);
        setCars(data);
      } catch (error) {
        console.error("Terjadi kesalahan salah memuat data");
      }
    };

    fetchData();
  }, []);

  const handleFilter = (car) => {
    if (passenger && car.capacity < parseInt(passenger)) {
      return false;
    }

    if (typeDriver !== "" && car.available !== (typeDriver === "true")) {
      return false;
    }

    if (pickDate && car.availableAt) {
      const carDate = new Date(car.availableAt).getTime();
      const filterDate = new Date(pickDate).getTime();
      if (filterDate <= carDate) {
        return false;
      }
    }

    if (pickTime !== "" && car.availableAt) {
      const carTime = new Date(car.availableAt).getTime();
      const filterTime = new Date(`${pickDate} ${pickTime}`).getTime();
      if (filterTime <= carTime) {
        return false;
      }
    }

    return true;
  };

  const handleSubmit = () => {
    setError("");

    if (!typeDriver || !pickDate || !pickTime) {
      setError("Tipe driver, Tanggal jemput, Waktu jemput wajib diisi");
      return;
    }

    const filteredCars = originalCars.filter(handleFilter);
    setCars(filteredCars);
  };

  return (
    <>
      <MainSectionCar />
      <SearchSection
        passenger={passenger}
        setPassenger={setPassenger}
        handleSubmit={handleSubmit}
        pickDate={pickDate}
        setPickDate={setPickDate}
        pickTime={pickTime}
        setPickTime={setPickTime}
        setTypeDriver={setTypeDriver}
        typeDriver={typeDriver}
      />
      <ListCar cars={cars} error={error} />
    </>
  );
};

export default Cars;
