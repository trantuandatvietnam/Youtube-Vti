import { LogoIcon, MenuIcon, MicIcon } from '../../../components/Icons/Icons';
import Search from '../Search';
import './Header.module.scss';
const Header = () => {
    return (
        <div className="bg-white">
            <div className="h-header container flex items-center justify-between">
                <div className="flex items-center">
                    <div className="p-[8px]">
                        <MenuIcon />
                    </div>
                    <div className="py-[18px] pr-[14px] pl-[16px] relative">
                        <LogoIcon />
                        <span className="absolute top-[11px] right-[-3.5px] text-[10px] text-[#606060]">
                            VN
                        </span>
                    </div>
                </div>
                <div className="flex items-center">
                    <Search />
                    <div className="p-[8px]">
                        <MicIcon />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
