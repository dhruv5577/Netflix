import React from 'react'
import './home.scss'
import Navbar from '../components/navbar/Navbar'
import Top from '../components/Top/Top'
import Item from '../components/Items/Item'

const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <Top />
            <Item />
            <Item />
            <Item />

        </div>
    )
}

export default Home
