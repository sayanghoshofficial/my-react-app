import React, { useRef, useState, useEffect } from "react";
import Popup from "./popup";
import { FaCheck, FaTimes } from "react-icons/fa";
// import { ReactComponent as Warning } from "./Vector (4).svg";
// import { ReactComponent as Success } from "./success.svg";
import { Success, Warning } from "./popup/Icon";

const PopupComp = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleButtonClick = (buttonName) => {
    console.log(`${buttonName} button clicked`);
    setIsPopupOpen(false);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Button = ({ text, icon, onClick, style, className }) => {
    return (
      <button onClick={onClick} style={style} className={className}>
        {icon} {text}
      </button>
    );
  };

  const cancelButton = <Button text="Cancel" style={ButtonCancel} />;

  const confirmButton = (
    <Button
      text="Reject"
      icon={<FaTimes />}
      style={getButtonStyle(textareaValue)}
    />
  );

  const approveButton = (
    <Button text="Approve" icon={<FaCheck />} style={buttonStyle1} />
  );

  return (
    <>
      <div>
        <button onClick={handleOpenPopup} ref={buttonRef}>
          Open Popup
        </button>

        <Popup
          isOpen={false}
          config={config1}
          icon={<Warning />}
          popupRef={popupRef}
          title="Are you sure you want to reject?"
          description="This action cannot be undone"
          buttons={[cancelButton, confirmButton]}
          showTextarea={true}
          showCloseButton={false}
          textareaValue={textareaValue}
          onTextareaChange={handleTextareaChange}
          onClose={handleClosePopup}
        />
      </div>

      <div>
        <Popup
          isOpen={false}
          config={config1}
          popupRef={popupRef}
          icon={<Warning />}
          title="Are you sure you want to approve?"
          description="This action cannot be undone"
          buttons={[cancelButton, approveButton]}
          showTextarea={false}
          showCloseButton={false}
          textareaValue={textareaValue}
          onTextareaChange={handleTextareaChange}
          onClose={handleClosePopup}
        />
      </div>

      <div>
        <Popup
          isOpen={isPopupOpen}
          config={config}
          popupRef={popupRef}
          icon={<Success />}
          titleconfig={{ padding: "0 3.2rem" }}
          title="Successfully Approved!"
          description="This KPI has been successfully rejected.
         A confirmation email has been sent to the respective users."
          // buttons={[cancelButton, approveButton]}
          showTextarea={false}
          showCloseButton={true}
          textareaValue={textareaValue}
          onTextareaChange={handleTextareaChange}
          onClose={handleClosePopup}
        />
      </div>
    </>
  );
};

const config = {
  borderRadius: "1.25rem",
};

const config1 = {
  display: "flex",
};
const getButtonStyle = (textareaValue) => {
  return {
    padding: ".375rem 1rem",
    gap: ".5rem",
    borderRadius: ".5rem",
    color: "#ffffff",
    opacity: textareaValue.length > 0 ? 1 : 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#8693A4",
    fontFamily: "Inter",
    cursor: textareaValue.length > 0 ? "pointer" : "not-allowed",
    fontSize: "0.855rem",
    fontWeight: 600,
    lineHeight: "1.5rem",
    letterSpacing: "-0.02em",
    border: "none",
    textAlign: "left",
  };
};
const ButtonCancel = {
  padding: ".375rem 1rem",
  gap: ".5rem",
  borderRadius: ".5rem",
  border: "1px solid #8693A4",
  display: "flex",
  cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  color: "#606080",
  background: "#ffffff",
  fontFamily: "Inter",
  fontSize: "0.855ren",
  fontWeight: 600,
  lineHeight: "1.5rem",
  letterSpacing: "-0.02em",
  textAlign: "left",
};

const buttonStyle1 = {
  padding: ".375rem 1rem",
  gap: ".5rem",
  borderRadius: ".5rem",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#ED0295",
  fontFamily: "Inter",
  cursor: "pointer",
  fontSize: "0.855ren",
  fontWeight: 600,
  lineHeight: "1.5rem",
  letterSpacing: "-0.02em",
  border: "none",
  textAlign: "left",
};

export default PopupComp;
