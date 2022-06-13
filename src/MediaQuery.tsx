import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';

export const Mobile = ({ children }: { children: ReactNode }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });
  return <>{isMobile && children}</>;
};

export const Tablet = ({ children }: { children: ReactNode }) => {
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  return <>{isTablet && children}</>;
};

export const PC = ({ children }: { children: ReactNode }) => {
  const isPC = useMediaQuery({
    query: '(min-width:1024px)',
  });
  return <>{isPC && children}</>;
};
