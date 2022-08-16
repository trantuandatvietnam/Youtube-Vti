import React from 'react';
import Button from '../../../components/Button';
import { SearchIcon } from '../../../components/Icons';
import keyboardIcon from '../../../assets/imgs/keyboardIcon.gif';

const Seach = () => {
    return (
        <div className="max-w-[644px] w-full">
            <input type="text" placeholder="Tìm kiếm" />
            <Button>
                <SearchIcon />
            </Button>
            <img src={keyboardIcon} alt="keyboard" />
        </div>
    );
};

export default Seach;
