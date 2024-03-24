interface Props {
    text: string;
    onClick?: (e: any) => void; // Change type of e
}

function ActionButton({ text, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            className="btn btn-primary action-button rounded-full bg-primary border-none hover:bg-accent w-full"
        >
            {text}
        </button>
    );
}

export default ActionButton;
