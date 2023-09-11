import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import FakeFoto from './assets/g-3.svg'
import Product from './components/Product'
// import GreetingCard from './components/GreetingCard'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <div className='container'>
        <div className='header'>
        <div className='left'><h1>Aledrogo</h1></div>
          <div className='right'>
            <div className='profile'>
            <h4>Your profile:</h4>
            <img src={FakeFoto} className='foto' alt='profile picture'/>
            <UserProfile />
            {/* Na potrzeby projektu wstawione fake'owe zdjecie, do zmiany przy wykorzystaniu normalnego https */}
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='left'>
          <div className='product'>
            <Product />
          </div>
          </div>
          <div className='right'>
          <div className='todo'> Do zrobienia:
            <Todo task="Kupic opony" />
            <Todo task="Kupic choinke" />
            <Todo task="Wystawic felgi na sprzedaz"/>
          </div>
            <div className='lineSeparating'>
              <hr></hr>
          </div>  
          </div>  
        </div>
      </div>
    </>
  )
}

export default App
