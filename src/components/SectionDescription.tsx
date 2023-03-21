import { Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
}

function SectionDescription({ children }: SectionHeaderProps): ReactElement {
  return (<Typography variant='body1'>{children}</Typography>);
}

export default SectionDescription;