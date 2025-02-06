
import styled from 'styled-components';
import TableComponent from './components/TableComponent'

function App() {
  

  return (
    <AppContainer>
      <TableComponent/>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  padding: 16px;
  overflow: hidden;
`;