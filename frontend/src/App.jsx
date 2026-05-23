import Header from './components/Header/Header'
import Info from './components/Info/Info'
import FullInfo from './components/FullInfo/FullInfo'
import LatestFromEsc from './components/LatestFromEsc/LatestFromEsc'
import Spotlight from './components/Spotlight/Spotlight'
import MustSeeAction from './components/MustSeeAction/MustSeeAction'
import Ad from './components/Ad/Ad'
import FeaturedDocuments from './components/FeaturedDocuments/FeaturedDocuments'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Info />
        <FullInfo />
        <LatestFromEsc />
        <Spotlight />
        <MustSeeAction />
        <Ad />
        <FeaturedDocuments />
      </main>
      <Footer />
    </div>
  )
}

export default App