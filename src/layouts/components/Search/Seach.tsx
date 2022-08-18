import { ChangeEvent, useRef, useState } from 'react';
import keyboardIcon from '../../../assets/imgs/keyboardIcon.gif';
import Button from '../../../components/Button';
import { MicIcon, SearchIcon } from '../../../components/Icons';

const Seach = () => {
    // https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=f8&key=[YOUR_API_KEY]
    const [searchValues, setSearchValues] = useState<string>('');
    // let timer = useRef<any>(null);
    const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
        const currentValues = e.target.value;
        setSearchValues(currentValues);

        // timer.current = setTimeout(() => {
        //     if (timer.current) {
        //         clearTimeout(timer.current);
        //         return;
        //     }
        //     console.log(123);
        // }, 300);
    };
    return (
        <div className="hidden md:flex items-center">
            <div className="flex items-center h-[40px] pr-[2px] px-[6px] w-full md:w-[322px] lg:w-[644px] border border-[#ccc] relative">
                <input
                    onChange={handleChangeValues}
                    className="w-full outline-none rounded-t-[4px] "
                    type="text"
                    placeholder="Tìm kiếm"
                    value={searchValues}
                />
                <div>
                    <img
                        className="pr-[8px]"
                        src={keyboardIcon}
                        alt="keyboard"
                    />
                </div>
                <Button className="bg-[#f8f8f8] h-full w-[64px] border-l flex items-center justify-center">
                    <SearchIcon />
                </Button>
            </div>
            <div className="p-[8px]">
                <MicIcon />
            </div>
        </div>
    );
};

export default Seach;
