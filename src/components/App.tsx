import * as React from 'react';
import '../styles/app.scss';
import About from './About';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';

const App: React.FC<{}> = () => (
    <>
        <Nav />
        <Header />
        <About />
        <Footer />
    </>
)

export default App;