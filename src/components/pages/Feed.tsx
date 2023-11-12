import FeedTitle from "../interface/FeedTitle";
import FeedLayout from "../layouts/FeedLayout";
import ContentForm from "./feeds/ContentForm";
import PredictAnnotateSelect from "./feeds/PredictAnnotateSelect";
import Submit from "./feeds/AiOpinion";
import TitleFrom from "./feeds/TitleFrom";
import UrlForm from "./feeds/UrlForm";

function Feed() {
    return (

        <FeedLayout>
             <ContentForm />
        </FeedLayout>
    );
}

export default Feed;
