import { useContext, useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'
import FakeFoto from './assets/g-3.svg'
import Product from './components/Product'
import Todo from './components/Todo'
import { Provider1, ThemeButton } from './components/ThemeProvider'
import AccordionProfile from './components/Accordion'
import CommentList from './components/CommentList'
import Tab from './components/Tab-DynamicTabs'
import DynamicTabs from './components/DynamicTabs'
  
function App() {

  const comments = [
  { username: "Tygrysek", text: "Miód jest super!" },
  { username: "Gargamel", text: "Nie cierpie Smerfów" },
  { username: "Gucio", text: "Lubie bzykać, hihi"},
  ]
  const DataTab = [
    { nameData: "Wynajem", data: "stojak na rower" },
    { nameData: "Kupie", data: "Miejsce parkingowe pod kajak" },
    { nameData: "Oddam", data: "uzywana choinka zapachowa" },
    {nameData:"Szukam", data:"Zaginiony ślimak, uciekł z domu, to była chwila"},
]
  return (
    <>
      <Provider1>
      <div className='container'>
        <div className='header'>
        <div className='left'><h1>Bardzo drogo</h1></div>
          <div className='right'>
            <div className='theme'><ThemeButton /></div>
            <AccordionProfile>
            <div className='profile'>  
            <img src={FakeFoto} className='foto' alt='profile picture'/>
            <UserProfile />
            {/* Na potrzeby projektu wstawione fake'owe zdjecie, do zmiany przy wykorzystaniu normalnego https */}
              </div>
              </AccordionProfile>
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
            <Todo task="Sprzedać felgi"/>
            </div>
            <div className='lineSeparating'>
              <hr></hr>
            </div> 
            <div className='comment'>  
              <CommentList comments={comments} /> 
            </div>    
          </div>  
        </div>
        <div className='footer'>
          <div className='DynamicTabs'>
            <h2><Tab /></h2>
            <DynamicTabs data={DataTab}/>
          </div> 
        </div>
        </div>
      </Provider1>
  </>
  )
}

export default App
