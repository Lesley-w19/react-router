import React from "react";

function AutoComplete({ isVisible, suggestions, handleSuggestionClick }) {
  return (
    <>
    <div className="suggestion">
 <div className={`${isVisible ? "show suggestion__box" : "suggestion__box"}`}>
      <ul>
        {suggestions.map((country, index) => (
          <li key={index} onClick={() => handleSuggestionClick(country)}>
            {country}
          </li>
        ))}
      </ul>
    </div>
    </div>
    
    </>
   
  );
}

export default AutoComplete;
