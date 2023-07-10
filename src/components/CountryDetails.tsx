import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../actions/actions';

export default function CountryDetails() {
  const dispatch = useDispatch();
  const { cca3 } = useParams();
  const { country, loading, error } = useSelector(
    (state) => state.activeCountry
  );
  console.log(country);
  useEffect(() => {
    dispatch(fetchCountry(cca3));
  }, [cca3, dispatch]);

  //   if (loading) {
  //     return <div>Загрузка...</div>;
  //   }

  //   if (error) {
  //     return <div>Ошибка: {error}</div>;
  //   }

  if (!country) {
    return null; // or return an appropriate fallback component or message
  }

  const {
    name,
    flags,
    coatOfArms,
    capital,
    region,
    area,
    population,
    currencies,
    borders,
  } = country;

  return (
    <div className='container'>
      <div className='rightBlock'>
        <h2>{name && name.common}</h2>
        <img src={flags && flags.png} alt={name && name.common} />
        <img src={coatOfArms && coatOfArms.png} alt={name && name.common} />
        <p>Capital: {capital && capital[0]}</p>
        <p>Region: {region}</p>
        <p>Area: {area}</p>
        <p>Population: {population}</p>
        <p>Currencies: {currencies && Object.values(currencies).join(', ')}</p>
        <p>Borders: {borders && borders.join(', ')}</p>
      </div>
    </div>
  );
}
