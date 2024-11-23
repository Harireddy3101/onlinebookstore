import { memo, SVGProps } from 'react';

const DownArrow1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.40002 7.69995L12 16.3L20.6 7.69995'
      stroke='#171717'
      strokeWidth={2.064}
      strokeMiterlimit={10}
      strokeLinecap='square'
    />
  </svg>
);

const Memo = memo(DownArrow1Icon);
export { Memo as DownArrow1Icon };
