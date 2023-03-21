import { useContext } from "react";
import { InversifyContext } from "../App";

export const withInstances = (instances: any, Component: any) => {
  return (props: any) => {
    const container = useContext(InversifyContext);
    const injectedProps = Object.keys(instances).reduce((acc: any, key: any) => {
      acc[key] = container?.get(instances[key]);
      return acc;
    }, {});
    return <Component {...props} {...injectedProps} />;
  };
};