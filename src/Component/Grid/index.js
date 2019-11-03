/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export function Grid(props) {
  const ContainerStyle = css`
    display: flex;
    margin: 0;
    flex-wrap: wrap;
    flex-direction: ${props.flexDirection || "row" };
    align-items: ${props.alignItems || "flex-start"};
    justify-content: ${props.justifyContent || "flex-start" };
    align-content: ${props.alignContent || "flex-start"};
    height: ${props.height || "100vh"};
    width: ${props.width || "100vw"};
    background-color: ${props.color || "#fff"};
  `

  return (
    <div css={ContainerStyle}>
      { props.children }
    </div>
  )
}
