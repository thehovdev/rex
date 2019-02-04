import React from 'react';
import ReactDOM from 'react-dom';

class HomeComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {team: false, actionbuttons: true};
        }

    backButton() {
        this.setState({
            team: false,
            actionbuttons: true
        });
    }

    joinTeam() {
        this.setState({
            team: 'join',
            actionbuttons: false
        });
    }

    createTeam() {
        this.setState({
            team: 'create',
            actionbuttons: false
        });
    }

    render() {
        return <div className="action-form">
                    <div className={this.state.actionbuttons == false ? 'hidden' : ''}>
                        <button onClick={this.joinTeam.bind(this)} type="submit" className="btn btn-success btn-company">Join Team</button>
                        <button onClick={this.createTeam.bind(this)} type="submit" className="btn btn-success btn-company">Create Team</button>
                    </div>

                    <form action="/team/join" className={this.state.team == 'join' ? '' : 'hidden'}>
                        <h1>Join Team</h1>
                        <div className="form-group">
                            <label htmlFor="teamname">Team Name:</label>
                            <input type="text" className="form-control" placeholder="Enter team name" name="teamname" autoComplete="teamname"/>
                        </div>

                        <button type="submit" className="btn btn-default">Submit</button>
                        <button onClick={this.backButton.bind(this)} type="button" className="btn btn-default">Back</button>
                    </form>

                    <form action="/team/create" method="POST" className={this.state.team == 'create' ? '' : 'hidden'}>
                        <h1>Create Team</h1>
                        <div className="form-group">
                            <label htmlFor="teamname">Team Name:</label>
                            <input defaultValue="Beylitech" type="text" className="form-control" placeholder="Enter team name" name="teamname" autoComplete="teamname"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input defaultValue="hov-dev@protonmail.ch" type="email" className="form-control" placeholder="Enter email" name="email" autoComplete="email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input defaultValue="root" type="password" className="form-control" placeholder="Enter password" name="password" autoComplete="password" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                        <button onClick={this.backButton.bind(this)} type="button" className="btn btn-default">Back</button>
                    </form>
                </div>;
    }
}

ReactDOM.render(<HomeComponent />, document.getElementById('root'));

export default HomeComponent;