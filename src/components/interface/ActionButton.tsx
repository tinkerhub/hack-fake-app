interface Props {
    text: string;
}

function ActionButton({ text }: Props) {
    return (
        <button className="btn btn-primary action-button rounded-full bg-primary border-none hover:bg-accent w-full">
            {text}
        </button>
    );
}

export default ActionButton;
