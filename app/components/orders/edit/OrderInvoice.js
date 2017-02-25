class OrderInvoice extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
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
                    <tfoot>
                    <tr>
                        <td>Total</td>
                        <td><span>THP 41,534.31</span></td>
                    </tr>
                    </tfoot>
                </table>
            </div>);
    }
}

export default OrderInvoice;