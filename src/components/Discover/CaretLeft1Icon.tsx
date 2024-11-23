import { memo, SVGProps } from 'react';

const CaretLeft1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.02 2L8.02 10C8.02013 10.1619 7.92267 10.3079 7.77312 10.3698C7.62356 10.4318 7.4514 10.3975 7.337 10.283L3.337 6.283C3.26189 6.20797 3.21968 6.10616 3.21968 6C3.21968 5.89384 3.26189 5.79203 3.337 5.717L7.337 1.717C7.4514 1.60247 7.62356 1.56818 7.77312 1.63015C7.92267 1.69212 8.02013 1.83812 8.02 2Z'
      fill='#837271'
    />
  </svg>
);

const Memo = memo(CaretLeft1Icon);
export { Memo as CaretLeft1Icon };
