import { ActionButton, FeedTitle } from "../..";

function Feedback() {
  return (
    <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-1/3 mx-auto gap-8 flex flex-col">
      <FeedTitle content="Your Response have been submitted. Would you like to know what I think about the news" />

      <form className="w-full flex flex-col gap-4">
        <div className="flex flex-row w-1/2 gap-2">
          <ActionButton text="No" />
          <ActionButton text="Yes" />
        </div>
      </form>
    </div>
  );
}

export default Feedback;
