import styled from 'styled-components';
import Header from '../Header';
import Window from '../Window/Window';

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1rem 0;
`

function App() {

  return (
    <Content>
      {/* <Header title="Sex"/> */}
      <Window initialWidth={500} initialHeight={500}/>
    </Content>
  )
}

export default App
