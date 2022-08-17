export interface VideoType {
    contentDetails: {
        videoId: string
    },
    etag: string,
    id: string,
    kind: string,
    snippet: Snippet;
}

interface Snippet {
    thumbnails: {
        maxres: {
            url: string
        }
    }
    title: string;
    videoOwnerChannelTitle: string;
}

export interface IVideoList {
    videoList: VideoType[];
}