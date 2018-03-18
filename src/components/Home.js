import React from 'react';

// import layout components
import Header from './layout/Header';
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div className="content">
        <div className="teaser">
          <p>
            Hello, and welcome to my personal website! I am Markus Willems and I
            am a front-end developer based in Bremen, Germany.
          </p>
          <p>
            I have 5+ years experience in web development and currently work as
            a front-end developer for the world's leading sports data company.
          </p>
          <p>
            My main focus lies on creating applications using JavaScript and
            tools & frameworks from the JavaScript ecosystem such as NodeJS,
            React, Redux, Webpack, Typescript, and many more.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
