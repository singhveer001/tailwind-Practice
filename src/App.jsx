import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <div className='grid grid-cols-4 m-5 gap-7' >
        <RevenueCard  title={"Amount Pending"} amount={"2,312.23"} orderCount={23} isFirstCard={true} />
        <RevenueCard  title={"Amount Pending"} amount={"92,312.20"} orderCount={13} />
        <RevenueCard   title={"Amount Pending"} amount={"92,312.20"}  />
    </div>
    </>
  )
}

export default App
