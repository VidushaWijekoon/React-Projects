import { useState } from "react";

const FormComponent = () => {
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    // const handleInputChange = (event) => {
    //     setNameValue(event.target.value);
    // };

    // const handleEmailChange = (event) => {
    //     setEmailValue(event.target.value);
    // };

    const handleOnChange = (event) => {
        console.log(event.target.value);

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    console.log(formData);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <h1>Form Component</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    placeholder="Please Enter Name"
                    onChange={handleOnChange}
                />
                <input
                    type="emial"
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="Please Enter Email Address"
                    onChange={handleOnChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormComponent;
