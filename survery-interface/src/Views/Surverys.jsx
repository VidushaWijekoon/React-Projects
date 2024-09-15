import { PlusCircleIcon } from "@heroicons/react/24/outline";
import TButton from "../Components/Core/TButton";
import PageComponent from "../Components/PageComponent";
import SurveysListItem from "../Components/SurveysListItem";
import { useStateContext } from "../Context/ContextProvider";

const Surverys = () => {
    const { surveys } = useStateContext();
    console.log(surveys);

    const onClick = () => {
        console.log("On Delete Click");
    };
    return (
        <PageComponent
            title="All Surverys"
            button={
                <TButton
                    className="green"
                    to="/survey/create"
                >
                    <PlusCircleIcon className="h-6 w-6 p-0 mr-2" />
                </TButton>
            }
        >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveysListItem
                        survery={survey}
                        key={survey.id}
                        onClick={onClick}
                    />
                ))}
            </div>
        </PageComponent>
    );
};

export default Surverys;
