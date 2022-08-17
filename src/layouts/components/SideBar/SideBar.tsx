import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../../../components/Icons';

const SideBar = () => {
    return (
        <div className="w-[240px] bg-white h-screen fixed left-0 top-[56px]">
            <div className="mt-[24px]">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `flex items-center gap-x-[8px] px-[24px] py-[8px] cursor-pointer hover:bg-[#e5e5e5] ${
                            isActive ? 'bg-[#e5e5e5]' : ''
                        }`
                    }
                >
                    <HomeIcon />
                    <span>Trang chủ</span>
                </NavLink>
            </div>
        </div>
    );
};

export default SideBar;
