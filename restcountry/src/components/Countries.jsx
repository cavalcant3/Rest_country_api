import React, { useState, useEffect } from "react";
const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  // configurando o useState
  const [countries, setCountries] = useState([])

  // configurando o useEffect
  const fetchCountryData = async() =>{
    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    console.log(countries)
  }

  useEffect(()=>{
    fetchCountryData()
  }, [])

  // requisitando dados da api e mostrando na tela
  return <>
   <section className="grid">
   {countries.map((country)=>{
      const { numericCode, name, population, region, capital, flag } = country

      return <article key={numericCode}>
        <div>
          <img src={flag} alt={name} />
            {/* cards */}
            <div className="details">
              <h3>{name}</h3>
              <h4>Population <span>{population}</span> </h4>
              <h4>Region: <span>{region}</span></h4>
              <h4>Capital: <span>{capital}</span></h4>
            </div>
        </div>
          
        </article>
      

    })}
   </section>
  </>;
};

export default Countries;
