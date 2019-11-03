/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { CardContainer } from "@Component/Card/CardContainer";

export function Card(props) {
  const CardStyle = css`
    width: 18vw;
    height: 24vh;
    background-color: #c0c0c0;
    border-radius: 1vw;
    box-shadow: 0px 0px 10px #333;
    padding: 1%;
  `

  return (
    <CardContainer>
      <div css={CardStyle}>
        {props.children}
      </div>
    </CardContainer>
  );
}
