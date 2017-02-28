import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import core from './core/core';
import blog from './blog/blog';

export default 
angular.module('ngWebpack', [uiRouter, 'core', 'blog'])
.name;