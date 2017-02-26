class OrderInvoice extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        //TODO: Unclear on functional requirements
        return (
            <div className="common-block order-invoice card">
                <table className="table table-responsive">
                    <thead>
                    <tr>
                        <td>Estimate Delivery Date</td>
                        <td><input type="text"/></td>
                    </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
                <div className="order-invoice-footer">
                    <label>Total</label>
                    <span>THP 41,534.31</span>
                </div>
            </div>);
    }
}

export default OrderInvoice;