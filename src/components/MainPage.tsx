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
      <h2>Информация о странах мира</h2>
      <div className='row'>
        {countries.map((country) => (
          <div key={country.cca3} className='col-md-2'>
            <button
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
