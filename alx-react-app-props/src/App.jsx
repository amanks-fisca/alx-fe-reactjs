import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import UserProfile from './components/UserProfile'

import UserContext from './UserContext'

function App() {
  const userData = {
    name: "Alice",
    age: "25",
    bio: "Loves hiking and photography."
  }

  return (
    <UserContext.Provider value={userData}>
      <>
        <Header />
        <MainContent />
        <Footer />
        <WelcomeMessage />
        <UserProfile />
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </>
    </UserContext.Provider>
  )
}

export default App
