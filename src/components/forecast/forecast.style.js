import styled from "styled-components";


export const Title = styled.label`
    font-size: 23px;
    font-weight: 700;
`

export const Daily = styled.div`
    background-color: #f5f5f5;
    border-radius: 15px;
    height: 40px;
    margin: 5px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 14px;
    padding: 5px 20px;
`

export const Icon = styled.img`
    width: 40px;
`


export const Day = styled.label`
    color: #212121;
    flex: 1 1;
    font-weight: 600;
    margin-left: 15px;
`


export const Description = styled.label`
    flex: 1 1;
    margin-right: 15px;
    text-align: right;
`

export const MinMax = styled.label`
    color: #757575;
`

export const Details = styled.div`
    display: grid;
    grid-row-gap: 0;
    grid-column-gap: 15px;
    column-gap: 15px;
    flex: 1 1;
    grid-template-columns: auto auto;
    padding: 5px 15px;
    row-gap: 0;
`

export const DetailsItem = styled.div`
    align-items: center;
    display: flex;
    height: 30px;
    justify-content: space-between;
    label:first-child {
        color: #757575;
    }
    label:last-child {
        color: #212121;
    }
`