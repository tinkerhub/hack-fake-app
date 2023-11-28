interface Props {
    text: string;
    type?: any;
    onClick?: (params: any) => any;
    }


function ActionButton({ text, type, onClick }: Props) {
    return (
        <button type={type} onClick={onClick} className="btn btn-primary action-button rounded-full bg-primary border-none hover:bg-accent w-full">
            {text}
        </button>
    );
}

export default ActionButton;
