import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'
import ProfilePage from './components/ProfilePage'
import UserProfile from './components/UserProfile'
import WelcomeMessage from './components/WelcomeMessage'
import UserContext from './components/UserContext'


function App() {

  const useData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };
  return (
    <>
      <WelcomeMessage />
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
     <UserContext.Provider value={useData}>
      <ProfilePage
        userData={
          useData
        }
      />
     </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App
