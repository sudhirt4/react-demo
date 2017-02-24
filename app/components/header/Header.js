class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="header row">
                <div className="pull-left">
                    <input/>
                </div>
                <div className="pull-right">
                    <ul>
                        <li>Hello, Somchai</li>
                        <li>Twin Types Corporation</li>
                    </ul>
                    <button>V</button>
                </div>
            </div>)
    }
}

export default Header;