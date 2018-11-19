import React, { Component } from 'react';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			players: [
				{
					name: 'John',
					score: 5	
				},
				{
					name: 'Benn',
					score: 0
				}			
			]
		}
	}

	onAddPlayer(playerName) {
		if (!playerName) {
			alert('Please, enter the name of new player');
		} else {
			const newPlayer = {
				name: playerName,
				score: 0
			};
			this.setState({
				players: [...this.state.players, newPlayer]
			});
		}
	}

	onScoreUpdate(playerIndex, scoreChange) {
		this.setState({
			players: this.state.players.map((player, index) => {
				if (index === playerIndex) {
					return { ...player, score: player.score + scoreChange }
				}
				return player;
			})
		});
	}

	onRemovePlayer(playerIndex) {
		this.setState({
			players: this.state.players.filter((player, index) => index !== playerIndex)
		});
	}

 	render() {
	    return (
	      <div className='App'>
	      	<AddPlayer onAddPlayer={this.onAddPlayer.bind(this)} />
	      	<PlayersList 
	      		players={this.state.players}
	      		onScoreUpdate={this.onScoreUpdate.bind(this)}
	      		onRemovePlayer={this.onRemovePlayer.bind(this)}
	      	/>
	      </div>
	    );
	}
}

export default App;