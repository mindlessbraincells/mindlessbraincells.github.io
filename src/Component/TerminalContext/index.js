import React, { createContext, useState } from "react";
import { state } from "@Component/TerminalContext/state";
import { engine } from "@Component/Commands/engine";

export const TerminalContext = createContext({
  terminalCommands: [],
  setTerminalCommands: () => {},
  executeCommand: () => {}
})

export function TerminalContextProvider(props) {
  const [terminalCommands, setTerminalCommands] = useState(state);

  const executeCommand = (args) => {
    args = args.split(" ");

    const output = engine(args);

    return setTerminalCommands([
      ...terminalCommands,
      output
    ])
  };

  return (
    <TerminalContext.Provider value={{ terminalCommands, setTerminalCommands, executeCommand }}>
      {props.children}
    </TerminalContext.Provider>
  )
}
