import React from "react";
import HelloRedux from "./HelloRedux";
import CounterRedux from "./CounterRedux/index.tsx";
import AddRedux from "./AddRedux/index.tsx";

export default function ReduxExamples() {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
    </div>
  );
}