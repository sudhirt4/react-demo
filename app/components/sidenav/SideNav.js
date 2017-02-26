import UserGreeting from '../common/UserGreeting';

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
                        <UserGreeting/>
                    </div>
                    <ul className="side-nav-list">
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/controls-purple.svg')}/>
                                Dashboard
                            </a>
                        </li>
                        <li className="active">
                            <a href="#">
                                <img src={require('../../../assets/icons/shopping-cart-purple.svg')}/>
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/factory-purple.svg')}/>
                                Companies
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/box-purple.svg')}/>
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/document-purple.svg')}/>
                                Documents
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/pricing-label-purple.svg')}/>
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/shapes-purple.svg')}/>
                                Brands
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/gear-purple.svg')}/>
                                Settings
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/chart-purple.svg')}/>
                                Reports
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={require('../../../assets/icons/people-purple.svg')}/>
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