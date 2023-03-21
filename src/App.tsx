import { interfaces } from 'inversify';
import { createContext } from 'react';

import { appContainer } from './Composition/AppContainer'
import BootstrapApp from './utils/BootstrapApp'

export const InversifyContext = createContext<interfaces.Container | undefined>(undefined);

function App() {
  return (
    <InversifyContext.Provider value={appContainer}>
      <BootstrapApp />
    </InversifyContext.Provider>
  )
}

export default App
