import { useEffect, useState } from "react";

export const Country = ({name}) => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/` + name)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((error) => console.log(error));
  });

  return (
    <>
      {country.map((element) => {
        return (
          <>
            <h1>{element.name.common}</h1>
            <p>Capital: {element.capital}</p>
            <img
              src={element.flags.png}
              alt=""
              style={{ maxHeight: 50, marginTop: "20px", maxWidth: 40 }}
            />
          </>
        );
      })}
    </>
  );
};
