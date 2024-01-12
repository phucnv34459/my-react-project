import Menu from "./Menu";

import Sidebar from "./sidebar";
import Cc from "./cc";
import Bia from "./Bia";


const Header = () => {
    return (
        <header>
            <Menu />
            <Bia/>
            <Sidebar/>
            <Cc/>
            
        </header>
    );
};

export default Header;