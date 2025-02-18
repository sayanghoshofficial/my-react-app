import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.bgColor || "#007bff"};
  color: white;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 0.313rem;
  cursor: pointer;
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#0056b3"};
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const PopupContainer = styled.div`
  background: #ffffff;
  border-radius: ${({ config }) => config?.borderRadius || "0.625rem"};
  width: ${({ config }) => config?.width || "23.958vw"};
  padding: ${({ config }) => config?.padding || "1.5rem"};
  display: ${({ config }) => config?.display || ""};
  box-shadow: 0px 2px 4px 0px #00000040;
  position: relative;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const Icon = styled.div`
  font-size: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TitleContainer = styled.div`
  width: ${({ config }) => config?.width || ""};
  text-align: ${({ config }) => config?.textAlign || "center"};
  display: flex;
  align-items: ${({ config }) => config?.alignItems || "center"};
  flex-direction: ${({ config }) => config?.flexDirection || "column"};
  padding: ${({ config }) => config?.padding || ""};
  gap: ${({ config }) => config?.gap || ".25rem"};
  justify-content: ${({ config }) => config?.justifyContent || "center"};
`;

export const Title = styled.div`
  font-family: Inter;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.875rem;
  letter-spacing: -0.022em;
  text-align: center;
  color: #242639;
`;

export const Description = styled.div`
  font-family: Inter;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.313rem;
  letter-spacing: -0.022em;
  text-align: center;
  color: #606080;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.75rem;
  width: 100%;
`;

export const TextareaContainer = styled.div`
  width: 100%;
  textarea {
    width: calc(100% - 1.5rem);
    padding: 0.625rem;
    border-radius: 0.313rem;
    border: 1px solid #dce0e6;
    font-size: 1.125rem;
    resize: none;
    height: 5.125rem;
    outline: none;
    &::placeholder {
      color: #91929b;
    }
    &:focus {
      border-color: #8693a4;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #989898;
`;
