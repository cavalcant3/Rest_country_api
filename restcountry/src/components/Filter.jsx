import React from 'react'

// aqui criamos aquela parte do filtro 
const Filter = () => {
  const search = document.getElementById('search')

  search.addEventListener('input', (e)=> {
    const { value } = e.target
  })

  return (
    <section className='filter'>
      {/* campo de pesquisa */}
      <form className="form-control">
        <input type="search" name="search" id="search"
         placeholder='Search from a country' />
      </form>

        <div className="region-filter">
          <select name="select" id="select" className="select">
          <option value='Filter by region'>Filter by region</option>
            <option value='America'>America</option>
            <option value='Africa'>Africa</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>
          </select>
        </div>
    </section>
  )
}

export default Filter
