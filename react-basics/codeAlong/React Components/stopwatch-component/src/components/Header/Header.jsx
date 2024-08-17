import Stats from "../Stats/Stats";
import StopWatch from "../StopWatch/StopWatch";

const Header = (props) => {
    return (
        <header>
            <Stats players={props.players} />
            <h1>{props.title}</h1>
            <StopWatch />
        </header>
    );
}

export default Header
