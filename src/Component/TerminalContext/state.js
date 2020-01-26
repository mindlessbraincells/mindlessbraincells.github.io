/** @jsx jsx */
import { jsx } from "@emotion/core";
import { generateRandomHeadline } from "@Component/TerminalContext/generateRandomHeadline";

export const state = [
  {
    initial: true,
    command: "greet",
    output: (
      <span>
        {generateRandomHeadline()}< br/>
        Type <span style={{color:"#d7566a"}}>help</span> to list all commands.
      </span>
    ),
    status: "#8dd39e"
  }
];
