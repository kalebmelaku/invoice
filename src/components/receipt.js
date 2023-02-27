import React from 'react';
class Receipt extends React.Component {
    render() {
        return (
            <div className="container invoice-box">
                <div className="title">
                <h1>Payment Receipt</h1>
                <button className="print_btn print" onClick={() => { window.print(); }}>Print</button>
                </div>
                <div className="receipt">
                    <p className="company-name">ABC Company</p>
                    <p className="company-address">123 Main St, Anytown, USA</p>
                    <p className="company-phone">Phone: (123) 456-7890</p>
                    <hr /> 
                    <p className="customer-name">Customer Name: John Doe</p>
                    <p className="customer-email">Email: john.doe@example.com</p>
                    <p className="receipt-number">Receipt #: 123456789</p>
                    <p className="transaction-date">Transaction Date: 02/25/2023</p>
                    <hr />
                    <table>
                        <tbody>
                        <tr>
                            <th>Item</th>
                            <th>Description</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Product A</td>
                            <td>$10.00</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Product B</td>
                            <td>$15.00</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Product C</td>
                            <td>$20.00</td>
                            </tr>
                            </tbody>
                    </table>
                    <hr />
                    <p className="total-amount">Total Amount: $45.00</p>
                </div>
            </div>

        );
    }
}

export default Receipt;