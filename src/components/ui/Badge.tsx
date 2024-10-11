import React, { FC } from 'react';

type Props = {
  title: string;
  bgColor?: string;
};

export const Badge: FC<Props> = ({ title, bgColor }) => {
  const style = `inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold focus:outline-none`;
  return (
    <div style={{ background: bgColor }} className={style}>
      {title}
    </div>
  );
};
