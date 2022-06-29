import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2fc910;
    height: 100%;
`

export const CardSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    padding: 10px;
`

export const GenderSection = styled.div`
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    margin-top: 40px;
    padding: 10px;
`

export const GenderLabel = styled.label`
    font-size: 18px;
    padding-top: 15px;
`

export const GenderButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin-right: 50px;
    margin-left: 50px;
    border-radius: 10px;
    background-color: ${props => props.isSelected ? '#000' : '#f0d83c'};

    &:hover{
        background-color: ${props => props.isSelected ? '#000' : '#bfac30'};
    }
`

export const StyledInput = styled.input`
    width: ${props => props.width + 'px'};
    font-size: 24px;
    height: 60px;
    border: 2px solid black;
    border-radius: 10px;
    padding: 0px 10px;
    outline: none;
`

export const InputSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
`

export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

export const StyledLabel = styled.label`
    font-size: 24px;
    margin-bottom: 5px;
    font-weight: bold;
`