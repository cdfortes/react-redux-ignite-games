import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import GlobalStyles from './styles/globalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game/:id" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
