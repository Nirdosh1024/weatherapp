import React from "react";
import { Wrapper, Content, City, WeatherDescription, Icon, Row, Label, Value, Bottom, Temperature, Details } from './currentWeather.styles';
import Sunny from '../../'


const CurrentWeather = ({ data }) => {
    return (
        <Wrapper>
        <Content>
            <div>
                <City>City: {data.city}</City>
                <WeatherDescription>Weather: {data.weather[0].description}</WeatherDescription>
            </div>
            <Icon src={require(`../../Icons/${data.weather[0].icon}.png`).default} alt="Weather Icon" />
        </Content>
        <Bottom>
            <Temperature>{data.main.temp}°C</Temperature>
            <Details>
                <Row>
                <Label>Details</Label>
                </Row>

                <Row>
                <Label>Room Temp</Label>
                <Value>{data.main.feels_like}°C</Value>
                </Row>

                <Row>
                <Label>Wind</Label>
                <Value>{data.wind.speed} m/s</Value>
                </Row>

                <Row>
                <Label>Humidity</Label>
                <Value>{data.main.humidity}% </Value>
                </Row>

                <Row>
                <Label>Pressure</Label>
                <Value>{data.main.pressure} hPa</Value>
                </Row>
            </Details>
        </Bottom>
        </Wrapper>
    )
} 

export default CurrentWeather;