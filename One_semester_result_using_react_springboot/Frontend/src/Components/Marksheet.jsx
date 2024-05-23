import React, { useState } from "react";
import axios from "axios";

const Marksheet = () => {
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
  });
  const [id, setId] = useState("");
  
  // Ensure to handle NaN cases when parsing
  const totalMseMarks = 
    (parseInt(data.ccMse) || 0) + 
    (parseInt(data.daaMse) || 0) + 
    (parseInt(data.sdamMse) || 0) + 
    (parseInt(data.wtMse) || 0);
    
  const totalEseMarks = 
    (parseInt(data.ccEse) || 0) + 
    (parseInt(data.daaEse) || 0) + 
    (parseInt(data.sdamEse) || 0) + 
    (parseInt(data.wtEse) || 0);

  const percentage = ((0.7 * totalEseMarks + 0.3 * totalMseMarks) / 4).toFixed(2);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleOnSubmitMarksheet = async (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    try {
      const response = await axios.get(`http://localhost:8080/get/${id}`);
      if (response.data) {
        setData({
          ...data,
          ...response.data,
        });
      } else {
        console.log("No data received");
      }
    } catch (error) {
      console.error("Fetching data failed:", error);
    }
  };

  return (
    <div className="form-container">
      <form id="form" className="form-control form" onSubmit={handleOnSubmitMarksheet}>
        <label>
          Student Id :{" "}
          <input
            type="number"
            className="form-control"
            name="id"
            min="1"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      <div id="form" className="form-control form">
        <div>
          <label>
            Name:{" "}
            <input
              type="text"
              className="form-control"
              name="name"
              value={data.name}
              placeholder=""
              onChange={handleOnChange}
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
                    value={data[`${subject}Mse`]}
                    className="form-control"
                    min="0"
                    max="100"
                    placeholder=""
                    onChange={handleOnChange}
                  />
                </td>
                <td>
                  <input
                    name={`${subject}Ese`}
                    value={data[`${subject}Ese`]}
                    className="form-control"
                    min="0"
                    max="100"
                    placeholder=""
                    onChange={handleOnChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="percentage">
          <p>
            Percentage: <span>{percentage}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marksheet;
