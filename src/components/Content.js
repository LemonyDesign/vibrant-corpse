import React from "react";
import Masthead from "./Masthead";
import GenerateContainer from "../containers/GenerateContainer";
import WorkshopContainer from "../containers/WorkshopContainer";

import "../styles/base/base.scss";
import "../styles/components/app.scss";

function Content({ workshop }) {
  return (
    <div className="app container">
      <Masthead />

      <main className="main">
        <GenerateContainer />
        {workshop && <WorkshopContainer />}
      </main>
    </div>
  );
}

export default Content;
