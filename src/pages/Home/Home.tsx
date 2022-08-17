import axios from 'axios';
import { useEffect, useState } from 'react';
import VideoList from '../../components/VideoList';
import { VideoType } from '../../components/VideoList/VideoList.model';

function Home() {
    const [videoList, setVideoList] = useState<VideoType[]>([]);

    useEffect(() => {
        (async function getVideoList() {
            const result = await axios.get(
                `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=16&playlistId=PLlS8o6i35_2qIyv-GBYS3rXm3hrUnCkd4&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
            );
            setVideoList(result.data.items);
        })();
    }, []);

    return (
        <div className="pl-[240px] pt-[56px] w-full">
            <VideoList videoList={videoList} />
        </div>
    );
}

export default Home;
