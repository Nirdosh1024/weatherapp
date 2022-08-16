import React from "react";
import { Wrapper, Content, City, WeatherDescription, Icon, Row, Label, Value, Bottom, Temperature, Details } from './currentWeather.styles';
import Sunny from '../../Icons/01d.png'


const CurrentWeather = () => {
    return (
        <Wrapper>
        <Content>
            <div>
                <City>Belgrade</City>
                <WeatherDescription>Sunnny</WeatherDescription>
            </div>
            <Icon src={Sunny} alt="Weather Icon" />
        </Content>
        <Bottom>
            <Temperature>18°C</Temperature>
            <Details>
                <Row>
                <Label>Details</Label>
                </Row>

                <Row>
                <Label>Feels like</Label>
                <Value>22°C</Value>
                </Row>

                <Row>
                <Label>Wind</Label>
                <Value>2 m/s</Value>
                </Row>

                <Row>
                <Label>Humidity</Label>
                <Value>15% </Value>
                </Row>

                <Row>
                <Label>Pressure</Label>
                <Value>15 hPa</Value>
                </Row>
            </Details>
        </Bottom>
        </Wrapper>
    )
} 

export default CurrentWeather;