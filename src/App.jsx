
import styled from 'styled-components';
import TableComponent from './components/TableComponent'
import PopupComp from './components/popupcomp/PopupComp';
import KPIAdminTable from './components/StatusTableComponent';
import { mockData } from './components/StatusTableComponent/mockData';

function App() {
  

  return (
    <AppContainer>
      <KPIAdminTable data={mockData.data}/>
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