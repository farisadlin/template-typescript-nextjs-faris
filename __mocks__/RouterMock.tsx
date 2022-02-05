import { RouterContext } from 'next/dist/next-server/lib/router-context';
import * as React from 'react'

export const routerMock = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn().mockResolvedValue(true),
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};


const RouterMock = (props: { children: React.ReactElement }): React.ReactElement => {
  return <RouterContext.Provider value={routerMock}>{props.children}</RouterContext.Provider>
}

export default RouterMock