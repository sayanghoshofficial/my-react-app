import React from "react";
import { mockData } from "./mockData";
import {
  TableWrapper,
  StyledTable,
  Th,
  Td,
  FixedColumn,
  THead,
} from "./index.sc";
import { viewSizeCalculator } from "./utils";

const TableComponent = () => {
  // Collect all unique dates and sort them
  const allDates = Array.from(
    new Set(
      mockData.flatMap((item) =>
        Object.keys(item).filter((key) => key !== "region")
      )
    )
  ).sort((a, b) => {
    const parseDate = (dateStr) => {
      const [monthStr, yearStr] = dateStr.split(" ");
      const month = new Date(Date.parse(monthStr + " 1, 2020")).getMonth(); 
      const year = parseInt(yearStr, 10);
      return new Date(year, month); 
    };
  
    const dateA = parseDate(a);
    const dateB = parseDate(b);
  
    return dateA - dateB;
  });

  // Collect the unique columns per date
  const dateColumns = allDates.reduce((acc, date) => {
    acc[date] = Array.from(
      new Set(
        mockData.flatMap((item) => (item[date] ? Object.keys(item[date]) : []))
      )
    );
    return acc;
  }, {});

  return (
    <TableWrapper>
      <StyledTable>
        <THead>
          <tr>
            <Th
              rowSpan={2}
              style={{
                position: "sticky",
                top: 0,
                left: 0,
                width: `${viewSizeCalculator(161, true)}`,
              }}
            ></Th>
            {allDates.map((date) => (
              <Th colSpan={dateColumns[date].length} key={date}>
                {date}
              </Th>
            ))}
          </tr>
          <tr>
            {allDates.map((date) =>
              dateColumns[date].map((col) => <Th key={date + col}>{col}</Th>)
            )}
          </tr>
        </THead>
        <tbody>
          {mockData.map((item, idx) => (
            <tr key={item.region}>
              <FixedColumn>
                <div style={{ width: `${viewSizeCalculator(161, true)}` }}>
                  {item.region}
                </div>
              </FixedColumn>
              {allDates.map((date) =>
                dateColumns[date].map((col) => (
                  <Td key={item.region + date + col}>
                    {item[date]?.[col] ?? "-"}
                  </Td>
                ))
              )}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default TableComponent;
