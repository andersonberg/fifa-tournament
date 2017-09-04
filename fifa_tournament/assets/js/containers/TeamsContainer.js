import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:8000/teams/')
      .then((res) => {
        const teams = res.data;
        this.setState({ teams });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    // console.log(this.state.teams.map(team => (team.name + team.id)));
    // console.log(event.target.value);
    // this.setState({ value: event.target.value });
  }

  handleInputChange(event) {
    const target = event.target;
    let newTeamsList;

    if (target.type === 'checkbox') {
      const teamName = target.value;
      if (this.state.selectedTeams.indexOf(teamName) > -1) {
        newTeamsList = this.state.selectedTeams.filter(team => team.name !== teamName);
      } else {
        newTeamsList = [...this.state.selectedTeams, teamName];
      }
    } else {
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      });
    }

    this.setState({ selectedTeams: newTeamsList });
  }


  render() {
    return (
      <div className="container">
        <form id="select_teams" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-sm-6">
              <h2>Selecione os times</h2>
              {this.state.teams.map(team =>
                (<div key={team.id} className="checkbox-group">
                  <label key={team.id} className="form-check-label" htmlFor={team.id}>
                    <input
                      type="checkbox"
                      name="team"
                      id={team.id}
                      key={team.id}
                      value={team.name}
                      onChange={this.handleInputChange}
                    />
                    {team.name}
                  </label></div>),
              )}
            </div>
            <div className="checkbox-group col-sm-6">
              <h2>Jogadores</h2>
              <div>
                <input
                  type="text"
                  name="player1"
                  id="player1"
                  value={this.state.player1}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="player2"
                  id="player2"
                  value={this.state.player2}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="player3"
                  id="player3"
                  value={this.state.player1}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="player4"
                  id="player4"
                  value={this.state.player1}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="player5"
                  id="player5"
                  value={this.state.player1}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="player6"
                  id="player6"
                  value={this.state.player1}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="player7"
                  id="player7"
                  value={this.state.player1}
                  onChange={this.handleInputChange}
                />
              </div>
              <div>
                <input
                  type="text"
                  name="player8"
                  id="player8"
                  value={this.state.player1}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <div className="row form-group offset-sm-5 col-sm-12">
            <button className="btn btn-primary" type="submit">
              Próximo
              </button>
          </div>
        </form>
      </div>
    );
  }
}
