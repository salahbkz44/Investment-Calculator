import { formatter } from "../util/investment";

export default function Results({ values }) {
  let totalInterest = 0;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {values.map((yearData) => {
          totalInterest += yearData.interest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>
                <td>
                  {formatter.format(
                    yearData.annualInvestment * yearData.year +
                      values[0].valueEndOfYear -
                      values[0].interest
                  )}
                </td>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
