import PageComponent from "../Components/PageComponent";
import SurveysListItem from "../Components/SurveysListItem";
import { useStateContext } from "../Context/ContextProvider";

const Surverys = () => {
    const { surveys } = useStateContext();
    console.log(surveys);

    const onDeleteClick = () => {
        console.log("On Delete Click");
    };
    return (
        <PageComponent title={Surverys}>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {surveys.map((survey) => (
                    <SurveysListItem
                        survery={survey}
                        key={survey.id}
                        onClick={onDeleteClick}
                    />
                ))}
            </div>
        </PageComponent>
    );
};

export default Surverys;
