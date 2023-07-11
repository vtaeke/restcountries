import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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

  if (!country) {
    return null;
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
      <div className='countries__block'>
        <Link style={{ marginTop: '10px' }} to='/' className='btn btn-primary'>
          Назад
        </Link>
        <h2>{name && name.common}</h2>
        <img src={flags && flags.png} alt={name && name.common} />
        <br />
        <div
          className='coats'
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '10px',
          }}
        >
          <h4>Изображение герба</h4>
          <img
            style={{ width: '350px', height: '350px' }}
            src={coatOfArms && coatOfArms.png}
            alt={name && name.common}
          />
        </div>
        <p>Столица: {capital && capital[0]}</p>
        <p>Регион: {region}</p>
        <p>Территория: {area}</p>
        <p>Население: {population} людей</p>
        <p>
          Валюта:{' '}
          {currencies &&
            Object.keys(currencies).map((currencyKey) => (
              <span key={currencyKey}>
                {currencies[currencyKey].name} {currencies[currencyKey].symbol}
              </span>
            ))}
        </p>

        <p>Список соседних стран: {borders && borders.join(', ')}</p>
      </div>
    </div>
  );
}
