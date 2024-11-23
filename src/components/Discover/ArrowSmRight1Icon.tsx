import { memo, SVGProps } from 'react';

const ArrowSmRight1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6.86571 10.8557C6.63521 10.8557 6.42742 10.7168 6.33922 10.5038C6.25101 10.2909 6.29976 10.0457 6.46272 9.88271L8.33973 8.0057L6.46272 6.12869C6.31455 5.98558 6.25512 5.77365 6.30729 5.57436C6.35945 5.37507 6.51509 5.21944 6.71438 5.16727C6.91366 5.11511 7.12559 5.17453 7.2687 5.32271L9.5487 7.60271C9.77122 7.8253 9.77122 8.1861 9.5487 8.40869L7.2687 10.6887C7.16183 10.7956 7.01688 10.8557 6.86571 10.8557Z'
      fill='#0F0D0D'
    />
  </svg>
);

const Memo = memo(ArrowSmRight1Icon);
export { Memo as ArrowSmRight1Icon };
