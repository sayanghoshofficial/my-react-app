
import styled from 'styled-components';
import TableComponent from './components/TableComponent'
import PopupComp from './components/popupcomp/PopupComp';
import KPIAdminTable from './components/StatusTableComponent';
import { mockData } from './components/StatusTableComponent/mockData';
import LogScaleChart from './components/graphs/LogScaleChart';
import DottedLoader from './components/DotedLoader';

function App() {
  

  return (
    <AppContainer>
      {/* <KPIAdminTable data={mockData.data}/> */}
      {/* <LogScaleChart/> */}
      <DottedLoader/>
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