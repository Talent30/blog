import type { ReactNode } from 'react';

type Properties = {
  children: ReactNode;
};

function LayoutContainer({ children }: Properties) {
  return (
    // Define layout container for the page
    <main className="mx-auto max-w-screen-2xl px-4 pt-10 pb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl rounded-lg">{children}</div>
    </main>
  );
}

export { LayoutContainer };
