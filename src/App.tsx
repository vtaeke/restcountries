import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';
import MainPage from './components/MainPage';
import { useAppDispatch } from './redux/hooks';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/country/:cca3' element={<CountryDetails />}></Route>
    </Routes>
  );
}
