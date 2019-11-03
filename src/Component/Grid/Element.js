/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export function Element(props) {
  const ElementStyle = css`
    flex: ${props.flex || "none" };
    position: inherit;
    margin: ${props.margin || 0};
    flex-grow: ${props.flexGrow || 0};
    flex-shrink: ${props.flexShrink || 0};
    align-self: ${props.flexAlignSelf || "auto"};
    height: ${props.height || "100%"};
    width: ${props.width || "100%"};
    background-color: ${props.color || "#fff"};
  `

  return (
    <div css={ElementStyle}>
      { props.children }
    </div>
  )
}
