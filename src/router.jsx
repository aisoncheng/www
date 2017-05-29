import React from 'react';
import { Router, Route } from 'dva/router';
import {IndexPage,NewConditionRouter,NewFormRouter,ErrorRouter} from './routes'

function RouterConfig({ history }) {
  return (
    <Router history={history} onEnter={onenter}>
      <Route path="/" component={IndexPage} onEnter={onenter}/>
      <Route path="/new/condition" component={NewConditionRouter} onEnter={onenter} />
      <Route path="/new/form" component={NewFormRouter} onEnter={onenter} />
      <Route path="*" component={ErrorRouter} />
    </Router>
  );
}

/*
模块校验
*/
function onenter(){
   //window.location.href = "/";
}
export default RouterConfig;
