import React, {useEffect} from 'react'
import './Home.css'
import video from '../../assets/video(3).mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbApps } from "react-icons/tb";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
//lets create a react hook to scroll animation

useEffect(() =>{
    Aos.init({duration : 2000})
})

  return (
    <>
    <section className="home">
        <div className="overlay"></div>
        <video src={video} muted autoPlay loop type='video/mp4' ></video>
        <div className="homeContent container">
            <div className="txtDiv">
                <span data-aos='fade-up' className="smallText">
                    Our Packages
                </span>
                <h1 data-aos='fade-up' className="homeTitle fs-1 fw-bold">
                Search Yours Holiday
                </h1>
            </div>

            <div data-aos='fade-up' className="cardDiv grid">
                <div className="destinationInput">
                    <label htmlFor="city">Search your destination:</label>
                    <div className="input flex">
                        <input type="text"  placeholder='Enter Name here......' />
                        <GrLocation className='icon'/>
                    </div>
                </div>

                <div className="dateInput">
                    <label htmlFor="date">Select your Date: </label>
                    <div className="input flex">
                        <input type="date" />
                    </div>
                </div>

                <div className="priceInput">
                    <div className="label_total flex">
                        <label htmlFor="price">Max price:</label>
                        <h3 className="total ms-auto fs-5 text-dark">
                            $5000
                        </h3>
                    </div>

                    <div className="input flex">
                    <input type="range" max="5000" min="1000" />
                    </div>
                </div>

                <div className="searchOptions flex">
                <HiFilter className='icon' />
                <span>MORE FILTERS</span>
                </div>

            </div>

            <div data-aos='fade-up' className="homeFooterIcons flex">
                <div className="rightIcons">
                <FiFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTripadvisor className='icon' />
                </div>
                <div className="leftIcons">
                <FaList className='icon' />
                <TbApps className='icon' />
                </div>

            </div>
        </div>
    </section>
    </>
  )
}

export default Home