import angular          from 'angular';

import blogRoutes       from './app/routes/blogRoutes';

import { blogCtrl }     from './app/controllers/blogControllers';

export default 
angular.module('blog', [])
.config(blogRoutes)
.controller('blogCtrl', blogCtrl)
.name;