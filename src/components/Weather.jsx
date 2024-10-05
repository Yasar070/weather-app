import { useState } from "react"
import axios from "axios"
import Sun from "./images/weather-app.png"

function Weather() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [des, setDes] = useState("")
    const [temp, setTemp] = useState("")

    function handleCity(event) {
        setCity(event.target.value)
    }

    function getWeather() {
        let Weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5fe85b720bcefaacc2461966a497bc6`);

        Weatherdata.then(function (success) {
            console.log(success.data);
            setWeather(success.data.weather[0].main)
            setDes(success.data.weather[0].description)
            setTemp(success.data.main.temp)

        })
    }

    return (
        <div className=" m-2 p-2 bg-gray-500 h-full rounded-md">

            <div className="bg-[#4BDFF8] m-10 p-9 border rounded-md   border-black border-1  text-center ">
                <img src={Sun} className="h-24 p-6 m-2 "></img>

                <div className="bg-[#F5C04F] p-4 m-16 rounded-md h-72  border-black border-1">
                    <h1 className="text-3xl font-medium m-2  text-[##011423]">Weather Report</h1>
                    <p className="m-2">I can give you a weather report about your city !</p>
                    <input onChange={handleCity} placeholder="Enter your city name" className="rounded-md p-1 m-2 outline-none border-black border-2"></input><br />
                    <button onClick={getWeather} className="rounded-md p-2 text-white bg-[#2D2D2D] border border-[#038DFB] border-2 m-2">Get Report</button><br />

                    <b className="p-2 m-2  ">Weather :{weather}</b><br />
                    <b className="p-2 m-2">Temperature :{temp}</b><br />
                    <b className="p-2 m-2">Description :{des} </b>
                </div>
            </div>

        </div>

    )
}

export default Weather