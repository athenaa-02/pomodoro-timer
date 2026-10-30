import Header from '../src/components/header/Header'
import Master from '../src/components/Master/Master'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Product from './pages/Product'

function App() {


  return (
    <>
    <Header></Header>
    <Routes>
   <Route path='/' element={ <Master></Master>}></Route>
   <Route path='/product' element={ <Product></Product>}></Route>
    
    </Routes>
    </>
  )
}

export default App
