import { Link } from 'react-router-dom';
import avatar from '../../assets/imgs/avatar.jpg';
import { IVideoCard } from './VideoCard.model';

function VideoCard({ imgURL, title, playlists, videoId }: IVideoCard) {
    return (
        <Link
            to={`/watch?v=${videoId}`}
            className="px-[8px] py-[4px] cursor-pointer block"
        >
            <div className="mb-[12px]">
                <img src={imgURL} alt="" />
            </div>
            <div className="flex items-start gap-x-4">
                <div className="w-[36px]">
                    <img src={avatar} alt="" />
                </div>
                <div className="">
                    <h3 className="text-[1.6rem] leading-[2.2rem] font-semibold two-line-clamp">
                        {title}
                    </h3>
                    <div className="flex flex-col text-[1.4rem] text-[#606060]">
                        <span className="one-line-clamp">
                            Playlist: {playlists}
                        </span>
                        <span>491 N lượt xem</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default VideoCard;
