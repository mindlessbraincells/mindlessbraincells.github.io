/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { TerminalWindowPrompt } from "@Component/TerminalWindowPrompt"
import { TerminalWindowOutput } from "@Component/TerminalWindowOutput"
import { createRef, useContext } from "react";
import { TerminalContext } from "@Component/TerminalContext";

const defaultProps = {}

export function TerminalWindow(props) {
  props = { ...defaultProps, ...props };
  const { terminalCommands } = useContext(TerminalContext);
  const userInputReference = createRef();
  const textAreaFocus = () => userInputReference.current.focus();
  const TerminalWindowStyle = css`
    background-color: rgb(23, 42, 69);
    border-radius: 0 0 5px 5px;
    height: 100%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 5px;
    };
    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.3);
      border-radius: 8px;
    };
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(255, 255, 255, 1);; 
    };
  `;

  return (
    <div css={TerminalWindowStyle} onClick={textAreaFocus}>
      { terminalCommands.map((input, index) => (
          <TerminalWindowOutput
            status={input.status}
            command={input.command}
            output={input.output}
            initial={input.initial}
            key={index}
          />
        ))
      }
      <TerminalWindowPrompt 
        userInputReference={userInputReference}
      />
    </div>
  );
}
