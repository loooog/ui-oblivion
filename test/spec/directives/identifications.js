'use strict';

describe('Directive: identifications', function () {

  // load the directive's module
  beforeEach(module('oblivionApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<identifications></identifications>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the identifications directive');
  }));
});
