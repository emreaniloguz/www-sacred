'use client';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import { ModalProvider } from '@components/page/ModalContext';
import DebugGrid from '@components/DebugGrid';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  React.useEffect(() => {
    // Set default light theme
    Utilities.onHandleAppearanceChange('');
  }, []);

  return (
    <ModalProvider>
      <DebugGrid />
      {children}
    </ModalProvider>
  );
};

export default Providers;
