import styled from "styled-components";

export const Wrapper = styled.div`
    width: 300px;
    box-shadow: 10px -2px 20px 2px rgba(0 0 0 / 30%);
    border-radius: 6px;
    color: #fff;
    background-color: rgba(180, 151, 214, 0.2);
    margin: 20px auto 0 auto;
    padding: 0 20px 20px 20px;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

export const City = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
    margin: 0;
    letter-spacing: 1px;
`

export const WeatherDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    margin: 0;
`

export const Icon = styled.img`
    width: 100px;
`

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Temperature = styled.p`
    font-weight: 600;
    font-size: 50px;
    width: auto;
    letter-spacing: -5px;
    margin: 10px 0;
`

export const Details = styled.div`
    width: 100%;
    padding-left: 20px;
`

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`


export const Label = styled.span`
    text-align: left;
    font-weight: 400;
    font-size: 12px;

`

export const Value = styled.span`
    text-align: right;
    font-weight: 600;
    font-size: 12px;
`

