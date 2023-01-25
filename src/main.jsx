import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/index'
import Showcase from './components/Showcase/index'
import Partners from './components/Partners/index'
import Features from './components/Features/index'
import Steps from './components/Steps/index'
import Explore from './components/Explore/index'
import Testimonials from './components/Testimonials/index'
import Find from './components/Find/index'
import Footer from './components/Footer/index'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Header />
        <Showcase />
        <Partners />
        <Features />
        <Steps />
        <Explore />
        <Testimonials />
        <Find />
        <Footer />
    </>
)
