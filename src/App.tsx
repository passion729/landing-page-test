import Layout from "./components/Layout.tsx";
import Hero from "./components/sections/Hero.tsx";
import Brands from "./components/sections/Brands.tsx";
import Services from "./components/sections/Services.tsx";
import AboutUs from "./components/sections/AboutUs.tsx";

function App() {
  return (
    <Layout title="EdgeAI">
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
    </Layout>
  )
}

export default App
