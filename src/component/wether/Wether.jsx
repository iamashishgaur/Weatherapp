import React, { useEffect, useState } from 'react'
import '../../App.css'
import WetherCard from './WetherCard'

const Wether = () => {

    const [searchValue, setSearchValue] = useState("mumbai");
    const [tempInfo, setTempInfo] = useState({})

    const getWetherInfo = async () => {
        try {
            let url = `
        https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=e14a80537c52ebd6af1cd9b12359dc73`;

            const res = await fetch(url);
            const data = await res.json();
            const { temp, humidity, pressure } = data.main
            const { name } = data;
            const { speed } = data.wind;
            const { visibility } = data;
            const { timezone } = data;
            const { country, sunset, sunrise } = data.sys;
            const myNewWetherInfo = {
                temp,
                humidity,
                pressure,
                name,
                speed,
                country,
                sunset,
                sunrise,
                visibility,
                timezone,
            };
            setTempInfo(myNewWetherInfo);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getWetherInfo();
    }, [])



    return (
        <>
            <div className='wether-container'>
                <div className='wether-wraper'>
                    <div className='wether-search'>
                        <input
                            type="text"
                            id='search'
                            className="form-control"
                            placeholder="Search For Place . . . ."
                            autoFocus
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                        <button className='btn' type='button' onClick={getWetherInfo}>Search</button>
                    </div>
                    <WetherCard tempInfo={tempInfo} />
                </div>
            </div>
        </>
    )
}

export default Wether;