import React from 'react';
import { connect } from 'react-redux';
import { createBoss } from '../../actions/bossActions';

class NewBoss extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            description: '',
            img: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBoss(this.state);
    }
    
    render() {
        return(
            <div className="create-form">
                <h1>Create new Boss here!</h1>
                <h3>Fill in the form, all inputs are required!</h3>
                <form onSubmit={this.handleSubmit}>
                    <input className="create-input" type="text" id="name" placeholder="Enter a name..." onChange={this.handleChange} required/>
                    <input className="create-input" type="text" id="description" placeholder="Enter a description..." onChange={this.handleChange} required/>
                    <input className="create-input" type="text" id="img" placeholder="Enter an image url..." onChange={this.handleChange} required/>
                    <button className="create-btn">Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBoss: (boss) => dispatch(createBoss(boss))
    }
}

export default connect(null, mapDispatchToProps)(NewBoss);