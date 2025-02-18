// Popup.js
import React from "react";
import {
  Overlay,
  PopupContainer,
  Icon,
  Title,
  Description,
  ButtonContainer,
  TextareaContainer,
  CloseButton,
  TitleContainer,
} from "./index.sc";
import { FaTimes } from "react-icons/fa";

const Popup = ({
  isOpen,
  icon,
  title,
  description,
  buttons,
  showTextarea,
  textareaValue,
  popupRef,
  onTextareaChange,
  onClose,
  showCloseButton,
  config,
  titleconfig
}) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <PopupContainer config={config} ref={popupRef}>
        {showCloseButton && onClose && (
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        )}
        <TitleContainer config={titleconfig}>
          <Icon>{icon && icon}</Icon>
          <Title>{title && title}</Title>
          <Description>{description && description}</Description>
        </TitleContainer>
        {showTextarea && (
          <TextareaContainer>
            <textarea
              value={textareaValue}
              onChange={onTextareaChange}
              placeholder="Add Comment"
            />
          </TextareaContainer>
        )}

        <ButtonContainer>
          {buttons &&
            buttons.map((ButtonComponent, index) => (
              <div key={index}>{ButtonComponent}</div>
            ))}
        </ButtonContainer>
      </PopupContainer>
    </Overlay>
  );
};

export default Popup;
