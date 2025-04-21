import Layout from "./components/Layout.tsx";
import Hero from "./components/sections/Hero.tsx";
import Brands from "./components/sections/Brands.tsx";
import Services from "./components/sections/Services.tsx";
import AboutUs from "./components/sections/AboutUs.tsx";
import Pricing from "./components/sections/Pricing.tsx";

function App() {
  return (
    <Layout title="EdgeAI">
        <Hero />
        <Brands />
        <Services />
        <AboutUs />
        <Pricing />
    </Layout>
  )
}

export default App
