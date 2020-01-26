/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const defaultProps = {
  color: "",
  action: () => {}
}

export function TitleBarButton(props) {
  props = { ...defaultProps, ...props };

  const TitleBarButtonStyle = css`
    border-radius: 50%;
    height: 15px;
    width: 15px;
    background-color: ${props.color};
    margin: 0.2em;
  `;

  return (
    <div css={TitleBarButtonStyle} onClick={props.action}>
      {props.children}
    </div>
  );
}
