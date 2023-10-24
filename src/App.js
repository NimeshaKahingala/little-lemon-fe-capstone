import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './pages/booking/Booking';
import HomePage from './pages/homepage/Homepage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
