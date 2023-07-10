import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCountries, setActiveCountry } from '../actions/actions';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

const MainPage = () => {
  const dispatch = useAppDispatch();
  const countries = useAppSelector((state) => state.countries);
  const activeCountry = useAppSelector((state) => state.activeCountry);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleClick = (country) => {
    dispatch(setActiveCountry(country));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-4'>
          {countries.map((country) => (
            <button
              key={country.cca3}
              style={{ cursor: 'pointer' }}
              className={`card mb-3 ${
                country.cca3 === activeCountry?.cca3 ? 'active' : ''
              }`}
              onClick={() => handleClick(country)}
            >
              <Link to={`/country/${country.cca3}`} className='card-link'>
                <div className='card-body'>
                  <h5 className='card-title'>{country.name.common}</h5>
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className='card-img-top'
                  />
                </div>
              </Link>
            </button>
          ))}
        </div>
        <div className='col-md-8'>
          {activeCountry && (
            <div>
              <h2>{activeCountry.name && activeCountry.name.common}</h2>
              <img
                src={activeCountry.flags && activeCountry.flags.png}
                alt={activeCountry.name && activeCountry.name.common}
              />
              <p>
                Capital: {activeCountry.capital && activeCountry.capital[0]}
              </p>
              <p>Region: {activeCountry.region}</p>
              <p>Area: {activeCountry.area}</p>
              <p>Population: {activeCountry.population}</p>
              {/* <p>
      Currencies: {Object.values(activeCountry.currencies).join(', ')}
    </p>
    <p>Borders: {activeCountry.borders.join(', ')}</p> */}
              <p>
                Currencies:{' '}
                {activeCountry.currencies
                  ? Object.values(activeCountry.currencies).join(', ')
                  : ''}
              </p>
              <p>
                Borders:{' '}
                {activeCountry.borders ? activeCountry.borders.join(', ') : ''}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
