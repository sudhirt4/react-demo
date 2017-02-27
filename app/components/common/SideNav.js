import UserGreeting from '../utils/UserGreeting';

class SideNav extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.closeSideNav = this.closeSideNav.bind(this);
    }

    closeSideNav(event) {
        event.preventDefault();
        if (document && document.body) {
            document.body.className = document.body.className.replace(/ ?side-nav-open/, '');
        }
    }

    render() {
        return (
            <div className="side-nav">
                <div className="side-nav-content">
                    <div className="logo">
                        nimbl3
                    </div>
                    <div className="visible-xs visible-sm">
                        <UserGreeting user={this.props.loggedInUser}/>
                    </div>
                    <ul className="side-nav-list">
                        <li>
                            <a href="#">
                                <i className="icon icon-controls-purple" alt="Dashboard"></i>
                                Dashboard
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">
                                <i className="icon icon-shopping-cart-purple" alt="Orders"></i>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-factory-purple" alt="Companies"></i>
                                Companies
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-box-purple" alt="Products"></i>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-document-purple" alt="Documents"></i>
                                Documents
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-pricing-label-purple" alt="Pricing"></i>
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-shapes-purple" alt="Brands"></i>
                                Brands
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-gear-purple" alt="Settings"></i>
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-chart-purple" alt="Reports"></i>
                                Reports
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon icon-people-purple" alt="Account Users"></i>
                                Account Users
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="side-nav-footer">
                    Powered By
                    <span>nimbl3</span>
                </div>
                <div className="side-nav-overlay" onClick={this.closeSideNav}></div>
            </div>)
    }
}

export default SideNav;