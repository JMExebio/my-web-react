import React from 'react'
import scrollHandle from '../components/scroll-handle'
import Header from '../components/navbar/header'
import Course from '../components/course/course'
import Hero from '../components/baner/hero'
import Footer from '../components/footer/footer'

function Home() {
    return (
        <div>
            <scrollHandle />
            <Header />
            <Hero />
            <Course />
            <Footer />   
        </div>
    )
}

export default Home
