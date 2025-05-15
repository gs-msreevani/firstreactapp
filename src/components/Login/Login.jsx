// Login.jsx
import { useState } from "react";
import { useAuth } from "../../AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
const Login = () => {
  // State to store form field values
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    accountName: "",
  });
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    login();
    // For now, just log the form data to the console
    console.log("Form Data:", formData);
    //passing user and account objects:
    let accountId = formData.accountName;
    let preferredcaseaID = accountId.toLowerCase();
    if (window.aptrinsic) {
      window.aptrinsic(
        "identify",
        {
          //User Fields
          id: formData.email, // Required for logged in app users
          email: formData.email,
          firstName: formData.username,
          lastName: formData.username[0],
          signUpDate: new Date(),
        },
        {
          //Account Fields
          id: preferredcaseaID, //Required
          name: formData.accountName,
        }
      );
    }
    if (window.pendo) {
      window.pendo.initialize({
        visitor: {
          id: formData.email, // Required if user is logged in
          email: formData.email, // Recommended if using Pendo Feedback, or NPS Email
          // full_name:    // Recommended if using Pendo Feedback
          // role:         // Optional
          // You can add any additional visitor level key-values here,
          // as long as it's not one of the above reserved names.
        },
        account: {
          id: preferredcaseaID, // Highly recommended, required if using Pendo Feedback
          name: formData.accountName, // Optional
          // is_paying:    // Recommended if using Pendo Feedback
          // monthly_value:// Recommended if using Pendo Feedback
          // planLevel:    // Optional
          // planPrice:    // Optional
          // creationDate: // Optional
          // You can add any additional account level key-values here,
          // as long as it's not one of the above reserved names.
        },
      });
    }
  };
  if (isLoggedIn) {
    // Navigate to the root path
    navigate("/");
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="accountName">Account Name:</label>
        <input
          type="text"
          id="accountName"
          name="accountName"
          value={formData.accountName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
