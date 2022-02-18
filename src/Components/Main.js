import React, { useEffect, useState } from 'react'
import './Main.css';
import image from "../Images/back.png";
import { WiDayCloudy } from "react-icons/wi";
import { WiDayFog } from "react-icons/wi";
import { BsGeoAltFill } from "react-icons/bs";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaRegFrownOpen } from "react-icons/fa";


function Main() {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("wardha");

    useEffect(() => {
        const fatchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d38fba9921c635b5f4de0d9e6dd51afb`;
            const res = await fetch(url);
            const resjson = await res.json();

            // console.log(resjson);
            setCity(resjson.main);
        }
        fatchApi();
    }, [search]);//When The "search" Function Will Calll Or a update after That THe Function will call.

    const onChange = (event) => {
        setSearch(event.target.value);
    }
    // console.log(city.weather[0].description);
    return (
        <>
            <div className="container">
                <img src={image} alt="" />
                <div className="box">

                    <div className="inputData">
                        <input
                            type="text"
                            value={search}
                            placeholder='Search City..'
                            onChange={onChange}
                        />
                    </div>

                    {

                        !city ? (
                            <p className='notfound_city'>Sorry Couldn't Found Your City
                                <span className="error_emoji">
                                    <FaRegFrownOpen />
                                </span>
                            </p>
                        ) : (

                            <div className="data">
                                <h2 className='location'>
                                    <span className='loc_logo'>
                                        <BsGeoAltFill />
                                    </span>
                                    {search}
                                </h2>
                                <h1 className='temp'>
                                    {city.temp}
                                    <span className="temp_logo">
                                        <FaTemperatureHigh />
                                    </span>
                                </h1>
                                <h3 className='dest'>
                                    <WiDayCloudy />  min {city.temp_min} | <WiDayFog /> max {city.temp_max}
                                </h3>

                            </div>
                        )

                    }

                </div>
            </div>

        </>
    );
}

export default Main