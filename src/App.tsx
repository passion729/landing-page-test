import Layout from "./components/Layout.tsx";
import Hero from "./components/sections/Hero.tsx";
import Brands from "./components/sections/Brands.tsx";

function App() {
  return (
    <Layout title="EdgeAI">
        <Hero />
        <Brands />
    </Layout>
  )
}

export default App
