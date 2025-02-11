import styled from "styled-components";
import { viewSizeCalculator } from "./utils";

// Styled Components
export const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  overflow-y: auto;
  position: relative;

  /* Scrollbar Styles */
  /* Webkit (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: ${viewSizeCalculator(3, true)};  /* Vertical scrollbar width */
    height: ${viewSizeCalculator(3, true)};  /* Horizontal scrollbar height */
  }

  &::-webkit-scrollbar-thumb {
    background-color:rgba(51, 51, 51, 0.3);
    border-radius: ${viewSizeCalculator(1.5, true)};
  }

  &::-webkit-scrollbar-track {
    background-color:rgba(245, 245, 245, 1);
  }

  /* Firefox */
  scrollbar-width: thin; /* Makes scrollbar thinner */
  scrollbar-color: rgba(51, 51, 51, 0.3) rgba(245, 245, 245, 1);
`;


export const StyledTable = styled.table`
  min-width: 100%;
  table-layout: fixed;
  border-collapse: separate; 
  border-spacing: 0;
`;

export const THead = styled.thead`
  background-color:rgba(251, 252, 253, 1);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 40;
  background-color: white;
`;

export const Th = styled.th`
  border: ${viewSizeCalculator(1, true)} solid rgba(194, 204, 217, 0.8);
  padding: ${viewSizeCalculator(13, true)} ${viewSizeCalculator(15, true)};
  min-width: ${() => viewSizeCalculator(131, true)} !important;
  font-size: ${viewSizeCalculator(11, true)};
  line-height: ${viewSizeCalculator(13, true)};
  font-weight: 700;
  font-family: 'Inter';
  color: #242639;
  white-space: nowrap;
`;

export const Td = styled.td`
  border: ${viewSizeCalculator(1, true)} solid rgba(194, 204, 217, 0.8);
  padding: ${viewSizeCalculator(13, true)} ${viewSizeCalculator(15, true)};
  font-size: ${viewSizeCalculator(11, true)};
  line-height: ${viewSizeCalculator(13, true)};
  min-width: ${viewSizeCalculator(131, true)} !important;
  text-align: center;
  font-weight: 500;
  font-family: 'Inter';
  color: #242639;
  white-space: nowrap;
`;

export const FixedColumn = styled.td`
  position: sticky;
  left: 0;
  background-color: white;
  border: ${viewSizeCalculator(1, true)} solid rgba(194, 204, 217, 0.8);
  z-index: 20;
  min-width: ${viewSizeCalculator(161, true)} !important;
  padding: ${viewSizeCalculator(13, true)} ${viewSizeCalculator(15, true)};
  font-size: ${viewSizeCalculator(11, true)};
  line-height: ${viewSizeCalculator(13, true)};
  font-weight: 500;
  font-family: 'Inter';
  color: #242639;
  white-space: nowrap;
`;
