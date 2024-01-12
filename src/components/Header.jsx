import Menu from "./Menu";
import Banner from "./banner";
import Sidebar from "./sidebar";
import Cc from "./cc";


const Header = () => {
    return (
        <header>
            <Menu />
            <Banner/>
            <Sidebar/>
            <Cc/>
            
        </header>
    );
};

export default Header;