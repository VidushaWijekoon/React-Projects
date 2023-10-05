import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const App = () => {
  let items = ["USA", "China", "Index", "Russia", "Germany"];

  const [isShow, setIsShow] = useState(false);

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <>
      <div>
        <ListGroup
          items={items}
          heading={"cities"}
          onSelectItem={handleSelectItem}
        />
      </div>
      {isShow && (
        <Alert onClose={() => setIsShow(false)}>
          Warning
          <span>Alert</span>
        </Alert>
      )}
      <Button color="danger" onClick={() => setIsShow(true)}>
        My Button
      </Button>
    </>
  );
};

export default App;
