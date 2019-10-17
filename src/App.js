import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import HomePage from "./components/HomePage";
import FilterPage from "./components/FilterPage";
import {IntlProvider} from "react-intl";
import messages_fr from "./translations/fr.json";
import messages_ar from "./translations/ar.json";

function App() {
  const messages = {
    'fr': messages_fr,
    'ar': messages_ar
};
const [language, setLanguage] = React.useState('fr');
React.useEffect(() => {
  document.getElementById("myButton").addEventListener("click", function(){
    setLanguage(localStorage.getItem('language'));
});
}, []);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
     <Router>
      <NavbarPage />
      <HomePage />
      <FilterPage />
    </Router>
    </IntlProvider>
  );
}

export default App;
