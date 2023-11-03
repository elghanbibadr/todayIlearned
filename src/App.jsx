import GlobalStyles from "./styles/GlobalStyles";
import Header from "./componenet/Header";
import SideBar from "./ui/SideBar";
import AppLayout from "./ui/AppLayout";
import Main from "./componenet/Main";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppLayout>
        <Header />
        <SideBar />
        <Main />
      </AppLayout>
    </>
  );
};

export default App;
