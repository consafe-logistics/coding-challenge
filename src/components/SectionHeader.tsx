import { Typography } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
}

function SectionHeader({ children }: SectionHeaderProps): ReactElement {
  return (<Typography variant='h3'>{children}</Typography>);
}

export default SectionHeader;