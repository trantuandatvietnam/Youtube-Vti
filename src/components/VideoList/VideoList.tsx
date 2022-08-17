import VideoCard from '../VideoCard';
import { IVideoList, VideoType } from './VideoList.model';

function VideoList(props: IVideoList) {
    return (
        <div className="content grid grid-cols-4 bg-[#f9f9f9] pt-[24px]">
            {props.videoList.map((video: VideoType) => (
                <VideoCard
                    key={video.id}
                    imgURL={video.snippet.thumbnails.maxres?.url}
                    title={video.snippet.title}
                    playlists={video.snippet.videoOwnerChannelTitle}
                    videoId={video.contentDetails.videoId}
                />
            ))}
        </div>
    );
}

export default VideoList;
