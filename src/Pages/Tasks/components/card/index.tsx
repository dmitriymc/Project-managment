import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {bindActionCreators} from 'redux'

import './style.scss'

type card = {
    addProject: Function;
    getProjects: Function;
    currentProject: number;
    loading: boolean;
}

type card_state = {

}

class Card extends React.Component<card, card_state>  {

    state = {

    }

    render(){
        return(
            <div></div>
            )
    }
  
}

const mapStateToProps = (state:any) => {
    return {
        projects: state.projects.projects,
        currentProject: state.main.currentProject,
        loading: state.projects.loading
    }
}

export default connect(mapStateToProps)(Card)