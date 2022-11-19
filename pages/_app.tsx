import '@/styles/globals.css';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

type NextPageWithLayout<T = void> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropertiesWithLayout = AppProps & {
  Component: NextPageWithLayout<unknown>;
};

const MyApp = ({ Component, pageProps }: AppPropertiesWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
