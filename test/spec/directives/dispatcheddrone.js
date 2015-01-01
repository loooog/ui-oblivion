'use strict';

describe('Directive: dispatchedDrone', function () {

  // load the directive's module
  beforeEach(module('oblivionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dispatched-drone></dispatched-drone>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dispatchedDrone directive');
  }));
});
