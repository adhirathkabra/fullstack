import React from 'react'

const Country = ({ country, showCountry }) => {
  return (
    <div>
      <p>{country.name}</p><button onClick={showCountry}>show</button>
    </div>
  )
}

export default Country