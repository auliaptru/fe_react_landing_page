import Navbar from './components/Navbar';
import heroImg from './assets/hero.png';

import './app.scss';

function App() {
    return (
        <div className='app'>
            <Navbar />
            <div className='app__hero'>
                <div className='hero__desc'>
                    <h1>Make Your Payment More Secure</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eius id recusandae perferendis rem dignissimos
                        consequatur ducimus dolorem ex modi itaque, odio
                        voluptate iure, vitae quisquam, nostrum similique.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className='hero__img'>
                    <img src={heroImg} alt='' />
                </div>
            </div>
        </div>
    );
}

export default App;
