import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
	const players = [
		{
			name: 'George',
			score: 9
		}
	];
	const appComponent = shallow(<App players={[]} />);
	appComponent.setState({ players });

	const onScoreUpdate = appComponent.find(PlayersList).prop('onScoreUpdate');
	onScoreUpdate(0, 3);
	const playersAfterUpdate = appComponent.state().players;

	expect(playersAfterUpdate[0].score).toEqual(12);
});

it('should add new player', () => {
	const appComponent = shallow(<App />);
	appComponent.setState({ players: [] });

	const onAddPlayer = appComponent.find(AddPlayer).prop('onAddPlayer');
	onAddPlayer('Martha');
	const playersAfterAddingPlayer = appComponent.state().players;

	expect(playersAfterAddingPlayer.length).toEqual(1);
	expect(playersAfterAddingPlayer[0].name).toEqual('Martha');
	expect(playersAfterAddingPlayer[0].score).toEqual(0);
});

it('should remove player', () => {
	const players = [
		{
			name: 'John',
			score: 5	
		},
		{
			name: 'Benn',
			score: 0
		},
		{
			name: 'George',
			score: 9
		}	
	];
	const appComponent = shallow(<App players={[]} />);
	appComponent.setState({ players });

	const onRemovePlayer = appComponent.find(PlayersList).prop('onRemovePlayer');
	onRemovePlayer(2);
	const playersAfterRemovingPlayer = appComponent.state().players;

	expect(playersAfterRemovingPlayer.length).toEqual(2);
});