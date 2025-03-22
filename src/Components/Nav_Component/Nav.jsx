import React, { useState } from 'react'
import styles from './Nav.module.css'
export default function Nav() {
    let [state,changeState] = useState('light')
    function Checked(){
        let icons = document.querySelector('#checked_icons');
        let light = document.querySelector('#light');
        let dark = document.querySelector("#dark");
        icons.classList.toggle('move');
        let body = document.querySelector('body');
        body.classList.toggle("d-theme")
        if(icons.classList.contains('move')){
            icons.style.transform = "translateX(20px)";
            dark.style.display = "block"
            light.style.display = "none"
            changeState('dark')
        }
        else if(!icons.classList.contains('move')){
            icons.style.transform = "translateX(0px)";
            dark.style.display = "none"
            light.style.display = "block"
            changeState('light')
        }
        if(body.classList.contains("d-theme")){
            console.log('hi');
            let head = document.querySelector("header");
            head.style.backgroundColor = "var(--light-background)";
            head.style.borderBottom = "1px solid #000";
          }else if(!body.classList.contains("d-theme")){
            console.log("hi");
            let head = document.querySelector("header");
            head.style.backgroundColor = "var(--light-background";
            head.style.borderBottom = "1px solid #fff"
          }
        
        
    }
    function list_open(){
        let list = document.querySelector('.list');
        let list1 = document.querySelector('#list1');
        let cross = document.querySelector('#cross');
        
        let nav = document.querySelector("#right_nav");
        list1.classList.toggle('display_icon')
        nav.classList.toggle('display')    
        if(nav.classList.contains('display')){
            nav.style.visibility = "visible";
                list1.style.display = 'none';
            cross.style.display = "block";
        }else{
            nav.style.visibility = "hidden";
            list1.style.display = 'block';
            cross.style.display = "none";
        }
        

    }
  return (
    <>
        <header className={styles.main_nav}>
            <div  className={styles.list} onClick={list_open}><span id='list1'><i class="fa-solid fa-list"></i></span><span id='cross'><i class="fa-solid fa-xmark"></i></span></div>
            <nav>
                <ol>
                    <li><span><img src="https://rollupjs.org/rollup-logo.svg" alt="" /></span>Rollup</li>
                    <li><span><i class="fa-solid fa-magnifying-glass"></i></span><input type="text" placeholder='Search'/></li>
                </ol>
                <ol id="right_nav">
                    <li className='hover_li'>guide</li>
                    <li className='hover_li'>repl</li>
                    <li className='hover_li'>chat</li>
                    <li className='hover_li'>opencollective</li>
                    <li><span><i class="fa-solid fa-language"></i></span></li>
                    <li onClick={Checked}><div><span id='checked_icons'><i class="fa-solid fa-lightbulb" id='light'></i><i class="fa-solid fa-moon" id='dark'></i></span></div></li>
                    <li><span><i class="fa-brands fa-github"></i></span><span><i class="fa-brands fa-gitlab"></i></span></li>
                </ol>
            </nav>
        </header>
    </>
  )
}
