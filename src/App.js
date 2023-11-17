import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  function clickMe(){
    console.log("action done");
  }

  return (
    
       <div className="container">
      <div className="Header"><Header></Header></div>
      <div className="Body"><Body fun={clickMe}></Body></div>
      <div className="Footer"><Footer></Footer></div>
    
    </div>

     
      
  )
}

export default App