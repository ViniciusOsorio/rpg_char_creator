import styled from "styled-components";

export const ImgWrapper = styled.div`
    display: flex;
    background-color: #fff;
    height: 100%;
    width: 100%;
`

export const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    height: ${props => props.imgHeight ? props.imgHeight + 'px' : '100%'};
    width: ${props => props.imgWidth ? props.imgWidth + 'px' : '100%'};
    border: 3px solid black;
    border-radius: 8px;
    
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

export const StyledDescription = styled.label`
    font-size: 12px;
    font-weight: bold;
    background-color: ${props => props.isSelected ? '#f0d83c' : '#bfac30'};
    border: 1px black solid;
    border-radius: 5px;
    padding: 2px;
    height: 100%;
    &:hover{

    }
`

export const StyledTitle = styled.label`
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: 10px;
    font-weight: bold;
`

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${props => props.totalHeight + 'px'};
    width: ${props => props.totalWidth + 'px'};
    border: 5px solid black;
    border-radius: 15px;
    margin-top: ${props => (props.marginAll ? props.marginAll : props.marginTop) + 'px'};
    margin-bottom: ${props => (props.marginAll ? props.marginAll : props.marginBottom) + 'px'};
    margin-right: ${props => (props.marginAll ? props.marginAll : props.marginRight) + 'px'};
    margin-left: ${props => (props.marginAll ? props.marginAll : props.marginLeft) + 'px'};
    background-color: ${props => props.isSelected ? '#bfac30' : '#f0d83c'};
    padding: 10px 10px;
    &:hover{
        background-color: #bfac30;
    }

    &:hover ${StyledDescription} {
        background-color: #f0d83c;
    }
`