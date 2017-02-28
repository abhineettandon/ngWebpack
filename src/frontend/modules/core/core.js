import angular          from 'angular';

import coreRoutes       from './app/routes/coreRoutes';

import { baseCtrl }     from './app/controllers/coreControllers';

export default 
angular.module('core', [])
.config(coreRoutes)
.controller('baseCtrl', baseCtrl)
.name;