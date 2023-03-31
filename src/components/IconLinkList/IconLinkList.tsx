import { FC } from 'react';
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
    <div className="icons-container">
      {data.map((item) => (
        <div className="icon icon-anim" key={item.id}>
          <IconLink
            href={item.href}
            color={item.color}
            icon={item.icon}
            title={item.label}
          />
        </div>
      ))}
    </div>
  );
};
