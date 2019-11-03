import { createBrowserHistory } from "history";
import React from "react";
import Helmet from "react-helmet";
import { Router, Route, Switch } from "react-router-dom";
import { QueryParamProvider } from 'use-query-params';
import { renderToDOM } from "@Component/renderToDOM";
import { App } from "@Ui/app";

if (module.hot) {
  module.hot.accept();
}

function AttachApp () {
  const history = createBrowserHistory();

  return (
    <React.Fragment>
      <Helmet titleTemplate="%s | mindlessbraincells" defaultTitle= "Home | mindlessbraincells" />

      <Router history={history}>
        <QueryParamProvider ReactRouterRoute={Route}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </QueryParamProvider>
      </Router>
    </React.Fragment>
  )
}

renderToDOM("app", <AttachApp />);
