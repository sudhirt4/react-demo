import UserGreeting from '../utils/UserGreeting';

class Header extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
          searchActive: false
        };

        this.toggleSearch = this.toggleSearch.bind(this);
        this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    toggleSideNav(event) {
        event.preventDefault();
        if (document && document.body) {
            let orig = document.body.className;
            document.body.className = orig + (orig ? ' ' : '') + 'side-nav-open';
        }
    }

    toggleSearch(event) {
        event.preventDefault();
        this.setState(prevState => ({
            searchActive: !prevState.searchActive
        }));
        setTimeout(()=> {
            this.searchInput.focus();
        }, 50);
    }

    render() {
        return (
            <header>
                <form className={"header-search " + (this.state.searchActive ? 'search-active' : '')}>
                    <a href="#" className="header-back-button" onClick={this.toggleSideNav}>
                        <img src={require('../../../assets/icons/arrow-purple.svg')}/>
                    </a>
                    <button type="submit" href="#" className="header-search-icon" onClick={this.toggleSearch}>
                        <img src={require('../../../assets/icons/magnifying-glass.svg')}/>
                    </button>
                    <span>Edit ORD07070707</span>
                    <input type="text" placeholder="Search here" ref={(input)=> {this.searchInput = input;}}/>
                </form>
                <div className="header-options hidden-xs hidden-sm">
                    <UserGreeting user={this.props.loggedInUser} />
                    <button>
                        <img src={require('../../../assets/icons/arrow-grey.svg')}/>
                    </button>
                </div>
            </header>)
    }
}

export default Header;