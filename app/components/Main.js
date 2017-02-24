class Main extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="main-wrapper">
                <div className="row">
                    <div className="col-xs-3">
                        <button className="btn btn-danger">Custom</button>
                    </div>
                    <div className="col-xs-9">
                        <table className="table table-striped">
                            <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                            </tr>
                            <tr>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>mary@example.com</td>
                            </tr>
                            <tr>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>july@example.com</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>);
    }
}

export default Main;