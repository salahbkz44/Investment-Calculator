import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateInvestmentResults } from "./util/investment";
import { useState } from "react";

function App() {
  const [Inputs, setInputs] = useState([0, 0, 0, 0]);

  function handleInput(value, index) {
    setInputs((prev) => {
      let newValues = [...prev];
      newValues[index] = value;
      return newValues;
    });
  }

  const results = calculateInvestmentResults({
    initialInvestment: +Inputs[0],
    annualInvestment: +Inputs[1],
    expectedReturn: +Inputs[2],
    duration: +Inputs[3],
  });

  return (
    <>
      <Header />
      <div id="user-input">
        <div className="input-group">
          <UserInput
            label={"INITIAL INVESTMENT"}
            value={Inputs[0]}
            handleNewInput={handleInput}
            index={0}
          />
          <UserInput
            label={"ANNUAL INVESTMENT"}
            value={Inputs[1]}
            handleNewInput={handleInput}
            index={1}
          />
        </div>
        <div className="input-group">
          <UserInput
            label={"EXPECTED RETURN"}
            value={Inputs[2]}
            handleNewInput={handleInput}
            index={2}
          />
          <UserInput
            label={"DURATION"}
            value={Inputs[3]}
            handleNewInput={handleInput}
            index={3}
          />
        </div>
      </div>
      <Results values={results} />
    </>
  );
}

export default App;
