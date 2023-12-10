interface Props {
  text: string;
  selected?: boolean;
  onClick?: () => void;
}

function Chips({ text, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`border-2 border-primary text-sm px-3 py-3 rounded-full ${
        selected ? "bg-primary text-white" : ""
      }`}
    >
      {text}
    </button>
  );
}

export default Chips;
