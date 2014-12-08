'use strict';

describe('Directive: drone', function () {

  // load the directive's module
  beforeEach(module('oblivionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<drone></drone>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the drone directive');
  }));
});
