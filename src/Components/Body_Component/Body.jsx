import React from 'react'
import styles from './Body.module.css'
import Card from './Cards/Card'
import Footer from '../Footer_Component/Footer'
export default function Body() {
    let obj =[
        {
            emogy : '🌍',
            h2 : 'The Web, Node …',
            desc : "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJSand more. Bundle not only for the web but for many other platforms aswell.",
            formats : 'See all formats'
        },
        {
            emogy : '🌳',
            h2 : 'The Web, Node …',
            desc : "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJSand more. Bundle not only for the web but for many other platforms aswell.",
            formats : 'See all formats'
        },
        {
            emogy : '🗡️',
            h2 : 'The Web, Node …',
            desc : "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJSand more. Bundle not only for the web but for many other platforms aswell.",
            formats : 'See all formats'
        },
        {
            emogy : '🔌',
            h2 : 'The Web, Node …',
            desc : "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJSand more. Bundle not only for the web but for many other platforms aswell.",
            formats : 'See all formats'
        },
        {
            emogy : '🛠️',
            h2 : 'The Web, Node …',
            desc : "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJSand more. Bundle not only for the web but for many other platforms aswell.",
            formats : 'See all formats'
        },
        {
            emogy : '🌍',
            h2 : 'The Web, Node …',
            desc : "Rollup supports many output formats: ES modules, CommonJS, UMD, SystemJSand more. Bundle not only for the web but for many other platforms aswell.",
            formats : 'See all formats'
        }
    ]
  return (
    <>
        <main className={styles.main_body}>
            <section>
                <article>
                    <h1 ><span >rollup.js</span><span >The JavaScript module bundler</span></h1>
                    <p>Compile small pieces of code into something larger and more complex</p>
                    <aside><div ><a >Get Started</a></div><div ><a >View on GitHub</a></div></aside>
                </article>
                <article> 
                    <div>
                        <img src="https://rollupjs.org/rollup-logo.svg" alt="" srcset="" />
                    </div>
                </article>
            </section>
            <section>
                
                {obj.map((x)=>{
                    return<Card object = {x}/>
                })} 

            </section>
        </main>
        <Footer/>
    </>
  )
}
