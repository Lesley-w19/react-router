import React from "react";
import Calculate from "./Calculate";
const Population = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Population</h1>
        <div>
          <Calculate label="Class 1" total={360} score={203} />
          <Calculate label="Class 2" total={206} />
          <Calculate label="Class 3" score={107} />
          <Calculate label="Class 4" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Population;
