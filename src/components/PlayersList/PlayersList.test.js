import React from 'react';
import { shallow } from 'enzyme';
import PlayersList from './PlayersList';
import Player from '../Player/Player';

it('renders without crashing', () => {
	shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
	const players = [
		{
			name: 'John',
			score: 5	
		},
		{
			name: 'Benn',
			score: 0
		}
	];
	const playersListComponent = shallow(<PlayersList players={players} />);
	//console.log(playersListComponent.debug());

	const expectedPlayersNumber = playersListComponent.find(Player).length;

	expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate when onPlayerScoreChange in Player component is called', () => {
	const players = [
		{
			name: 'John',
			score: 5	
		},
		{
			name: 'Benn',
			score: 0
		}	
	];
	const mockedOnScoreUpdate = jest.fn();
	const playersListComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);

	const firstPlayer = playersListComponent.find(Player).first();
	const onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
	onPlayerScoreChange(10);

	expect(mockedOnScoreUpdate).toBeCalledWith(0, 10);
});

it('should call onRemovePlayer with Player index', () => {
	const players = [
		{
			name: 'John',
			score: 5	
		},
		{
			name: 'Benn',
			score: 0
		}	
	];
	const mockedOnRemovePlayer = jest.fn();
	const playersListComponent = shallow(<PlayersList players={players} onRemovePlayer={mockedOnRemovePlayer} />);

	const secondPlayer = playersListComponent.find(Player).at(1);
	const onRemovePlayer = secondPlayer.prop('onRemovePlayer');
	onRemovePlayer(1);

	expect(mockedOnRemovePlayer).toBeCalledWith(1);
});