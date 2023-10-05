interface Props {
  chidren: string;
  color?: "primary" | "success" | "danger"; // Optional
  onClick: () => void;
}

const Button = ({ chidren, onClick, color = "success" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {chidren}
    </button>
  );
};

export default Button;
