import Stats from "../Stats/Stats";
import StopWatch from "../StopWatch/StopWatch";

const Header = ({ players, title }) => {
    return (
        <header>
            <Stats players={players} />
            <h1>{title}</h1>
            <StopWatch />
        </header>
    );
}

export default Header
