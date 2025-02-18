import styled from "styled-components";
import { viewSizeCalculator } from "./utils";

export const TableContainer = styled.div`
  overflow: auto;
  background: #fff;
  width: 100%;
  height: 100%;
  position: relative;
  &::-webkit-scrollbar {
    width: ${viewSizeCalculator(3, true)}; /* Vertical scrollbar width */
    height: ${viewSizeCalculator(3, true)}; /* Horizontal scrollbar height */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(51, 51, 51, 0.3);
    border-radius: ${viewSizeCalculator(1.5, true)};
  }

  &::-webkit-scrollbar-track {
    background-color: rgba(245, 245, 245, 1);
  }

  /* Firefox */
  scrollbar-width: thin; /* Makes scrollbar thinner */
  scrollbar-color: rgba(51, 51, 51, 0.3) rgba(245, 245, 245, 1);
  box-sizing: border-box;
`;

export const StyledTable = styled.table`
  min-width: 100%;
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
  box-sizing: border-box;
`;

export const Th = styled.th`
  background: ${(props) => (props.expanded ? "#fff2cc" : "#ffffff")};
  color: #000000;
  padding: ${viewSizeCalculator(3, true)} ${viewSizeCalculator(5, true)};
  font-size: ${viewSizeCalculator(11, true)};
  line-height: ${viewSizeCalculator(13, true)};
  font-weight: 700;
  font-family: "Inter";
  color: #242639;
  white-space: nowrap;
  position: sticky;
  text-align: left;
  top: 0;
  z-index: 3;
  border: ${viewSizeCalculator(1, true)} solid rgba(194, 204, 217, 0.8);
  ${({ expanded }) =>
    expanded && `border-top: ${viewSizeCalculator(2, true)} solid red;`}
  ${({ isFirst, expanded }) =>
    isFirst &&
    expanded &&
    `border-left: ${viewSizeCalculator(2, true)} solid red;`}
  ${({ isLast, expanded }) =>
    isLast &&
    expanded &&
    `border-right: ${viewSizeCalculator(2, true)} solid red;`}
`;

export const Td = styled.td`
  border: ${viewSizeCalculator(1, true)} solid rgba(194, 204, 217, 0.8);
  padding: ${viewSizeCalculator(3, true)} ${viewSizeCalculator(5, true)};
  font-size: ${viewSizeCalculator(11, true)};
  line-height: ${viewSizeCalculator(13, true)};
  text-align: left;
  font-weight: 500;
  font-family: "Inter";
  color: #242639;
  white-space: nowrap;
  background: ${(props) => props.bg || "#fff"};
  box-sizing: border-box;
  ${({ isFirst, expanded }) =>
    isFirst &&
    expanded &&
    `border-left: ${viewSizeCalculator(2, true)} solid red;`};
  ${({ isLast, expanded }) =>
    isLast &&
    expanded &&
    `border-right: ${viewSizeCalculator(2, true)} solid red;`};

  ${({ isLastRow, expanded }) =>
    isLastRow &&
    expanded &&
    `border-bottom: ${viewSizeCalculator(2, true)} solid red;`};
`;

export const StickyTd = styled(Td)`
  position: sticky;
  left: 0;
  background: #fff;
  z-index: 3;
  font-weight: bold;
  box-sizing: border-box;
`;
