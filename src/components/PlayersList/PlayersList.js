import React from 'react';
import Player from '../Player/Player';
import './PlayersList.css';

const PlayersList = props => (
	<ul className='PlayersList'>
		{props.players.map((player, index) => (
			<Player 
				key={index}
				name={player.name}
				score={player.score}
				onPlayerScoreChange={points => props.onScoreUpdate(index, points)}
				onRemovePlayer={() => props.onRemovePlayer(index)}
			/>)
		)}
	</ul>
);

export default PlayersList;