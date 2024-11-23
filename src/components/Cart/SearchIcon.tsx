import { memo, SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 21C7.029 21 3 16.971 3 12C3 7.029 7.029 3 12 3C16.971 3 21 7.029 21 12C20.994 16.968 16.968 20.994 12 21ZM12 5C8.134 5 5 8.134 5 12C5 15.866 8.134 19 12 19C15.866 19 19 15.866 19 12C18.996 8.136 15.864 5.004 12 5Z'
      fill='#0B0B0B'
    />
    <path
      d='M24.707 23.293L20.451 19.037C20.024 19.55 19.55 20.024 19.037 20.451L23.293 24.707C23.69 25.091 24.323 25.08 24.707 24.682C25.081 24.294 25.081 23.68 24.707 23.293Z'
      fill='#0B0B0B'
    />
    <path
      d='M8 13C7.448 13 7 12.552 7 12C7 9.243 9.243 7 12 7C12.552 7 13 7.448 13 8C13 8.552 12.552 9 12 9C10.346 9 9 10.346 9 12C9 12.552 8.552 13 8 13Z'
      fill='#0B0B0B'
    />
  </svg>
);

const Memo = memo(SearchIcon);
export { Memo as SearchIcon };
