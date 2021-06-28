import React from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ catMotionState }) {
  // <style>
  //   #hello{
  //     display:none
  //   }
  // </style>
  return (
    <div
      id="cat-container"
      className="inline-flex flex-row flex-wrap h-full overflow-y-auto p-2 min-w-full"
    >
      <div id="hello" style="display:none" >Hello</div>
      <CatSprite catMotionState={catMotionState} />
    </div>
  );
}
