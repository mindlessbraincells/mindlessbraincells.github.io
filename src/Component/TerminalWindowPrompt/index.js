/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import { useContext } from "react";
import { TerminalContext } from "@Component/TerminalContext";

const defaultProps = {
  outputStatus: "#8dd39e"
}

export function TerminalWindowPrompt(props) {
  props = { ...defaultProps, ...props };
  const { executeCommand } = useContext(TerminalContext);
  const [input, setInput] = useState("");

  function handleUserInput(event) {
    setInput(event.target.value);
  }

  function handlerUserInputExecution(event) {
    if (input.length < 1) {
      return;
    }

    if (event.charCode === 13) {
      setInput("");
      executeCommand(input);
    }
  }

  const TerminalWindowInputWrapperStyle = css`
    display: flex;
  `;

  const TerminalWindowInputStyle = css`
    margin-right: 0.5em;
    color: ${props.outputStatus};
  `;

  const TerminalWindowTextAreaStyle = css`
    width: 100%;
    background-color: rgb(23,42,69);
    border-style: none;
    color: #b7c5d2;
    outline: none;
    font-family: 'Source Code Pro', monospace;
    caret-color: #8dd39e;
  `;

  return (
    <div css={TerminalWindowInputWrapperStyle}>
      <span css={TerminalWindowInputStyle}>➜</span>
      <input
        css={TerminalWindowTextAreaStyle}
        ref={props.userInputReference}
        type="text"
        id="terminal-input"
        value={input}
        onChange={handleUserInput}
        onKeyPress={handlerUserInputExecution}
      />
    </div>
  );
}
