const CommonInput = ({
    label,
    onChange,
    name,
    id,
    value,
    placeholder,
    type,
}) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type || "text"}
                id={id}
                placeholder={placeholder || "Please Enter Valid Data"}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>
    );
};

export default CommonInput;
