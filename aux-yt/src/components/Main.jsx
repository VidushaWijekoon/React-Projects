const Main = ({ name, city, position, image }) => {
    return (
        <div>
            <img
                src={
                    image
                        ? `${image}`
                        : "https://img.etimg.com/thumb/width-1200,height-900,imgsize-60214,resizemode-75,msid-107428058/top-trending-products/gifts/teddy-day-gift-ideas-adorable-ways-to-express-your-love.jpg"
                }
                alt=""
            />
            <div className="mainBlock__details">
                <h3>{!name ? "Name Not Found" : name}</h3>
                <p>
                    <span>{!city ? "City Not Found" : city}</span>
                    <span>{position ? position : "Position Not Found"}</span>
                </p>
            </div>
        </div>
    );
};

export default Main;
