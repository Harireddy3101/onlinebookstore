import { memo, SVGProps } from 'react';

const CaretDown3Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.7094 9.65949L12.5094 16.8595C12.3743 16.9947 12.1911 17.0707 12 17.0707C11.8089 17.0707 11.6256 16.9947 11.4906 16.8595L4.29059 9.65949C4.00926 9.37815 4.00926 8.92202 4.29059 8.64069C4.57192 8.35935 5.02806 8.35935 5.30939 8.64069L12 15.3322L18.6906 8.64069C18.9719 8.35935 19.4281 8.35935 19.7094 8.64069C19.9907 8.92202 19.9907 9.37815 19.7094 9.65949Z'
      fill='#121212'
    />
  </svg>
);

const Memo = memo(CaretDown3Icon);
export { Memo as CaretDown3Icon };
