import FeedTitle from "../interface/FeedTitle";
import FeedLayout from "../layouts/FeedLayout";
import Annotate from "./feeds/Annotate";
import ContentForm from "./feeds/ContentForm";
import TitleForm from "./feeds/PredictAnnotateSelect";
import Prediction from "./feeds/Prediction";
import TitleFrom from "./feeds/TitleFrom";

function Feed() {
  return (
    <FeedLayout>
      <Annotate />
      {/* <ContentForm /> */}
    </FeedLayout>
  );
}

export default Feed;
