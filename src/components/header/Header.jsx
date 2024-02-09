//Rafce
import './Header.css'
import React from 'react'

const Header = () => {
    return (
        <div>
            <section className="h-wrapper">

                <div className="flexCenter padding innerWidth h-container">

                    <img src="./mpcl-logo.png" alt="logo" width={200} />
                    <div className="flexCenter h-menu">
                        <a href="">Home</a>
                        <a href="">Investors</a>
                        <a href="">Career</a>
                        <a href="">More</a>
                        <button className="button">
                            <a href="">About us</a>
                        </button>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
