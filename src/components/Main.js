import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header"; // Make sure these files exist
import Booking from "./Booking"; // Make sure these files exist

const Main = () => {
  const seedRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 1858512;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() > 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const initialState = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = React.useReducer(updateTimes, initialState);

  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const navigate = useNavigate();

  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/confirmed");
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
            availableTimes={state.availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
