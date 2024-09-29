const Main = ({ name, city, position, children }) => {
    return (
        <div>
            <h1>This is main Component</h1>
            <ul>
                <li>{name}</li>
                <li>{city}</li>
                <li>{position}</li>
            </ul>
            {children}
        </div>
    );
};

export default Main;
