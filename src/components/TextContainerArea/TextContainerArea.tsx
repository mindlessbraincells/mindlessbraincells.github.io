import { FC } from 'react';
import Box from '@mui/system/Box';

export interface TextContainerAreaProps {
  header: string;
  subheader: string;
}

export const TextContainerArea: FC<TextContainerAreaProps> = ({
  header,
  subheader
}) => {
  return (
    <Box mb={2}>
      <h1 className="header">
        {header}
      </h1>
      <h2 className="subheader">
        {subheader}
      </h2>
    </Box>
  );
};
