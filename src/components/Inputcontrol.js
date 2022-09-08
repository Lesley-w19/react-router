import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import _ from "lodash";
// import { Form } from "react-bootstrap";
import AutoComplete from "./AutoComplete";
import useOutsideClick from "../custom-hooks/useOClick";

const InputControl = ({ name, label, placeholder }) => {
  const [countryRef, isVisible, setIsVisible] = useOutsideClick();
  const [allCountries, setallCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [searchValue, setsearchValue] = useState("");
  const [error, setError] = useState("");
  const ref = useRef();

  useEffect(() => {
    ref.current = _.debounce(getCountries, 300);
  }, []);

  function getCountries(inputSearch) {
    axios
      .get("/countries.json")
      .then((response) => {
        const countries = response.data;
        const result = countries.filter((country) =>
          //   console.log(country)
          country.toLowerCase().includes(inputSearch.toLowerCase())
        );
        setallCountries(result);
        if (result.length > 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        setError("");
      })
      .catch(() => setError("Something went wrong. Try again later"));
  }

  const handleSearch = (event) => {
    event.preventDefault();
    const { value } = event.target;
    setsearchValue(value);
    ref.current(value);
  };

  const handleSuggestionClick = (countryValue) => {
    setSelectedCountry(countryValue);
    setIsVisible(false);
  };

  return (
    <>
      <form className="form" controlId="searchValue">
        <label className="form__label">{label}</label>
        <input
          className="form__control"
          type="text"
          value={searchValue}
          name={name}
          onChange={handleSearch}
          autoComplete="off"
          placeholder={placeholder}
        />{" "}
      </form>
      <div ref={countryRef}>
        {isVisible && (
          <AutoComplete
            isVisible={isVisible}
            suggestions={allCountries}
            handleSuggestionClick={handleSuggestionClick}
          />
        )}
      </div>
      <div className="form__output">
  {selectedCountry && (
        <div className="form__output__value">
          Your selected country: {selectedCountry}
        </div>
      )}
      {error && <p className="form__output__error">{error}</p>}
      </div>
    
    </>
  );
};

export default InputControl;
