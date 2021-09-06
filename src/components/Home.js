import React from 'react'
import Banner from './Banner'
import {Link} from 'react-router-dom'
import './Banner.css'

function Home() {
    return (
        <>
        <div className="mainList" >
            <img style={{width:"100%", height:"100vh"}}
            src='https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1391&q=80'
            alt=""/>
             <Banner title= "Luxury Rooms" 
        para="Delux Rooms starting at 199 €" >
            <Link to='/rooms' className="btn"/>
        </Banner>
             
        </div>
       
        </>
    )
}

export default Home
