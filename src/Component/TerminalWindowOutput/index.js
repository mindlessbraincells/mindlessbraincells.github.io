/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const defaultProps = {
  status: "#8dd39e"
};

export function TerminalWindowOutput(props) {
  props = { ...defaultProps, ...props };
  const TerminalWindowInputWrapperStyle = css`
    display: flex;
  `;

  const TerminalWindowInputStyle = css`
    margin-right: 0.5em;
    color: ${props.status};
  `;

  const TerminalWindowTextAreaStyle = css`
    width: 100%;
    background-color: rgb(23,42,69);
    border-style: none;
    color: #b7c5d2;
    outline: none;
    font-family: 'Source Code Pro', monospace;
  `;

  const TerminalWindowOutputStyle = css`
    margin-right: 0.5em;
    width: 100%;
    background-color: rgb(23,42,69);
    border-style: none;
    color: #b7c5d2;
    outline: none;
    font-family: 'Source Code Pro', monospace;
  `;

  const TerminalWindowOutputWrapperStyle = css`
    margin-bottom: 0.5em;
  `;

  return (
    <div css={TerminalWindowOutputWrapperStyle}>
      { props.initial === false &&
        <div css={TerminalWindowInputWrapperStyle}>
          <span css={TerminalWindowInputStyle}>➜</span>
          <span css={TerminalWindowTextAreaStyle}>{props.command}</span>
        </div>
      }
      <div css={TerminalWindowInputWrapperStyle}>
        <span css={TerminalWindowOutputStyle}>{props.output}</span>
      </div>
    </div>
  );
}
