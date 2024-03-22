import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import "./App.css";



function App(props) {
  return (
    <>
      <Header backgroundColor="black" links={props.links} />
      <MainContent title="" posts={props.posts} />
      <Footer />
    </>
  );
}

export default App;
