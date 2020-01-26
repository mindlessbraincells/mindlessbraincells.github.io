/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { TitleBarButton } from "@Component/TitleBarButton";

const defaultProps = {
  title: "root@ubuntu"
}

export function TitleBar(props) {
  props = { ...defaultProps, ...props };

  const TitleBarStyle = css`
    display: flex;
    justify-content: space-between;
    background-color: #eae8e9;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid rgba(66, 66, 66, 0.5);
  `;

  const TitleBarButtonsStyle = css`
    display: flex;
    padding-top: 0.4em;
    padding-bottom: 0.4em;
    padding-left: 0.6em;
  `;

  const TitleBarTitleStyle = css`
    align-self: center;
    font-family: monospace;
    height: 100%;
  `;

  const TitleBarRemarksStyle = css`
    display: flex;
    align-self: center;
    padding-right: 0.6em;
    height: 100%;
  `;

  return (
    <div css={TitleBarStyle}>
      <div css={TitleBarButtonsStyle}>
        <TitleBarButton color="#fa615c" />
        <TitleBarButton color="#ffbd48" />
        <TitleBarButton color="#3fc950" />
      </div>
      <div css={TitleBarTitleStyle}>
        <span>{props.title}</span>
      </div>
      <div css={TitleBarRemarksStyle}>
        <TitleBarButton />
        <TitleBarButton />
        <TitleBarButton />
      </div>
    </div>
  );
}
