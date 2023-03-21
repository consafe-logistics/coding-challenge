import { Button } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

function BackButton(): ReactElement {
  const navigate = useNavigate();
  
  return (<Button onClick={() => navigate(-1)}>Go back</Button>);
}

export default BackButton;