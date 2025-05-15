import { useState, useEffect } from "react";
import ContactButton from "./ContactButton";
const Contact = () => {
  const [roles, setRoles] = useState([]);
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    window.aptrinsic("track", "roles", { roles: roles });
    console.log(roles);
  }, [roles]);
  const handleRole = (role) => {
    if (!roles.includes(role)) {
      setRoles((prevRoles) => [...prevRoles, role]);
    }
    console.log(roles);
  };
  return (
    <>
      <h3>This is the contact page</h3>
      <button id="GM" onClick={() => handleRole("GM")}>
        GM
      </button>
      <button id="SM" onClick={() => handleRole("SM")}>
        SM
      </button>
      <button id="FM" onClick={() => handleRole("FM")}>
        FM
      </button>
      <h2 data-new="new-one">
        {" "}
        "Environmental, Social, Governances"
        <span data-new="new2"></span>
      </h2>
      <button
        onClick={() => {
          console.log(buttons);
          setButtons((prevButtons) => [...prevButtons, {}]);
        }}>
        AddContact button
      </button>
      <div style={{ marginTop: "20px" }}>
        {buttons.map((_, index) => {
          return <ContactButton key={index} />;
        })}
      </div>
    </>
  );
};
export default Contact;
