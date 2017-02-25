import SideNav from './sidenav/SideNav';
import Header from './header/Header';
import OrderEdit from './orders/edit';

class App extends React.Component {

    constructor(props,context){
        super(props, context);
    }

    render() {
        return (
            <div className="react-demo-wrapper">
                <SideNav/>
                <div className="body-wrapper container-fluid">
                    <Header/>
                    <OrderEdit/>
                </div>
            </div>
        )
    }
}

export default App;