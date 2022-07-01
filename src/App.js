import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { HowTo } from './components/HowTo';
import { Users } from './components/Users';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <HowTo />
      <Users />
      <Footer />
    </>
  );
}

export default App;
