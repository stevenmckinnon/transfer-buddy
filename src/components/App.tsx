import * as React from 'react';
import '../styles/app.scss';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Survey from './Survey';

const App: React.FC<{}> = () => (
    <>
        <Nav />
        <Header />
        <About />
        <Survey />
        <Footer />
    </>
)

export default App;