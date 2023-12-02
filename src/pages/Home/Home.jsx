import React, { useRef } from "react";
import "./style.css";
import Card from "../../components/Card";
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { saveAs } from 'file-saver';
import pdfImage from '../../images/pdf.svg'; // Import the image

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

    const tableRef = useRef();

    const handleDownloadPDF = () => {
        const pdf = new jsPDF();
        pdf.autoTable({ html: tableRef.current });
        pdf.save("swedbank_overview.pdf");
    };

    const handleDownloadCSV = () => {
        const csvContent = getCSVContent();
        const blob = new Blob([csvContent], { type: "text/csv" });
        saveAs(blob, "swedbank_overview.csv");
    };

    const getCSVContent = () => {
        // Build CSV content here based on your table data
        let csv = 'Account,Balance,Credit,Reserved,Available\n';
        accountData.forEach((account) => {
            const available = (account.balance - account.reserved).toFixed(2);
            csv += `${account.account},${account.balance.toFixed(2)},${account.credit.toFixed(2)},${account.reserved.toFixed(2)},${available}\n`;
        });
        csv += `Total,${totalBalance.toFixed(2)},${totalCredit.toFixed(2)},${totalReserved.toFixed(2)},${(totalBalance - totalReserved).toFixed(2)}\n`;
        return csv;
    };


    return (
        <>
            <h1>Home</h1>
            <div className="section">
                <div  className="table-container">
                    <h2>Your Swedbank Overview</h2>
                    <div className="button-container">
                        <button onClick={handleDownloadPDF}>
                            <img src={pdfImage} alt="PDF" />
                            PDF
                        </button>
                        <button onClick={handleDownloadCSV}>
                            <img src={pdfImage} alt="PDF" />
                            XSL
                        </button>
                    </div>
                </div>
                <table ref={tableRef}>
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
            </div>
            <div className="section row">
                <Card heading="Open" headingBackgroundColor="var(--ui-color-blue)">
                    <p>One of core values of Swedbank.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </Card>

                <Card
                    heading="Caring"
                    headingBackgroundColor="var(--ui-color-tangerine)"
                >
                    <p>One of core values of Swedbank.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </Card>

                <Card heading="Simple" headingBackgroundColor="var(--ui-color-tulip)">
                    <p>► One of core values of Swedbank.</p>
                    <p>► Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                </Card>
            </div>
        </>
    );
};

export default Home;
