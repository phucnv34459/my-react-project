import Menu from "./Menu";


import Cc from "./cc";
import Bia from "./Bia";
import Side from "./Side";


const Header = () => {
    return (
        <header>
            <Menu />
            <Bia/>
            <Side/>
            <Cc/>
            
        </header>
    );
};

export default Header;