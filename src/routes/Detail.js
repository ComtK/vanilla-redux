import React from 'react'
import { connect } from 'react-redux';

function Detail({toDo}) {
    return (
        <div>
            <h1>
            {toDo?.text}
            </h1>
            <h5>Craete at: {toDo?.id}</h5>
        </div>
    )
}

function mapStateToprops(state, ownProps){
    const {match: {params: {id}}} = ownProps;

    return {toDo: state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToprops, null) (Detail);