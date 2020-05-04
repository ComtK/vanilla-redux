import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../store';
import { Link } from 'react-router-dom';

function ToDo({id, text, onBtnClick}) {
    return (
        <li id={id}>
            <Link to={`/${id}`}>{text}</Link>
            <button onClick={onBtnClick}>DEL</button>
        </li>
    )
}

function mapDispatchToprops(dispatch, ownProps){
    return {
        onBtnClick: () => dispatch(remove(ownProps.id))
    };
}


export default connect(null, mapDispatchToprops) (ToDo);
