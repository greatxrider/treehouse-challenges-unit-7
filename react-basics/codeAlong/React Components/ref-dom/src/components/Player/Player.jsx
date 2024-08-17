import Counter from "../Counter/Counter";
import { memo } from 'react';
import Icon from "../Icon/Icon";
import PropTypes from 'prop-types';

const Player = ({ name, removePlayer, id, score, changeScore, isHighScore }) => {
    return (
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
                <Icon isHighScore={isHighScore} />
                {name}
            </span>
            <Counter score={score} changeScore={changeScore} id={id} />
        </div>
    );
}

const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score && prevProps.isHighScore === nextProps.isHighScore;
}

Player.propTypes = {
    name: PropTypes.string,
    removePlayer: PropTypes.func,
    id: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func,
    isHighScore: PropTypes.bool
}

export default memo(Player, playerPropsAreEqual);
