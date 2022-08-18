import { Link } from 'react-router-dom';
import {
    LogoIcon,
    MenuIcon,
    MicIcon,
    NotifyIcon,
    UploadIcon,
} from '../../../components/Icons/Icons';
import Search from '../Search';
import './Header.module.scss';
const Header = () => {
    return (
        <div className="bg-white fixed top-0 w-full">
            <div className="h-header wrapper flex items-center justify-between">
                <div className="flex items-center">
                    <div className="p-[8px] cursor-pointer">
                        <MenuIcon />
                    </div>
                    <div className="py-[18px] pr-[14px] pl-[16px] relative">
                        <Link className="block" to="/">
                            <LogoIcon />
                        </Link>
                        <span className="absolute top-[11px] right-[-3.5px] text-[10px] text-[#606060]">
                            VN
                        </span>
                    </div>
                </div>
                <Search />
                <div className="flex items-center gap-x-[8px]">
                    <div className="p-[8px] cursor-pointer hidden md:block">
                        <UploadIcon />
                    </div>
                    <div className="p-[8px] cursor-pointer hidden md:block">
                        <NotifyIcon />
                    </div>
                    <div className="p-[8px] cursor-pointer">
                        <img
                            className="h-[32px] w-[32px] rounded-full"
                            src="https://cdn.pixabay.com/photo/2018/10/23/08/18/sexy-girl-3767276__340.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
