'use strict';

var _nylasExports = require('nylas-exports');

var _main = require('../lib/main');

var _ArchiveSimilar = require('../lib/archive-similar');

var _ArchiveSimilar2 = _interopRequireDefault(_ArchiveSimilar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("activate", () => {
  it("should register the composer button and sidebar", () => {
    spyOn(_nylasExports.ComponentRegistry, 'register');
    (0, _main.activate)();
    expect(_nylasExports.ComponentRegistry.register).toHaveBeenCalledWith(_ArchiveSimilar2.default, { role: 'MessageListSidebar:ContactCard' });
  });
});

describe("deactivate", () => {
  it("should unregister the composer button and sidebar", () => {
    spyOn(_nylasExports.ComponentRegistry, 'unregister');
    (0, _main.deactivate)();
    expect(_nylasExports.ComponentRegistry.unregister).toHaveBeenCalledWith(_ArchiveSimilar2.default);
  });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2hvbWUvdHJhdmlzL2J1aWxkL255bGFzL04xL3N0YXRpYy9wYWNrYWdlLXRlbXBsYXRlL3NwZWMvbWFpbi1zcGVjLmVzNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsVUFBVCxFQUFxQixNQUFNO0FBQ3pCLEtBQUcsaURBQUgsRUFBc0QsTUFBTTtBQUMxRCwyQ0FBeUIsVUFBekI7QUFDQTtBQUNBLFdBQU8sZ0NBQWtCLFFBQXpCLEVBQW1DLG9CQUFuQyw2QkFBMEUsRUFBQyxNQUFNLHVCQUFQLEVBQTFFO0FBQ0EsV0FBTyxnQ0FBa0IsUUFBekIsRUFBbUMsb0JBQW5DLDZCQUEwRSxFQUFDLE1BQU0sZ0NBQVAsRUFBMUU7QUFDRCxHQUxEO0FBTUQsQ0FQRDs7QUFTQSxTQUFTLFlBQVQsRUFBdUIsTUFBTTtBQUMzQixLQUFHLG1EQUFILEVBQXdELE1BQU07QUFDNUQsMkNBQXlCLFlBQXpCO0FBQ0E7QUFDQSxXQUFPLGdDQUFrQixVQUF6QixFQUFxQyxvQkFBckM7QUFDQSxXQUFPLGdDQUFrQixVQUF6QixFQUFxQyxvQkFBckM7QUFDRCxHQUxEO0FBTUQsQ0FQRCIsImZpbGUiOiJtYWluLXNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudFJlZ2lzdHJ5fSBmcm9tICdueWxhcy1leHBvcnRzJztcbmltcG9ydCB7YWN0aXZhdGUsIGRlYWN0aXZhdGV9IGZyb20gJy4uL2xpYi9tYWluJztcblxuaW1wb3J0IE15TWVzc2FnZVNpZGViYXIgZnJvbSAnLi4vbGliL215LW1lc3NhZ2Utc2lkZWJhcic7XG5pbXBvcnQgTXlDb21wb3NlckJ1dHRvbiBmcm9tICcuLi9saWIvbXktY29tcG9zZXItYnV0dG9uJztcblxuZGVzY3JpYmUoXCJhY3RpdmF0ZVwiLCAoKSA9PiB7XG4gIGl0KFwic2hvdWxkIHJlZ2lzdGVyIHRoZSBjb21wb3NlciBidXR0b24gYW5kIHNpZGViYXJcIiwgKCkgPT4ge1xuICAgIHNweU9uKENvbXBvbmVudFJlZ2lzdHJ5LCAncmVnaXN0ZXInKTtcbiAgICBhY3RpdmF0ZSgpO1xuICAgIGV4cGVjdChDb21wb25lbnRSZWdpc3RyeS5yZWdpc3RlcikudG9IYXZlQmVlbkNhbGxlZFdpdGgoTXlDb21wb3NlckJ1dHRvbiwge3JvbGU6ICdDb21wb3NlcjpBY3Rpb25CdXR0b24nfSk7XG4gICAgZXhwZWN0KENvbXBvbmVudFJlZ2lzdHJ5LnJlZ2lzdGVyKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChNeU1lc3NhZ2VTaWRlYmFyLCB7cm9sZTogJ01lc3NhZ2VMaXN0U2lkZWJhcjpDb250YWN0Q2FyZCd9KTtcbiAgfSk7XG59KTtcblxuZGVzY3JpYmUoXCJkZWFjdGl2YXRlXCIsICgpID0+IHtcbiAgaXQoXCJzaG91bGQgdW5yZWdpc3RlciB0aGUgY29tcG9zZXIgYnV0dG9uIGFuZCBzaWRlYmFyXCIsICgpID0+IHtcbiAgICBzcHlPbihDb21wb25lbnRSZWdpc3RyeSwgJ3VucmVnaXN0ZXInKTtcbiAgICBkZWFjdGl2YXRlKCk7XG4gICAgZXhwZWN0KENvbXBvbmVudFJlZ2lzdHJ5LnVucmVnaXN0ZXIpLnRvSGF2ZUJlZW5DYWxsZWRXaXRoKE15Q29tcG9zZXJCdXR0b24pO1xuICAgIGV4cGVjdChDb21wb25lbnRSZWdpc3RyeS51bnJlZ2lzdGVyKS50b0hhdmVCZWVuQ2FsbGVkV2l0aChNeU1lc3NhZ2VTaWRlYmFyKTtcbiAgfSk7XG59KTtcbiJdfQ==
