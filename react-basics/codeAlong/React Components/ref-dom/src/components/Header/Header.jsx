import Stats from "../Stats/Stats";
import StopWatch from "../StopWatch/StopWatch";
import PropTypes from "prop-types";

const Header = ({ players, title }) => {
    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <StopWatch />
        </header>
    );
}

Header.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Scoreboard"
};

export default Header
