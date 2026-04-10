import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Solucao from './pages/Solucao'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'
import Integrantes from './pages/Integrantes'
import IntegranteDetalhe from './pages/IntegranteDetalhe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {}
        <Route path="/" element={<Home />} />
        
        {}
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/solucao" element={<Solucao />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/integrantes" element={<Integrantes />} />
        
        {}
        <Route path="/integrantes/:id" element={<IntegranteDetalhe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App