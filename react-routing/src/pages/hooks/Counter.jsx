const Counter = ({ countValue, onClick }) => {
    console.log(countValue);
    console.log(onClick);
    return (
        <div>
            <h1>Counter</h1>
            <p>{countValue}</p>
            <button onClick={onClick}>Click Here</button>
        </div>
    );
};

export default Counter;
