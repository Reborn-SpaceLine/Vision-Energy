import { useRoute } from './router'
import { Footer, Header, TopBar } from './components/Layout'
import Home from './pages/Home'
import Groupe from './pages/Groupe'
import Metiers from './pages/Metiers'
import Produits from './pages/Produits'
import Reseau from './pages/Reseau'
import Actualites from './pages/Actualites'
import Carrieres from './pages/Carrieres'

const routes: Record<string, () => React.JSX.Element> = {
  '/': Home,
  '/groupe': Groupe,
  '/metiers': Metiers,
  '/produits': Produits,
  '/reseau': Reseau,
  '/actualites': Actualites,
  '/carrieres': Carrieres,
}

export default function App() {
  const { path } = useRoute()
  const Page = routes[path] ?? Home
  return (
    <>
      <TopBar />
      <Header path={path} />
      <main>
        <Page />
      </main>
      <Footer />
    </>
  )
}
