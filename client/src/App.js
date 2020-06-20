import React from 'react';
import './App.css';
import UsersTable from './components/UsersTable'
import Navbar from './components/AppNavbar'
import Heading from './components/Heading'
import { Provider } from 'react-redux'
import store from './store'

function App() {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <Heading />
                <UsersTable />
            </div>
        </Provider>
    );
}


export default App;
