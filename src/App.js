import {
  OuterWrapper,
  RCardWrapper
} from './AppStyled'
import Card from "./components/Card/Card";

function App() {
  
  const generateRaceCards = () => {
    let cardArray = [];
    for (let i = 0 ; i <= 3 ; i++) {
      cardArray.push(
        <Card 
          totalHeight={350} 
          totalWidth={200} 
          marginRight={30} 
          marginLeft={30} 
          rId={i}
          imgHeight={450}
          imgWidth={190}
        />
      )
    }
    return cardArray;
  }
  
  return (
    <OuterWrapper>
      <RCardWrapper>
        {generateRaceCards()}
      </RCardWrapper>
    </OuterWrapper>
  );
}

export default App;
