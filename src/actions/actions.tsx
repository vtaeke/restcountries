import axios from 'axios';
import { Dispatch } from 'react';

export const FETCH_COUNTRIES_REQUEST = 'FETCH_COUNTRIES_REQUEST';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';
export const SET_ACTIVE_COUNTRY = 'SET_ACTIVE_COUNTRY';
export const FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST';
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS';
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE';

export const fetchCountries = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCountriesRequest());
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,flags,cca3')
      .then((response) => {
        const countries = response.data;
        dispatch(fetchCountriesSuccess(countries));
      })
      .catch((error) => {
        dispatch(fetchCountriesFailure(error.message));
      });
  };
};

export const fetchCountry = (cca3) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchCountryRequest());
    axios
      .get(`https://restcountries.com/v3.1/alpha/${cca3}`)
      .then((response) => {
        dispatch(fetchCountrySuccess(response.data[0], cca3));
      })
      .catch((error) => {
        dispatch(fetchCountryFailure(error.message));
      });
  };
};

export const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES_REQUEST,
  };
};

export const fetchCountriesSuccess = (countries) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
};

export const fetchCountriesFailure = (error) => {
  return {
    type: FETCH_COUNTRIES_FAILURE,
    payload: error,
  };
};

export const fetchCountryRequest = () => {
  return {
    type: FETCH_COUNTRY_REQUEST,
  };
};

export const fetchCountrySuccess = (country, cca3) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: {
      country,
      cca3,
    },
  };
};

export const fetchCountryFailure = (error) => {
  return {
    type: FETCH_COUNTRY_FAILURE,
    payload: error,
  };
};

export const setActiveCountry = (country) => ({
  type: SET_ACTIVE_COUNTRY,
  payload: country,
});
