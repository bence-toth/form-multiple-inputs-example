import { useCallback, useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setFormData({
          ...formData,
          name: event.target.value,
        });
        break;
      case "email":
        setFormData({
          ...formData,
          email: event.target.value,
        });
        break;
      case "phone":
        setFormData({
          ...formData,
          phone: event.target.value,
        });
        break;
      default:
        throw new Error("Unknown input field");
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number:</label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input type="submit" value="Submit form" />
        </div>
      </form>
    </div>
  );
};

export default App;
