import { memo, SVGProps } from 'react';

const CaretDown2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.7094 9.65937L12.5094 16.8594C12.3743 16.9946 12.1911 17.0705 12 17.0705C11.8089 17.0705 11.6256 16.9946 11.4906 16.8594L4.29059 9.65937C4.00926 9.37803 4.00926 8.9219 4.29059 8.64057C4.57192 8.35923 5.02806 8.35923 5.30939 8.64057L12 15.3321L18.6906 8.64057C18.9719 8.35923 19.4281 8.35923 19.7094 8.64057C19.9907 8.9219 19.9907 9.37803 19.7094 9.65937Z'
      fill='#121212'
    />
  </svg>
);

const Memo = memo(CaretDown2Icon);
export { Memo as CaretDown2Icon };
