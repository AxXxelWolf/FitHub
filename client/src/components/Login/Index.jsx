import theme from "../../theme";
import { ToggleModeProvider } from "../ContextAPI/ToggleModeContext";
import Form from "./Form";
import "./Index.css";
import { useTheme } from "@emotion/react";

const Index = () => {
  const theme = useTheme();
  return (
    <div className="wrapper">
      <div className="header">
        <h1>FitHub</h1>
      </div>
      <ToggleModeProvider>
        <div className="Form">
          <Form />
        </div>
      </ToggleModeProvider>
    </div>
  );
};
export default Index;
