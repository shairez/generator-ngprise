'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createServiceFiles = function createServiceFiles() {

  this.generateSourceAndTest(
    'service/factory',
    'spec/service',
	this.componentFilePath,
    this.options['skip-add'] || false,
	  'factory',
	  'spec/service-mock'

  );


};
