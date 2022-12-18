import React from "react";
import { Accordion, AccordionItemHeading, AccordionItemPanel, AccordionItem, AccordionItemButton } from "react-accessible-accordion";


//styles
import { Title, Daily, Icon, Day, Description, MinMax,Details, DetailsItem } from "./forecast.style";


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    return (<>
        <Title>Forecast of next seven days</Title>
        <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => 
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <Daily>
                            <Icon alt="Weather" src={require(`../../Icons/${item.weather[0].icon}.png`).default} />
                            <Day>{forecastDays[index]}</Day>
                            <Description>{item.weather[0].description}</Description>
                            <MinMax>{Math.round(item.main.temp_min)}°C /{" "} {Math.round(item.main.temp_max)}°C</MinMax>
                        </Daily>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <Details>
                        <DetailsItem>
                            <label>Pressure</label>
                            <label>{item.main.pressure} hpa</label>
                        </DetailsItem>
                        <DetailsItem>
                            <label>Humidity</label>
                            <label>{item.main.humidity}%</label>
                        </DetailsItem>
                        <DetailsItem>
                            <label>Clouds</label>
                            <label>{item.clouds.all}%</label>
                        </DetailsItem>
                        <DetailsItem>
                            <label>Wind Speed</label>
                            <label>{item.wind.speed} m/s</label>
                        </DetailsItem>
                        <DetailsItem>
                            <label>Sea Level</label>
                            <label>{item.main.sea_level} m</label>
                        </DetailsItem>
                        <DetailsItem>
                            <label>Feels like</label>
                            <label>{Math.round(item.main.feels_like)}°C</label>
                        </DetailsItem>
                    </Details>
                </AccordionItemPanel>
            </AccordionItem>
        
        )}

        </Accordion>
        
    </>)
}

export default Forecast;