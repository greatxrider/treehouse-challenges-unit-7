import Counter from "../Counter/Counter";
import { memo } from 'react';
import PropTypes from 'prop-types';

const Player = ({ name, removePlayer, id, score, changeScore }) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                {name}
            </span>
            <Counter score={score} changeScore={changeScore} id={id} />
        </div>
    );
}

const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score;
}

Player.propTypes = {
    name: PropTypes.string,
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
}

export default memo(Player, playerPropsAreEqual);
