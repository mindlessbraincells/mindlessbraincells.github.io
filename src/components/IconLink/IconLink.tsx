import { FC } from 'react';

export interface IconLinkProps {
  href: string;
  icon: string;
  color?: string;
  title?: string;
}

export const IconLink: FC<IconLinkProps> = ({
  href,
  icon,
  color = '000000',
  title = 'icon'
}) => {
  return (
    <a href={href} title={title}>
      <img src={icon + '&color=' + color} width="25" height="25" alt={title} />
    </a>
  );
};
