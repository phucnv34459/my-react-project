import Menu from "./Menu";
import Bia from "./Bia";
import Side from "./Side";
import Title from "./Title";


const Header = () => {
    return (
        <header>
            <Menu />
            <Bia/>
            <Side/>
            <Title/>
        </header>
    );
};

export default Header;