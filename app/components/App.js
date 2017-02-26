import SideNav from './common/SideNav';
import Header from './common/Header';
import OrderEdit from './orders/edit';

class App extends React.Component {

    constructor(props,context){
        super(props, context);
    }

    render() {
        const loggedInUser = {
            name: 'Somchai',
            organization: 'TWIN TYPES CORPORATION'
        };
        return (
            <div className="react-demo-wrapper">
                <SideNav loggedInUser={loggedInUser}/>
                <div className="body-wrapper container-fluid">
                    <Header loggedInUser={loggedInUser} />
                    <OrderEdit />
                </div>
                <div className="overlay"></div>
            </div>
        )
    }
}

export default App;