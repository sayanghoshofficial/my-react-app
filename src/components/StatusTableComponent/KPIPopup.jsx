import React, { useState } from "react";
import styled from "styled-components";

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  background: #f4f4f4;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
`;

const mockPopupData = [
  { name: "Metric A", value: 90, status: "Approved" },
  { name: "Metric B", value: 75, status: "Pending" },
  { name: "Metric C", value: 50, status: "Rejected" },
];

const KpiPopup = ({ isOpen, onClose, month }) => {
  if (!isOpen) return null;

  return (
    <>
      <Overlay onClick={onClose} />
      <PopupContainer>
        <h3>Details for {month}</h3>
        <Table>
          <thead>
            <tr>
              <Th>Metric</Th>
              <Th>Value</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {mockPopupData.map((item, index) => (
              <tr key={index}>
                <Td>{item.name}</Td>
                <Td>{item.value}</Td>
                <Td>{item.status}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
        <button onClick={onClose}>Close</button>
      </PopupContainer>
    </>
  );
};

export default KpiPopup;
