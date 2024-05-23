import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    ccMse: "",
    daaMse: "",
    sdamMse: "",
    wtMse: "",
    ccEse: "",
    daaEse: "",
    sdamEse: "",
    wtEse: "",
    ese_sdam: "",
  });
  // console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (!isNaN(value) && value.trim() !== "") {
      const numericValue = parseFloat(value);
      if (numericValue <= 100 && numericValue >= 0) {
        setData((prevState) => ({
          ...prevState,
          [name]: numericValue,
        }));
      } else {
        alert(
          "Entered Value Is Not Valid! Please enter a number between 0 and 100."
        );
      }
    } else {
      if (typeof value === "string" && value.trim() !== "") {
        setData((prevState) => ({
          ...prevState,
          [name]: value.trim(),
        }));
      } else {
        alert("Entered Value Is Not Valid! Please enter a non-empty string.");
      }
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/add", data);
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form id="form" className="form-control form" onSubmit={handleOnSubmit}>
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={handleOnChange}
              placeholder=""
            />
          </label>
          
        </div>
        <table>
          <thead>
            <tr>
              <th scope="col">Subjects</th>
              <th scope="col">MSE Grades</th>
              <th scope="col">ESE Grades</th>
            </tr>
          </thead>
          <tbody>
            {["cc", "wt", "daa", "sdam"].map((subject) => (
              <tr key={subject}>
                <th>{subject.toUpperCase()}</th>
                <td>
                  <input
                    name={`${subject}Mse`}
                    className="form-control"
                    type="number"
                    min="0"
                    max="100"
                    onChange={handleOnChange}
                    placeholder=""
                  />
                </td>
                <td>
                  <input
                    name={`${subject}Ese`}
                    className="form-control"
                    type="number"
                    min="0"
                    max="100"
                    onChange={handleOnChange}
                    placeholder=""
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};


export default Form
