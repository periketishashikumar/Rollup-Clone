import React from 'react'
import Nav from './Components/Nav_Component/Nav'
import Body from './Components/Body_Component/Body.jsx'
import Footer from './Components/Footer_Component/Footer.jsx'

export default function App() {
  setTimeout(()=>{
    window.addEventListener('scroll',()=>{
      let head = document.querySelector('header');
      if (window.scrollY >= 5){
        let body = document.querySelector("body")
        
        if(body.classList.contains("d-theme")){
          head.style.borderBottom = "1px solid #000";
          head.style.backgroundColor = "#1b1b1f";
        }else if(!body.classList.contains("d-theme")){
          head.style.borderBottom = "1px solid #efefef";
          head.style.backgroundColor = "#fff";
        }
      }else if(window.scrollY <= 2){
        head.style.border = "none";
        head.style.backgroundColor = "transparent";
      }
      
    })
  })
  return (
    <>
    <Nav/>
    <Body/>
    
    </>
  )
}
