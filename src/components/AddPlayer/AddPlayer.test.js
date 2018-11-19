import React from 'react';
import { shallow, mount } from 'enzyme';
import AddPlayer from './AddPlayer';

it('renders without crashing', () => {
  shallow(<AddPlayer />);
});

it('should call onAddPlayer with passed name', () => {
	const mockedOnAddPlayer = jest.fn();
	const addPlayerComponent = mount(<AddPlayer onAddPlayer={mockedOnAddPlayer} />);

	const nameInput = addPlayerComponent.find('input').first().getDOMNode();
	nameInput.value = 'Martin';
	const form = addPlayerComponent.find('form');
	form.simulate('submit');

	expect(mockedOnAddPlayer).toBeCalledWith('Martin');
});