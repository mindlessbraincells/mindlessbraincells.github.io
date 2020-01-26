/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { TitleBar } from "@Component/TitleBar";
import { TerminalWindow } from "@Component/TerminalWindow";
import { TerminalContextProvider } from "@Component/TerminalContext";

export function App(props) {
  const TerminalWrapperStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  `;

  const TerminalStyle = css`
    width: 50em;
    height: 27em;
  `;

  return (
    <TerminalContextProvider>
      <div css={TerminalWrapperStyle}>
        <div css={TerminalStyle}>
          <TitleBar title="jacob@mindlessbraincells-labs: ~" />
          <TerminalWindow />
        </div>
      </div>
    </TerminalContextProvider>
  );
}
