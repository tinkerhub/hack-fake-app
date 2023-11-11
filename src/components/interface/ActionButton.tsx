interface Props {
    text: string;
}

function ActionButton({ text }: Props) {
    return (
        <button className="btn btn-primary bg-primary border-none hover:bg-accent normal-case w-full">
            {text} &rarr;
        </button>
    );
}

export default ActionButton;
