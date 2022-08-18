import { useLocation } from 'react-router-dom';

function Watch() {
    const search = useLocation().search;
    const videoId = new URLSearchParams(search).get('v');
    return (
        <div className="h-[660px] w-full max-w-[1200px] p-[24px] mx-auto mt-[56px]">
            <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>
    );
}

export default Watch;
