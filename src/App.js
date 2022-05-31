import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import NavBarHeader from './componentes/Navbar';
import Footer from './componentes/Footer';
import Inicio from './pages/Inicio';
import Formacion_academica from "./pages/Formacion_academica"
import Experiencia from './pages/Experiencia';
import Cursos_y_certificaciones from './pages/Cursos_y_Certificaciones';
import Contacto from './pages/Contacto'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBarHeader />}>
            <Route index element={<Inicio />} />
            <Route path='Formacion_academica' element={<Formacion_academica />} />
            <Route path='Experiencia' element={<Experiencia />} />
            <Route path='Cursos_y_certificaciones' element={<Cursos_y_certificaciones />} />
            <Route path='Contacto' element={<Contacto />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
