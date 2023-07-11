import { Action } from 'redux';
import {
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  SET_ACTIVE_COUNTRY,
  FETCH_COUNTRY_REQUEST,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_FAILURE,
} from '../actions/actions';

const initialState = {
  countries: [],
  country: null,
  loading: false,
  error: null,
  activeCountry: {
    country: null,
    loading: false,
    error: null,
  },
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        loading: false,
        countries: action.payload,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_ACTIVE_COUNTRY:
      return {
        ...state,
        activeCountry: action.payload,
      };
    case FETCH_COUNTRY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        activeCountry: {
          ...state.activeCountry,
          loading: true,
          error: null,
        },
      };
    case FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country: action.payload.country,
        activeCountry: {
          ...state.activeCountry,
          country: action.payload.country,
        },
      };
    case FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        activeCountry: {
          ...state.activeCountry,
          loading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
