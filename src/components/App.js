import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';
import { connect } from 'react-redux';
import { set } from '../store';

class App extends React.Component {
    componentDidMount() {
        this.props.setToDo();
    }
    
    render(){
        return (
            <Router>
                <Route path="/" exact component={Home}></Route>
                <Route path="/:id" exact component={Detail}></Route>
            </Router>
        )
    }
}

function mapDispatchToprops(dispatch, ownProps){
    return {
       setToDo: () => dispatch(set())
    }
}

export default connect (null, mapDispatchToprops) (App);
