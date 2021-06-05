import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Join from './component/Join/Join';
import Main from './component/Main/Main';
import SignUp from './component/SignUp/SignUp';

const App = () =>{
    return (
        <Router>
            <Route path="/" exact component={Join}></Route>
            <Route path="/signup" exact component={SignUp}></Route>
            <Route path="/main" exact component={Main}></Route>
        </Router>
    )
}

export default App;