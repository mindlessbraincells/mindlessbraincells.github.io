import { FC } from 'react';
import Box from '@mui/system/Box';
import { IconLink } from '../IconLink';

interface Data {
  id: string;
  label: string;
  icon: string;
  color?: string;
  href: string;
}

export interface IconLinkListProps {
  data: Data[];
};

export const IconLinkList: FC<IconLinkListProps> = ({ data }) => {
  return (
    <Box display="flex" flexDirection="row" justifyContent="flex-start">
      {data.map((item) => (
        <Box pr={2}>
          <div className="icon-anim" key={item.id}>
            <IconLink
              href={item.href}
              color={item.color}
              icon={item.icon}
              title={item.label}
            />
          </div>
        </Box>
      ))}
    </Box>
  );
};
