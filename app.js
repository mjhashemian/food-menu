import React from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';

const App = () => {
    return (<>
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    </>
    )

}


export default App