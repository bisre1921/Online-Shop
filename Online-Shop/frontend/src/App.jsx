import React from 'react'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          {/* <Home /> */}
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
    
  )
}

export default App