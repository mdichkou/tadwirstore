import React from "react";
import "./App.css";
import NavbarPage from "./components/NavBar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Article from "./components/Article";
import LoginPage from "./components/Login"
import SignupPage from "./components/Signup"
import Dashboard from "./components/Dashboard"
import AddArticle from "./components/AddArticle"
import { IntlProvider } from "react-intl";
import messages_fr from "./translations/fr.json";
import messages_ar from "./translations/ar.json";

function App() {
  const messages = {
    'fr': messages_fr,
    'ar': messages_ar
  };
  const [language, setLanguage] = React.useState('fr');
  React.useEffect(() => {
    document.getElementById("myButton").addEventListener("click", function () {
      setLanguage(localStorage.getItem('language'));
    });
  }, []);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <NavbarPage />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/article/:id" component={Article} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/addarticle" component={AddArticle} />
          <Route path="/dashboard/:id" component={Dashboard} />
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;
