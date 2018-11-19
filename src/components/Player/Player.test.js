import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders without crashing', () => {
  shallow(<Player />);
});

it('renders correct name', () => {
	const playerNamePassed = 'Ana';
	const playerComponent = shallow(<Player name={playerNamePassed} />);

	const playerNameRendered = playerComponent.find('.Player__name').text();

	expect(playerNameRendered).toEqual(playerNamePassed);
});

it('renders correct score', () => {
	const playerScorePassed = 5;
	const playerComponent = shallow(<Player score={playerScorePassed} />);

	const playerScoreRendered = Number(playerComponent.find('.Player__score').text());

	expect(playerScoreRendered).toEqual(playerScorePassed);
});

it('should call onPlayerScoreChange with 1 when plus button is clicked', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

	const plusButton = playerComponent.find('.Player__button').first();
	plusButton.simulate('click');

	expect(mockedOnPlayerScoreChange).toBeCalledWith(1);
});


it('should call onPlayerScoreChange with -1 when minus button is clicked', () => {
	const mockedOnPlayerScoreChange = jest.fn();
	const playerComponent = shallow(<Player onPlayerScoreChange={mockedOnPlayerScoreChange} />);

	const minusButon = playerComponent.find('.Player__button').at(1);
	minusButon.simulate('click');

	expect(mockedOnPlayerScoreChange).toBeCalledWith(-1);
});

it('should call onRemovePlayer when Remove Player button is clicked', () => {
	const mockedOnRemovePlayer = jest.fn();
	const playerComponent = shallow(<Player onRemovePlayer={mockedOnRemovePlayer} />);

	const removeButon = playerComponent.find('button');
	removeButon.simulate('click');

	expect(mockedOnRemovePlayer).toBeCalled();
});