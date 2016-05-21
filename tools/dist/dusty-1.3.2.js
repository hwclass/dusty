(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, function () { 'use strict';

	var subModuleA = require('sub-module-a');
	var subModuleB = require('sub-module-b');

	module.exports = {
		subModuleA: subModuleA,
		subModuleB: subModuleB
	};

}));
//# sourceMappingURL=dusty-1.3.2.js.map