import GlobalStyles from "./styles/GlobalStyles";
import getFacts from "./services/apiFacts";
import Header from "./componenet/Header";
import SideBar from "./ui/SideBar";
import AppLayout from "./ui/AppLayout";
import { QueryClient, QueryClientProvider } from "react-query";

import Main from "./componenet/Main";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppLayout>
        <Header />
        <SideBar />
        <Main />
      </AppLayout>
    </QueryClientProvider>
  );
};

export default App;
