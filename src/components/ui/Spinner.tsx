import React, { FC } from 'react';
import { cn } from '../../utils/css';

type Props = {
  classname: string;
};

export const Spinner: FC<Props> = ({ classname }) => {
  return (
    <div
      className={cn(
        'animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500',
        classname
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
