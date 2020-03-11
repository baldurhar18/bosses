import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Home from './Home';
import Bosses from './Bosses/';
import BossDetails from './BossDetails/';
import { getBosses } from '../actions/bossActions';

class App extends React.Component {
    componentDidMount() {
        this.props.getBosses()
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="app-container">
                    <Switch>
                        <Route exact path="/" component={ Home }/>
                        <Route exact path="/bosses" render={() => <Bosses bosses={this.props.bosses}/>}/>
                        <Route exact path="/bosses/:bossId" component={ BossDetails }/>
                    </Switch>
                </div>
            </>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        bosses: state.bosses
    }
}

export default connect(mapStateToProps, { getBosses })(App);
