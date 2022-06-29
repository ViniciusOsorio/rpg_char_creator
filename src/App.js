import React, {useState, useEffect} from 'react';
import {
  OuterWrapper,
  CardSection,
  GenderSection, 
  GenderButton,
  StyledInput,
  InputSection,
  GenderLabel,
  ContentWrapper,
  InputDiv,
  StyledLabel
} from './AppStyled'
import Card from "./components/Card/Card";
import NavBar from './components/NavBar/NavBar';
import { FaVenus, FaMars, FaGenderless } from 'react-icons/fa';

function App() {

  const [isSelectedGender, setIsSelectedGender] = useState();
  const [isSelectedClass, setSelectedClass] = useState()
  const [isSelectedR, setSelectedR] = useState()
  const genders = ['Male', 'Female', 'Agender']
  
  const generateGenderButtons = () => {
    const genderArray = [];
    let genderIcon = <></>;
    for (let i=0 ; i < genders.length ; i++) {
      switch (i){
        case 0:
          genderIcon = <FaVenus size={50} color={isSelectedGender === i ? '#f0d83c' : '#000'}/>
          break;
        case 1:
          genderIcon = <FaMars size={50} color={isSelectedGender === i ? '#f0d83c' : '#000'}/>
          break;
        case 2:
          genderIcon = <FaGenderless size={50} color={isSelectedGender === i ? '#f0d83c' : '#000'}/>
          break;
        default:
          genderIcon = <></>;
      }
      genderArray.push(        
        <GenderButton 
          value={i} 
          isSelected={isSelectedGender === i} 
          onClick={() => handleGender(i)}>
          {genderIcon}
          <GenderLabel style={{color: isSelectedGender===i ? '#f0d83c' : '#000'}}>
            {genders[i]}
          </GenderLabel>
        </GenderButton>
      )
    }
    return genderArray;
  }
  
  const generateRCards = () => {
    let cardArray = [];
    for (let i = 0 ; i <= 3 ; i++) {
      cardArray.push(
        <Card 
          totalHeight={350} 
          totalWidth={200} 
          marginRight={30} 
          marginLeft={30} 
          rId={i}
          imgHeight={480}
          // imgWidth={190}
          value={i} 
          isSelected={isSelectedR === i} 
          onClick={() => handleRSelect(i)}
        />
      )
    }
    return cardArray;
  }

  const genereteClassCards = () => {
    let cardArray = [];
    for (let i = 0 ; i <= 3 ; i++) {
      cardArray.push(
        <Card 
          totalHeight={350} 
          totalWidth={200} 
          marginRight={30} 
          marginLeft={30} 
          cId={i}
          imgHeight={480}
          // imgWidth={190}
          value={i} 
          isSelected={isSelectedClass === i} 
          onClick={() => handleClassSelect(i)}
        />
      )
    }
    return cardArray;
  }

  const handleGender = (num) => {
    setIsSelectedGender(num)
    console.log(num)
  }

  const handleRSelect = (num) => {
    setSelectedR(num)
    console.log(num)
  }

  const handleClassSelect = (num) => {
    setSelectedClass(num)
    console.log(num)
  }
  
  return (
    <OuterWrapper>
      <NavBar />
      <ContentWrapper>
        <InputSection>
          <InputDiv>
            <StyledLabel>Name</StyledLabel>
            <StyledInput
              width={400}
            />
          </InputDiv>
          <InputDiv>
            <StyledLabel>Age</StyledLabel>
            <StyledInput
              width={100}
            />
          </InputDiv>
        </InputSection>      
        <GenderSection>        
          {generateGenderButtons()}
        </GenderSection>
        <CardSection>
          {generateRCards()}
        </CardSection>
        <CardSection>
          {genereteClassCards()}
        </CardSection>
      </ContentWrapper>
    </OuterWrapper>
  );
}

export default App;
