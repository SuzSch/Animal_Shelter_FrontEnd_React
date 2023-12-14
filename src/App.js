import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import PetList from './Pages/PetList/PetList';
import AddPet from './Pages/AddPet/AddPet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pet-list' element={<PetList />} />
        <Route path='/add-pet' element={<AddPet />} />
      </Routes>
    </Router>
  );
}

export default App;
