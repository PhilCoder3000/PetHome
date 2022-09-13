import React, { Suspense } from 'react';
import { SuspenseFallback } from '../../shared/providers/SuspenseFallback';

function SuspenseProvider({ children }: React.PropsWithChildren<{}>) {
  return <Suspense fallback={<SuspenseFallback />}>{children}</Suspense>;
}

export default SuspenseProvider;
