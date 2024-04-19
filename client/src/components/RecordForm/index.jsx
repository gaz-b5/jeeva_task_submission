import { useState } from "react";
import axios from "axios";
import FileInput from "../FileInput";
import styles from "./styles.module.css";

const RecordForm = ({ addRecord }) => {
  const [data, setData] = useState({
    doc_name: "",
    pat_name: "",
    age: "",
    date: "",
    audio: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleInputState = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_API_URL + "/records";
      const { data: res } = await axios.post(url, data);
      addRecord(res);
      console.log(res);
      setData({
        doc_name: "",
        pat_name: "",
        age: "",
        date: "",
        audio: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Record submission</h1>
        <div className={styles.input_box}>
          <input
            type="text"
            className={styles.input}
            placeholder="Name of the Doctor..."
            name="doc_name"
            onChange={handleChange}
            value={data.doc_name}
          />
        </div>
        <div className={styles.input_box}>
          <input
            type="text"
            className={styles.input}
            placeholder="Name of the patient..."
            name="pat_name"
            onChange={handleChange}
            value={data.pat_name}
          />
        </div>
        <div className={styles.input_box}>
          <input
            type="Number"
            className={styles.input}
            placeholder="Age..."
            name="age"
            onChange={handleChange}
            value={data.age}
          />
        </div>
        <div className={styles.input_box}>
          <input
            type="date"
            className={styles.input}
            name="date"
            onChange={handleChange}
            value={data.date}
          />
        </div>
        <div className={styles.input_box}>
          <FileInput
            name="audio"
            label="Select Audio file"
            handleInputState={handleInputState}
            type="audio"
            value={data.audio}
          />
        </div>
        <div
          className={styles.input_box}
          style={{
            WebkitAppearance: "none", // Remove default arrows in Chrome and Safari
            MozAppearance: "textfield", // Remove default arrows in Firefox
            appearance: "textfield", // Remove default arrows in other browsers
          }}
        >
          <button type="submit" className={styles.submit_btn}>
            Submit
          </button>
        </div>
      </form>
      <div className={styles.circle_1} style={{ "--colour": "#0d7377" }}></div>
      <div className={styles.circle_2} style={{ "--colour": "#40514e" }}></div>
      <div className={styles.circle_3} style={{ "--colour": "#1dddcd" }}></div>
    </div>
  );
};

export default RecordForm;
