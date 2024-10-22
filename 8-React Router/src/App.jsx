import './App.scss'

//PAGES
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Produto from './pages/Produto/Produto'
import Info from './pages/Info/Info'
import Page404 from './pages/404/Page404'

//Components
import Navbar from './components/Navbar/Navbar'
import BuscaForm from './components/BuscaForm/BuscaForm'

// npm i react-router-dom
//#region Config React Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Busca from './pages/Busca/Busca'

// https://www.udemy.com/course/react-do-zero-a-maestria-c-hooks-router-api-projetos/learn/lecture/31491996#overview

function App() {
  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Links com React Router */}
        <Navbar/>

        {/* Busca */}
        <BuscaForm />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre' element={<Sobre />} />
          {/* Rota dinamica */}
          <Route path='/produto/:id' element={<Produto />} />
          {/* Nested route */}
          <Route path='/produto/:id/info' element={<Info />} />
          <Route path='/search' element={<Busca />}/>
          {/* Redirect */}
          <Route path='/company' element={<Navigate to='/sobre' />}/>

          {/* No match route */}
          <Route path='*' element={<Page404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
