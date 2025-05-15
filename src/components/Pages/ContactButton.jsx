import { useState } from "react";

const ContactButton = () => {
  const handleCustomEvent = () => {
    if (window.aptrinsic) {
      window.aptrinsic("track", "viewbuttonclicked", { clicked: "yes" });
    }
  };
  return (
    <div>
      <button id="view" onClick={handleCustomEvent}>
        View
      </button>
    </div>
  );
};

export default ContactButton;
