import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  //   const hanldeClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No Items Founds</p> : null} */}
      {items.length === 0 && <p>No Items Founds</p>}
      <ul className="list-group">
        {items.map((e, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={e}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(e);
            }}
          >
            {e}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
