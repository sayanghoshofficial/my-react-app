import React from "react";
import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
    opacity: 0.3;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  background-color: #E20074;
  border-radius: 50%;
  animation: ${bounce} 1.4s infinite ease-in-out;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }
  &:nth-child(2) {
    animation-delay: -0.16s;
  }
  &:nth-child(3) {
    animation-delay: 0s;
  }
`;

const DottedLoader = () => {
  return (
    <LoaderWrapper>
      <Dot />
      <Dot />
      <Dot />
    </LoaderWrapper>
  );
};

export default DottedLoader;
