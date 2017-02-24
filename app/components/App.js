import SideNav from './SideNav';
import Main from './Main';

class App extends React.Component {

    constructor(props,context){
        super(props, context);
    }

    render() {
        return (
            <div className="container-fluid">
                <h1>Hello</h1>
                <img src={require("../../assets/icons/logo-white.svg")}/>
                <SideNav/>
                <Main/>
            </div>
        )
    }
}

export default App;