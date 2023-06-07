import React, { useState } from 'react';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import './navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <div className='square'></div>
            </div>
            <div className='navbar__wrapper'>
                <div className='navbar__menu'>
                    <ul>
                        <li>How It Works</li>
                        <li>Payment</li>
                        <li>Help</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='navbar__sign'>
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div>
            </div>
            <div className='navbar__mobile'>
                <div className='navbar__iconMb'>
                    {toggle ? (
                        <MdClose
                            className='menuIcon'
                            onClick={() => setToggle(!toggle)}
                        />
                    ) : (
                        <HiOutlineMenuAlt3
                            className='menuIcon'
                            onClick={() => setToggle(!toggle)}
                        />
                    )}
                </div>

                {toggle && (
                    <div className='navbar__wrapperMb'>
                        <div className='navbar__menuMb'>
                            <ul>
                                <li>How It Works</li>
                                <li>Payment</li>
                                <li>Help</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className='navbar__signMb'>
                            <button>Sign Up</button>
                            <button>Log In</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
