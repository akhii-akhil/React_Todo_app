import React, { useEffect, useState } from "react";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import Logics from './Logics.css'
import Summary from "./Summary";
import { useNavigate } from "react-router-dom";

function Logic({onch}) {
  const [val, setVal] = useState("");
  const [desc, setDesc] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [id, setId] = useState(1);
  let navigate = useNavigate();
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleCLick = (e) => {
    if (sessionStorage.getItem("id")) {
      sessionStorage.setItem("id",Number.parseInt(sessionStorage.getItem("id"))+1)
    }
    else {
      sessionStorage.setItem("id",1)
    }
    let dat = {
      id:sessionStorage.getItem("id"),
      title:val ,
      desc: desc,
      startTime: startTime,
      endTime:endTime
    }
    console.log("43",dat);
    onch(dat)
    navigate('/summary')
  };
  return (
    <>
      <form onSubmit={handleCLick}>
        <h3>Todo Entry Form</h3>
        <label>
          Enter the task
          <input
            type="text"
            placeholder="TextValue"
            size={54}
            value={val}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Enter the Description
          <input
            type="text"
            placeholder="TextValue"
            size={54}
            value={desc}
            onChange={handleDesc}
            required
          />
        </label>
        <br />
        <br />
        <label>
          Start Time
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                label="Basic time picker"
                onChange={(e) => {
                  setStartTime(e);
                }}
                value={startTime}
              />
            </DemoContainer>
          </LocalizationProvider>
        </label>
        <br />
        <br />
        <label>
          End Time
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["TimePicker"]}>
              <TimePicker
                label="Basic time picker"
                onChange={(e) => {
                  setEndTime(e);
                }}
                value={endTime}
              />
            </DemoContainer>
          </LocalizationProvider>
        </label>
        <br />
        <br />
        
        <button type='submit' className="btn btn-dark">
          Submit
        </button>
      </form>
    </>
  );
}

export default Logic;
