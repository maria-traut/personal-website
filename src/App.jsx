import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Content from "./components/Content";
import AudiusPlayer from "./components/AudiusPlayer";

export default function App() {
  return (
    <>
      <Header />
      <Navigation />
      <AudiusPlayer />
      <Content />
      <Footer />
    </>
  );
}
