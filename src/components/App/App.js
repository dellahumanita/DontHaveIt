import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Search from '../Search/Search';
import Login from '../Login/Login';
import MySubs from '../MySubs/MySubs';
import Header from '../Header'
import Footer from '../Footer'

function App() {
    const [token, setToken] = useState();

    // if (!token) {
    //     return <Login setToken={setToken} />
    // }
    
    return (

        <div className="wrapper">
            <BrowserRouter>
            <Header />
                <Switch>
                    <Route path="/Search">
                        <Search />
                    </Route>
                    <Route path="/MySubs">
                        <MySubs/>
                    </Route>
                </Switch>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;