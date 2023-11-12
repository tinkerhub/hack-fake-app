import Circle from "../../assets/svgs/circle.svg";

interface Props {
    content: string;
}

function FeedTitle({ content }: Props) {
    return (
        <div className=" flex flex-col items-center justify-center mx-auto w-11/12">
            <img
                className="h-48 w-48 rounded-full mx-auto"
                src={Circle}
                alt="Circles"
            />
            <p className="text-2xl text-center">{content}</p>
        </div>
    );
}

export default FeedTitle;
