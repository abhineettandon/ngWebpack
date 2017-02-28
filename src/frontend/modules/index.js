// dependencies
import angular      from 'angular';
import uiRouter     from 'angular-ui-router';
import ngAnimate    from 'angular-animate';
import ngAria       from 'angular-aria';
import ngMaterial   from 'angular-material';


// global styles
import 'angular-material/angular-material.min.css';

// apps
import core from './core/core';
import blog from './blog/blog';

// exporting default module
export default 
angular.module('ngWebpack', [uiRouter, ngAnimate, ngAria, ngMaterial, 'core', 'blog'])
.name;