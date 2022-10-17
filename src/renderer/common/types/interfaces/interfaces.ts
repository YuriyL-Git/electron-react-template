import { ReactNode } from 'react';

export interface RouterProps {
  route: string;
  routeName: string;
  component: ReactNode;
  icon?: ReactNode;
  withSideBar?: boolean;
}
