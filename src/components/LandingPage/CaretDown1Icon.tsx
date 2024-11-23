import { memo, SVGProps } from 'react';

const CaretDown1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M19.7094 9.65943L12.5094 16.8594C12.3743 16.9946 12.1911 17.0706 12 17.0706C11.8089 17.0706 11.6256 16.9946 11.4906 16.8594L4.29059 9.65943C4.00926 9.37809 4.00926 8.92196 4.29059 8.64063C4.57192 8.35929 5.02806 8.35929 5.30939 8.64063L12 15.3321L18.6906 8.64063C18.9719 8.35929 19.4281 8.35929 19.7094 8.64063C19.9907 8.92196 19.9907 9.37809 19.7094 9.65943Z'
      fill='#030303'
    />
  </svg>
);

const Memo = memo(CaretDown1Icon);
export { Memo as CaretDown1Icon };
