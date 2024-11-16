

const Videocard = ({ Info }) => {
    const snippet = Info?.snippet;
    const statistics = Info?.statistics;
    const thumbnails = snippet?.thumbnails?.medium?.url;
    const title = snippet?.title;
    const likeCount = statistics?.likeCount;
    const viewCount = statistics?.viewCount;

    return (
        <div className="m-1 p-2 border-[1px] w-[440px]">
           {/* Display "Ad" label only if Ad prop is true */}
            <div>
                <img className="rounded-lg w-[400px]" alt="thumbnail" src={thumbnails} />
            </div>
            <div>
                <h1 className="font-semibold">{title}</h1>
            </div>
            <div className="flex gap-2">
                <p>Likes: {likeCount}</p>
                <p>Views: {viewCount}</p>
            </div>
        </div>
    );
};


// Higher-order component (HOC) to add Ad properties
export const AdVideocard = (Videocard) => {
    return (props) => {
        return <Videocard {...props} />;
    };
};


export default Videocard
