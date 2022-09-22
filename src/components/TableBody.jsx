import { useState, useEffect } from "react";
import axios from "axios";

const TableBody = () => {
  const [flights, setFlights] = useState(null);
  const getFlights = async () => {
    const res = await axios.get("http://localhost:8000/flights");
    setFlights(res);
    console.log(res);
  };
  useEffect(() => {
    getFlights();
  }, []);
  return;
};

export default TableBody;
