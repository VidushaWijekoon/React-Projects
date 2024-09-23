import CommonInput from "../common-inputs/CommonInput";

const formTypes = {
    INPUT: "input",
    SELECT: "select",
    TEXTAREA: "textarea",
};

const CommonForm = ({
    formControls = [],
    formData,
    setFormData,
    buttonText,
    onHandleSubmit,
}) => {
    const renderFormElement = (getCurrentELement) => {
        let content = null;
        switch (getCurrentELement?.componentType) {
            case formTypes.INPUT:
                content = (
                    <CommonInput
                        type={getCurrentELement.type}
                        label={getCurrentELement.label}
                        name={getCurrentELement.name}
                        id={getCurrentELement.id}
                        placeholder={getCurrentELement.placeholder}
                        value={formData[getCurrentELement.name]}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [event.target.name]: event.target.value,
                            })
                        }
                    />
                );
                break;

            default:
                content = (
                    <CommonInput
                        type={getCurrentELement.type}
                        label={getCurrentELement.label}
                        name={getCurrentELement.name}
                        id={getCurrentELement.id}
                        placeholder={getCurrentELement.placeholder}
                        value={formData[getCurrentELement.name]}
                        onChange={(event) =>
                            setFormData({
                                ...formData,
                                [event.target.name]: event.target.value,
                            })
                        }
                    />
                );
                break;
        }
        return content;
    };

    return (
        <form action="" onSubmit={onHandleSubmit}>
            {formControls?.length
                ? formControls.map((singleFormElementItem) =>
                      renderFormElement(
                          singleFormElementItem,
                          formData,
                          setFormData
                      )
                  )
                : null}
            <div style={{ marginTop: "12px" }}>
                <button type="submit">{buttonText || "Submit"}</button>
            </div>
        </form>
    );
};

export default CommonForm;
