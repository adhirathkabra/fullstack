import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Country from './components/Country'
import Detail from './components/Detail'
import Many from './components/Many'
import countryService from './services/countries'


const App = () => {
  const [ countries, setCountries ] = useState([]) 
  const [ filter, setFilter ] = useState('')
  const [ many, setMany ] = useState(null)
  const [ detail, setDetail ] = useState(null)

  const handleFilter = (event) => {
    setFilter(event.target.value)
    countryService
      .getAll()
      .then(countries => {
        const filtered = countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()))
        if (filtered.length > 10) {
          setMany('Too many matches, specify another filter')
          setCountries([])
          setDetail(null)
        } else if (filtered.length > 1 && filtered.length <= 10) {
          setMany(null)
          setCountries(filtered)
          setDetail(null)
        } else {
          setMany(null)
          setCountries([])
          setDetail(filtered[0])
        }
      })  
  }

  const showCountry = (name) => {
    const country = countries.filter(c => c.name === name)[0]
    setMany(null)
    setCountries([])
    setDetail(country)
  }

  return (
    <div>
      <Filter filter={filter} onChange={handleFilter} />
      <Many message={many}/>
      {countries.map(country => 
        <Country key={country.name} country={country} showCountry={() => showCountry(country.name)} />
      )}
      <Detail detail={detail} />
    </div>
  )
}

export default App