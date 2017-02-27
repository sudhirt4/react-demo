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
                        <i className="icon icon-arrow-purple" alt="Back"></i>
                    </a>
                    <button type="submit" className="header-search-icon" onClick={this.toggleSearch}>
                        <i className="icon icon-magnifying-glass" alt="Search"></i>
                    </button>
                    <span>Edit ORD07070707</span>
                    <input type="text" placeholder="Search here" ref={(input)=> {this.searchInput = input;}}/>
                </form>
                <div className="header-options hidden-xs hidden-sm">
                    <UserGreeting user={this.props.loggedInUser} />
                    <button>
                        <i className="icon icon-arrow-purple" alt="User options"></i>
                    </button>
                </div>
            </header>)
    }
}

export default Header;