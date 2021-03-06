import React from 'react';

const Country = (props) => {
    // console.log(props.country.name)
    const {name, population, region, flag} = props.country;
    const flagStyle = {height: '80px'}
    const haldleCountryAdd = props.haldleCountryAdd;
    const countryStyle = {
        border: '2px solid red',
        margin: '10px',
        padding: '10px'
    }
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick={() =>haldleCountryAdd(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;