import Head from 'next/head';
import { ReactNode } from 'react';
import { Header } from '../molecules';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Head>
        <title>UVic University Management System</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col">
        <Header />
        <div className="px-12">{children}</div>
      </main>
    </>
  );
};
