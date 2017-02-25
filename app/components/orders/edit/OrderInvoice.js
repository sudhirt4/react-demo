class OrderInvoice extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="main-content order-invoice">
                <div className="well">
                    <table>
                        <tbody>
                        <tr>
                            <td>Estimate Delivery Date</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Special Discount</td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td><input className="small" type="text"/> % 1,826,00</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>THP 41,534.31</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>);
    }
}

export default OrderInvoice;