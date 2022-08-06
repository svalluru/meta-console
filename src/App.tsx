import "@patternfly/react-core/dist/styles/base.css";
import { AppLayout } from "./components/AppLayout";
import "./styles/App.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const overrides = {
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
};
const queryClient = new QueryClient(overrides);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>test</AppLayout>
    </QueryClientProvider>
  );
}

export default App;
