import React from "react";
import "./style.css";
import Card from "../components/Card";

const Home = () => {
  const accountData = [
    {
      account: "La Rocopia EE752200221057734534",
      balance: 3347.0,
      credit: 725.0,
      reserved: 200.0,
    },
    {
      account: "Manu Lepik EE752200221057734534",
      balance: 1500.0,
      credit: 300.0,
      reserved: 100.0,
    },
    {
      account: "Liina Roosipõld EE752200221057734534",
      balance: 2000.0,
      credit: 500.0,
      reserved: 150.0,
    },
  ];

  // Calculate Total Balance
  const totalBalance = accountData.reduce(
    (total, account) => total + account.balance,
    0
  );
  const totalCredit = accountData.reduce(
    (total, account) => total + account.credit,
    0
  );
  const totalReserved = accountData.reduce(
    (total, account) => total + account.reserved,
    0
  );

  return (
    <>
      <h1>Home</h1>
      <div className="section">
        <h2>Your Swedbank Overview</h2>
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Balance</th>
              <th>Credit</th>
              <th>Reserved</th>
              <th>Available</th>
            </tr>
          </thead>
          <tbody>
            {accountData.map((account, index) => (
              <tr key={index}>
                <td>{account.account}</td>
                <td>{account.balance.toFixed(2)}</td>
                <td>{account.credit.toFixed(2)}</td>
                <td>{account.reserved.toFixed(2)}</td>
                <td>{(account.balance - account.reserved).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total:</td>
              <td>{totalBalance.toFixed(2)}</td>
              <td>{totalCredit.toFixed(2)}</td>
              <td>{totalReserved.toFixed(2)}</td>
              <td className="total-available">
                {(totalBalance - totalReserved).toFixed(2)}
              </td>
            </tr>
          </tfoot>
        </table>

        {/* Add more sections as needed */}
      </div>
      <div className="section row">
        <Card
          heading="Open"
          headingBackgroundColor="var(--ui-color-blue)"
        >
            <p>One of core values of Swedbank.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>

        <Card
          heading="Caring"
          headingBackgroundColor="var(--ui-color-tangerine)"
        >
            <p>One of core values of Swedbank.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>
        
        <Card
          heading="Simple"
          headingBackgroundColor="var(--ui-color-tulip)"
        >
          <p>One of core values of Swedbank.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Card>
      </div>
    </>
  );
};

export default Home;
