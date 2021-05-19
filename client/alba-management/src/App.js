import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Join from './component/Join/Join';

const App = () =>{
    return (
        <Router>
            <Route path="/" exact component={Join}></Route>
        </Router>
    )
}

export default App;