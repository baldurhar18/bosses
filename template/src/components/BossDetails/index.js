import React from 'react'
import { connect } from 'react-redux';
import { updateBoss } from '../../actions/bossActions';
import { deleteBoss } from '../../actions/bossActions';
import { bindActionCreators } from 'redux';

class BossDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            id: '',
            name: '',
            description: '',
            img: ''
        }
    }
    handleDelete = () => {
        this.props.deleteBoss(this.props.boss.id);
        this.props.history.push('/bosses');
    }
    handleChange = (e) => {
        this.setState({
            id: this.props.boss.id,
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateBoss(this.state);
    }
    render() {
        return(
            <div className="boss-container-UD">
                <div>
                <h1>{ this.props.boss.name }</h1></div>
                <div>
                <img className="boss-img-UD" src={this.props.boss.img} alt={this.props.boss.name}/></div>
                <div>
                <h4>{ this.props.boss.description }</h4></div>
            
                <div className="form-container">
                    <br></br>
        <h2>Here you can update {this.props.boss.name}</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" id="name" placeholder="Enter name" onChange={this.handleChange}/>
                        <input type="text" id="description" placeholder="Enter description" onChange={this.handleChange}/>
                        <input type="text" id="img" placeholder="Enter image URL" onChange={this.handleChange}/>
                        <button>Update boss</button>
                    </form>
                </div>
                <div>
                    <button className="delete-boss-btn" onClick={this.handleDelete}>Delete boss</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = Number(ownProps.match.params.bossId);
    return {
        boss: state.bosses.find(boss => boss.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ updateBoss, deleteBoss}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BossDetails);