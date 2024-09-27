import { useForm } from "react-hook-form";

const ReactHookFormPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmitForm = (formData) => {
        console.log(formData);

        reset();
    };

    return (
        <div>
            <h1>React Hook Form</h1>
            <form action="" onSubmit={handleSubmit(onSubmitForm)}>
                <div className="">
                    <label htmlFor="email">Email</label>
                    <input
                        {...register("email", { required: true })}
                        type="email"
                    />
                    {errors.email && errors.email.type === "required" ? (
                        <p style={{ color: "red", margin: "20px" }}>
                            Please Enter Valid Email Address
                        </p>
                    ) : null}
                    <label htmlFor="password">Password</label>
                    <input
                        {...register("password", {
                            required: true,
                            minLength: 6,
                        })}
                        type="password"
                    />
                    {errors.password && errors.password.type === "required" ? (
                        <p style={{ color: "red", margin: "20px" }}>
                            Password field is required
                        </p>
                    ) : null}
                    {errors.password && errors.password.type === "minLength" ? (
                        <p style={{ color: "red", margin: "20px" }}>
                            Password required minimum 6 characters long{" "}
                        </p>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReactHookFormPage;
