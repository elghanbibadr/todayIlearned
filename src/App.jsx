import GlobalStyles from "./styles/GlobalStyles";
import getFacts from "./services/apiFacts";
import toast, { Toaster } from "react-hot-toast";
import Header from "./componenet/Header";
import { AppContextProvider } from "./context/AppContext";
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
      <AppContextProvider>
        <GlobalStyles />
        <AppLayout>
          <Header />
          <SideBar />
          <Main />
        </AppLayout>
      </AppContextProvider>
      <Toaster
        position="top-center"
        gutter="12"
        containerStyle={{ margin: "10px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            fontWeight: "400",
            maxWidth: "500px",
            color: "white",
            padding: "10px",
            backgroundColor: "var(--dark-gray)",
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
