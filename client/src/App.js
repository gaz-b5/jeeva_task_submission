import { useEffect, useState } from "react";
import axios from "axios";
import RecordForm from "./components/RecordForm";
// import Record from "./components/Records";
import "./App.css";
import Records from "./components/recordsTable";

function App() {
  const [records, setRecords] = useState([]);

  const getAllSongs = async () => {
    try {
      const { data } = await axios.get(
        process.env.REACT_APP_API_URL + "/records"
      );
      // console.log(data.data);
      setRecords(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addRecord = (newRecord) => {
    setTimeout(() => {
      setRecords((prevRecords) => [...prevRecords, newRecord.data]);
      console.log(records);
    }, 1000);
  };
  useEffect(() => {
    console.log("Updated records:", records);
  }, [records]);
  useEffect(() => {
    getAllSongs();
  }, []);
  return (
    <div className="container">
      <RecordForm addRecord={addRecord} />
      <Records data={records} />
    </div>
  );
}

export default App;
