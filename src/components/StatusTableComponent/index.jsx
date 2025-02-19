import React, { useEffect, useRef, useState } from "react";
import { StickyTd, StyledTable, TableContainer, Td, Th } from "./index.sc";
import { getBgColor, months, columnsConfig } from "./utils";
import { mockData } from "./mockData";

const KPIAdminTable = ({}) => {
  const [columnWidths, setColumnWidths] = useState({});
  const [openColumns, setOpenColumns] = useState({});
  const data = mockData.data;
  const slNoRef = useRef();
  const kpiRef = useRef();
  const stakeholdersRef = useRef();

  useEffect(() => {
    const getColumnWidths = () => {
      setColumnWidths({
        slNoWidth: slNoRef.current?.getBoundingClientRect().width,
        kpiWidth: kpiRef.current?.getBoundingClientRect().width,
        stakeholdersWidth:
          stakeholdersRef.current?.getBoundingClientRect().width,
      });
    };

    getColumnWidths();

    window.addEventListener("resize", getColumnWidths);

    return () => {
      window.removeEventListener("resize", getColumnWidths);
    };
  }, [data, openColumns]);

  const years = Array.from(
    new Set(
      data.flatMap((item) =>
        item.monthly_statuses.map(
          (status) => `20${status.for_period.split("'")[1]}`
        )
      )
    )
  ).sort();

  const handleColumnClick = (month, year) => {
    const period = `${month.toUpperCase()}'${year.slice(-2)}`;
    setOpenColumns((prevState) => {
      const newState = {};
      newState[period] = !prevState[period];

      return newState;
    });
  };

  const availableSubColumns = columnsConfig.filter(({ key }) =>
    data.some((item) =>
      item.monthly_statuses.some((status) => status[key] !== undefined)
    )
  );

  return (
    <TableContainer>
      <StyledTable>
        <thead style={{ left: 0, zIndex: 10, top: 0, position: "sticky" }}>
          <tr>
            <Th rowSpan={2} style={{ left: 0, zIndex: 5 }} ref={slNoRef}>
              Sl.No
            </Th>
            <Th
              rowSpan={2}
              style={{ left: columnWidths.slNoWidth, zIndex: 5 }}
              ref={kpiRef}
            >
              KPI
            </Th>
            <Th
              rowSpan={2}
              style={{
                left: columnWidths.slNoWidth + columnWidths.kpiWidth,
                zIndex: 5,
              }}
              ref={stakeholdersRef}
            >
              Stakeholders
            </Th>
            {years.map((year) => {
              const isYearExpanded = months.some(
                (month) =>
                  openColumns[`${month.toUpperCase()}'${year.slice(-2)}`]
              );

              return (
                <Th
                  key={year}
                  colSpan={
                    isYearExpanded
                      ? availableSubColumns.length + months.length
                      : months.length
                  }
                  style={{ textAlign: "center" }}
                >
                  {year}
                </Th>
              );
            })}
          </tr>
          <tr>
            {years.map((year) =>
              months.map((month) => {
                const period = `${month.toUpperCase()}'${year.slice(-2)}`;
                const isMonthSelect =
                  month.toLowerCase() ===
                    Object.keys(openColumns)[0]?.slice(0, 3).toLowerCase() ||
                  false;
                return (
                  <>
                    <Th
                      key={month}
                      style={{ textAlign: "center", cursor: "pointer" }}
                      onClick={() => handleColumnClick(month, year)}
                      expanded={openColumns[period]}
                      isFirst={isMonthSelect}
                    >
                      {month}
                    </Th>
                    {openColumns[period] &&
                      availableSubColumns.map(({ key, label }, columnIdx) => (
                        <Th
                          key={`${period}-${key}`}
                          style={{ textAlign: "center" }}
                          expanded={openColumns[period]}
                          isLast={columnIdx === availableSubColumns.length - 1}
                        >
                          {label}
                        </Th>
                      ))}
                  </>
                );
              })
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            const isLastRow = index === data.length - 1;
            return (
              <tr key={index}>
                <StickyTd style={{ left: 0 }}>{index + 1}</StickyTd>
                <StickyTd style={{ left: columnWidths.slNoWidth }}>
                  {item.kpi_name}
                </StickyTd>
                <StickyTd
                  style={{
                    left: columnWidths.slNoWidth + columnWidths.kpiWidth,
                  }}
                >
                  {item.stakeholders.join(", ")}
                </StickyTd>
                {years.map((year) =>
                  months.map((month) => {
                    const period = `${month.toUpperCase()}'${year.slice(-2)}`;
                    const statusObj = item.monthly_statuses.find(
                      (status) => status.for_period === period
                    );
                    const isMonthSelect =
                      month.toLowerCase() ===
                        Object.keys(openColumns)[0]
                          ?.slice(0, 3)
                          .toLowerCase() || false;
                    return (
                      <>
                        <Td
                          key={period}
                          bg={getBgColor(statusObj?.color)}
                          style={{
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                          expanded={openColumns[period]}
                          onClick={() => handleColumnClick(month, year)}
                          isFirst={isMonthSelect}
                          isLastRow={isLastRow}
                        ></Td>
                        {openColumns[period] &&
                          availableSubColumns.map(({ key }, columnIdx) => (
                            <Td
                              key={`${period}-${key}`}
                              style={{
                                textAlign: "center",
                                backgroundColor: getBgColor(statusObj?.[key]),
                              }}
                              expanded={openColumns[period]}
                              isLast={
                                columnIdx === availableSubColumns.length - 1
                              }
                              isLastRow={isLastRow}
                            ></Td>
                          ))}
                      </>
                    );
                  })
                )}
              </tr>
            );
          })}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};

export default KPIAdminTable;
