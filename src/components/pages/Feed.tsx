import FeedTitle from "../interface/FeedTitle";
import FeedLayout from "../layouts/FeedLayout";
import ContentForm from "./feeds/ContentForm";
import TitleFrom from "./feeds/TitleFrom";

function Feed() {
    return (
        <FeedLayout>
            <ContentForm />
        </FeedLayout>
    );
}

export default Feed;
