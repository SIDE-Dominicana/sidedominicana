import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import Landing from "views/Landing.js";
import Services from 'views/Services.js';
import Marketing from 'views/Marketing.js';
import Technology from 'views/Technology.js';
import TrainingRecruitment from 'views/TrainingRecruitment.js';
import Finance from 'views/Finance.js';
import Packages from 'views/Packages.js';
import BlogDetail from "views/BlogDetail";

// translations
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// JSON data for translations
import english from '../src/i18n/en/english.json';
import español from '../src/i18n/es/español.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'es',
  resources: {
    es: {
      global: español
    },
    en: {
      global: english
    }
  }
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        <Route path="/blog/:slug" exact component={BlogDetail} />
        <Route path="/service" exact component={Services} />
        <Route path="/service/marketing" exact component={Marketing} />
        <Route path="/service/technology" exact component={Technology} />
        <Route path="/service/training-recruitment" exact component={TrainingRecruitment} />
        <Route path="/service/finance" exact component={Finance} />
        <Route path="/package" exact component={Packages} />
        <Route path="/" exact component={Landing} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </I18nextProvider>,
  document.getElementById("root")
);
