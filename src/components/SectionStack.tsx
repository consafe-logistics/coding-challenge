import { Stack } from "@mui/material";
import { ReactElement, ReactNode } from "react";

interface SectionStackProps {
  children: ReactNode;
}

function SectionStack({ children }: SectionStackProps): ReactElement {
  return (<Stack spacing={3}>{children}</Stack>);
}

export default SectionStack;