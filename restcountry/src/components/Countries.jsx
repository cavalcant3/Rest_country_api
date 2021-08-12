// importando o use state pára aguardar dados da api
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  // configurando o useState
  const [countries, setCountries] = useState([])

  // configurando uma função assincrona para informar
  const fetchCountryData = async() =>{

    const response = await fetch(url)
    const countries = await response.json()
    setCountries(countries)
    // console.log(countries)
  }
  // "apresentando" os dados
  useEffect(()=>{
    fetchCountryData()
  }, [])
// função para remover os países
  const removeCountry = (numericCode) => {
    const newCountry = countries.filter((country)=> country.numericCode !== numericCode)
    setCountries(newCountry)
  }

  // requisitando dados da api e mostrando na tela
  return <>
   <section className="grid">
   {countries.map((country)=>{
      const { numericCode,
               name, 
               population, 
               region, 
               capital, 
               flag
             } = country
          // cards
      return <article key={numericCode}>
        <div>
          <img src={flag} alt={name} />
            {/* cards-legendas */}
            <div className="details">
              <h3>{name}</h3>
              <h4>Population <span>{population}</span> </h4>
              <h4>Region: <span>{region}</span></h4>
              <h4>Capital: <span>{capital}</span></h4>
              <div className="buttons">
              <Link to={`/countries/${name}`} className='btn' >Learn more</Link>
              <button className="btn" onClick={() => removeCountry(numericCode)} >Remove country</button>
              </div>
            </div>
        </div>
          
        </article>
      

    })}
   </section>
  </>;
};

export default Countries;
