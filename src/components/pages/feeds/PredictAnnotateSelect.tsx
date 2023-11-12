import { ActionButton, FeedTitle } from "../..";

function PredictAnnotateSelect() {
  return (
    <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
      <FeedTitle content="What would you like to do" />

      <form className="w-full flex flex-col gap-4">
        <div className="flex  w-1/2 gap-2">
          <ActionButton text="Predict" />
          <ActionButton text="Annotate" />
        </div>
      </form>
    </div>
  );
}

export default PredictAnnotateSelect;
