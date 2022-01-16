import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.css"

function CovidData() {
  const [covidCountry, setCovidCountry] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://api.covid19api.com/summary");
      setCovidCountry(data.Countries);
      console.log(data.Countries);
    };
    getData();
  }, []);

  return (
    <div>
      <section className="header">
        {covidCountry?.map((country) => {
          const {
            ID,
            Country,
            CountryCode,
            Date,
            NewConfirmed,
            TotalConfirmed,
            NewDeaths,
            TotalDeaths,
            TotalRecovered,
            NewRecovered,
          } = country;

          return (
            <article key={ID} className="main">
              <h2>
                {Country} , {CountryCode}
              </h2>
              <ul>
                <li>
                  <span>NewConfirmed Cases</span> {NewConfirmed}
                </li>

                <li>
                  <span>TotalConfirmed Cases</span> {TotalConfirmed}
                </li>
                <li>
                  <span>NewDeaths Cases</span> {NewDeaths}
                </li>
                <li>
                  <span>TotalDeaths Cases</span> {TotalDeaths}
                </li>
                <li>
                  <span>TotalRecovered Cases</span> {TotalRecovered}
                </li>
                <li>
                  <span>NewRecovered Cases</span> {NewRecovered}
                </li>
                <li><span>Date</span>{Date}</li>
              </ul>
            </article>
          );
        })}
      </section>
    </div>
  );
}

export default CovidData;
