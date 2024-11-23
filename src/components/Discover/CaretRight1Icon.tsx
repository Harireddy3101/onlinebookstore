import { memo, SVGProps } from 'react';

const CaretRight1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11.2396 8.3396L6.4396 13.1396C6.30231 13.277 6.09572 13.3182 5.91626 13.2438C5.73679 13.1695 5.61984 12.9943 5.62 12.8L5.62 3.2C5.61984 3.00574 5.73679 2.83054 5.91626 2.75618C6.09572 2.68182 6.30231 2.72296 6.4396 2.8604L11.2396 7.6604C11.3297 7.75043 11.3804 7.8726 11.3804 8C11.3804 8.1274 11.3297 8.24957 11.2396 8.3396Z'
      fill='#1B1717'
    />
  </svg>
);

const Memo = memo(CaretRight1Icon);
export { Memo as CaretRight1Icon };
