import React from 'react'

const Detail = ({ detail }) => {
    if (detail === null) {
        return null
    }  
    return (
        <div>
            <h2>{detail.name}</h2>
            <p>capital {detail.capital}</p>
            <p>population {detail.population}</p>
            <h3>languages</h3>
            <ul>
                {detail.languages.map(lang =>
                    <li key={lang.name}>{lang.name}</li>
                )}
            </ul>
            <img src={detail.flag} />
        </div>
    )
}

export default Detail