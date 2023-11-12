import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ActionButton, FeedTitle } from "../..";
import Chips from "../../interface/Chips";
import { GlobalStateContext } from "../../../app-context/global-state";

function Annotate() {
  const { globalState } = useContext(GlobalStateContext);
  const annotations = globalState.annotations;
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(chips);

    e.preventDefault();
    navigate("/feedback");
  };

  const [chips, setChips] = useState(
    annotations.map((annotation) => ({
      text: annotation,
      selected: false,
    }))
  );

  const handleChipClick = (chipText: any) => {
    setChips(
      chips.map((chip) =>
        chip.text === chipText ? { ...chip, selected: !chip.selected } : chip
      )
    );
  };
  return (
    <div className="flex-1 justify-center items-center w-11/12 md:w-3/5 lg:w-2/3 mx-auto gap-8 flex flex-col">
      <FeedTitle content="Annotate Your Opinion About the News Given" />
      <div className="text-sm -mt-5">
        Select all the boxes you feel appropriate to the news
      </div>
      <div className="flex flex-col items-center">
        <div className=" flex flex-wrap justify-center  gap-2">
          {chips.map((chip) => (
            <Chips
              text={chip.text}
              selected={chip.selected}
              onClick={() => handleChipClick(chip.text)}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <div className="flex justify-center items-center gap-4">
          State your opinion
          <div className="flex w-1/2  ">
            <ActionButton text="Annotate" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Annotate;
