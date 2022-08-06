import "@patternfly/react-core/dist/styles/base.css";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import { GlobalWrapperProvider } from "./context/GlobalWrapperProvider";

function App() {
  return (
    <GlobalWrapperProvider>
      <AppLayout>test</AppLayout>
    </GlobalWrapperProvider>
  );
}

export default App;
