import { appContainer } from "../Composition/AppContainer";

export default function useContainers(containerId: string): any {
  return appContainer.get<any>(containerId);
}
