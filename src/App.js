import React, {useState, useEffect} from 'react';
import {
  OuterWrapper,
  CardSection,
  GenderSection, 
  GenderButton,
  StyledInput,
  InputSection,
  GenderLabel
} from './AppStyled'
import Card from "./components/Card/Card";
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
          genderIcon = <FaVenus size={50}/>
          break;
        case 1:
          genderIcon = <FaMars size={50}/>
          break;
        case 2:
          genderIcon = <FaGenderless size={50}/>
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
          <GenderLabel>
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
        />
      )
    }
    return cardArray;
  }

  const handleGender = (num) => {
    setIsSelectedGender(num)
  }
  
  return (
    <OuterWrapper>
      <InputSection>
        <StyledInput
          width={400}
        />
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
    </OuterWrapper>
  );
}

export default App;
