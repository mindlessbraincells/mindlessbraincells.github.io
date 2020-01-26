/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";

export const state = [
  {
    initial: true,
    command: "greet",
    output: (
      <span>
        <FontAwesomeIcon icon={faFlask} /> Mindlessbraincells Labs (version 1.0.0)<br />
        by Jacob Baring< br/>
        Type <span style={{color:"#d7566a"}}>help</span> to list all commands.
      </span>
    ),
    status: "#8dd39e"
  }
];
