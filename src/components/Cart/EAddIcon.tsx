import { memo, SVGProps } from 'react';

const EAddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M7.5 2.1L7.5 12.9' stroke='#171717' strokeWidth={1.296} strokeMiterlimit={10} strokeLinecap='square' />
    <path d='M12.9 7.5L2.1 7.5' stroke='#171717' strokeWidth={1.296} strokeMiterlimit={10} strokeLinecap='square' />
  </svg>
);

const Memo = memo(EAddIcon);
export { Memo as EAddIcon };
