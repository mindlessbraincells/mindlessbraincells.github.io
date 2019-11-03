/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export function CardContainer(props) {
  const CardStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <div css={CardStyle}>
      {props.children}
    </div>
  );
}
