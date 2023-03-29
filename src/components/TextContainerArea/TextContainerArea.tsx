import { FC } from 'react';

export interface TextContainerAreaProps {
  header: string;
  subheader: string;
}

export const TextContainerArea: FC<TextContainerAreaProps> = ({
  header,
  subheader
}) => {
  return (
    <div className="text-container">
      <h1 className="header">
        {header}
      </h1>
      <h2 className="subheader">
        {subheader}
      </h2>
    </div>
  );
};
