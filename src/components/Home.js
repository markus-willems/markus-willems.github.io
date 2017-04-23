import React from 'react'

// import layout components
import Header from './layout/Header'
import Navigation from './layout/Navigation'
import Footer from './layout/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="content">
        <div className="teaser">
        <p>Hello, and welcome to my personal website! I am Markus Willems and I am a web developer based in Bremen, Germany.</p>
        <p>In the last years I have been working in e-commerce and acquired experience in backend (PHP and MySQL) as well as frontend (HTML, CSS, and JavaScript) development.</p>
        <p>At the moment I am focusing on gaining expertise in creating web applications using React and Redux including accompanied APIs with Node.js/Express.js.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home