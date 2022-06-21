import styled from "styled-components";

export const OuterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: ${props => props.totalHeight + 'px'};
    width: ${props => props.totalWidth + 'px'};
    border: 5px solid black;
    margin-top: ${props => (props.marginAll ? props.marginAll : props.marginTop) + 'px'};
    margin-bottom: ${props => (props.marginAll ? props.marginAll : props.marginBottom) + 'px'};
    margin-right: ${props => (props.marginAll ? props.marginAll : props.marginRight) + 'px'};
    margin-left: ${props => (props.marginAll ? props.marginAll : props.marginLeft) + 'px'};
    background-color: #f0d83c;
    padding: 10px 10px;
`

export const ImgWrapper = styled.div`
    display: flex;
    background-color: #fff;
    height: 100%;
    width: 100%;
`

export const ImgDiv = styled.div`
    display: flex;
    justify-content: center;
    height: ${props => props.imgHeight + 'px'};
    width: ${props => props.imgWidth + 'px'};
    border: 3px solid black;
`

export const TextDiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
`