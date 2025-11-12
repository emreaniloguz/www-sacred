'use client';

import * as React from 'react';

import { ModalProvider } from '@components/page/ModalContext';
import DebugGrid from '@components/DebugGrid';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ModalProvider>
      <DebugGrid />
      {children}
    </ModalProvider>
  );
};

export default Providers;
