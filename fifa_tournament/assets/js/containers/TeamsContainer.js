import React from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';
import { browserHistory } from 'react-router';
import TournamentContainer from 'containers/TournamentContainer';


export default class TeamsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: [],
      selectedTeams: [],
      player1: '',
      player2: '',
      player3: '',
      player4: '',
      player5: '',
      player6: '',
      player7: '',
      player8: '',
      formSaved: false,
      partidas_button: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get('/teams/')
      .then((res) => {
        const teams = res.data;
        this.setState({ teams });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    const players = [
      this.state.player1,
      this.state.player2,
      this.state.player3,
      this.state.player4,
      this.state.player5,
      this.state.player6,
      this.state.player7,
      this.state.player8];

    let submitPlayer;
    for (submitPlayer in players) {
      axios.post('/players/create/', { name: submitPlayer });
    }

    for (const teamKey in this.state.selectedTeams) {
      const currentTeam = this.state.selectedTeams[teamKey];
      axios.put(`/teams/update/${currentTeam.id}/`, { name: currentTeam.name, selected: true });
    }

    axios.post('/tournaments/create/', { name: 'Torneio 1' })
    .then((response) => {
      console.log(response);
    });

    this.setState({ formSaved: true, partidas_button: true });

    // console.log(this.state.teams.map(team => (team.name + team.id)));
    // console.log(event.target.value);
    // this.setState({ value: event.target.value });
    // this.setState({ fireRedirect: true });
    // this.props.history.push("/partidas");
  }

  handleInputChange(event) {
    const target = event.target;
    let newTeamsList;

    if (target.type === 'checkbox') {
      const teamId = parseInt(target.id, 10);
      const selectedTeam = this.state.teams.find(team => team.id === teamId);
      if (this.state.selectedTeams.indexOf(selectedTeam) > -1) {
        newTeamsList = this.state.selectedTeams.filter(team => team !== selectedTeam);
      } else {
        newTeamsList = [...this.state.selectedTeams, selectedTeam];
      }
      this.setState({ selectedTeams: newTeamsList });
    } else {
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    }
  }


  render() {
    // const { from } = this.props.location.state || '/';
    // const { fireRedirect } = this.state;

    // if (fireRedirect) {
    //   return (
    //     <Redirect to={from || '/partidas'} />
    //   );
    // }

    return (
      <div className="container">
        <div className="row">
        <div className="col-md-6">
          <form id="select_teams" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <div className="form-check">
                <h2>Selecione os times</h2>
                {this.state.teams.map(team =>
                  (<div key={team.id} className="checkbox-group">
                    <label key={team.id} className="form-check-label" htmlFor={team.id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="team"
                        id={team.id}
                        key={team.id}
                        value={team.name}
                        defaultChecked={team.selected}
                        onChange={this.handleInputChange}
                      />
                      {team.name}
                    </label></div>),
                )}
              </div>
              <div className="form-group">
                <h2>Jogadores</h2>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="player1"
                    id="player1"
                    value={this.state.player1}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="player2"
                    id="player2"
                    value={this.state.player2}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="player3"
                    id="player3"
                    value={this.state.player3}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="player4"
                    id="player4"
                    value={this.state.player4}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="player5"
                    id="player5"
                    value={this.state.player5}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="player6"
                    id="player6"
                    value={this.state.player6}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="player7"
                    id="player7"
                    value={this.state.player7}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="player8"
                    id="player8"
                    value={this.state.player8}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="row form-group offset-sm-5 col-sm-12">
              <button className="btn btn-primary" type="submit" id="save-form">
                Salvar
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h3>Partidas</h3>
          {/* <Router>
            <div>
              {this.state.partidas_button
                ? <Link id="matches-link" to="/partidas">Exibir Partidas</Link> : null}
              <Route path="/partidas" component={TournamentContainer} />
            </div>
          </Router> */}
        </div>
        </div>
      </div>
    );
  }
}
