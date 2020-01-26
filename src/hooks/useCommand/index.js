import { useContext } from "react";
import { TerminalContext } from "@Component/TerminalContext";

export function useCommand(args) {
  const { terminalCommands, setTerminalCommands } = useContext(TerminalContext);

  // function executeCommand(args) {
  //   const commands = args.split(" ");
  //   const command = commands[0];
  //   const status = {
  //     success: "#8dd39e",
  //     error: "#d7566a"
  //   }
  // }

  return setTerminalCommands({
    initial: false,
    status: "#00ff00",
    output: "test",
    command
  });
}
