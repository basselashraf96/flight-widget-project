import { useState, useEffect } from "react";
import TableRow from "./TableRow";
const TableBody = () => {
  const [flights, setFlights] = useState(null);
  const getFlights = async () => {
    const res = await fetch("http://localhost:8000/flights");
    const flightsData = await res.json();
    setFlights(Object.values(flightsData.data));
  };

  useEffect(() => {
    getFlights();
  }, []);

  return (
    <tbody>
      {flights?.map((flight, index) => (
        <TableRow key={index} flight={flight} />
      ))}
    </tbody>
  );
};

export default TableBody;
