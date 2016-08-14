import {ComponentRegistry} from 'nylas-exports';
import {activate, deactivate} from '../lib/main';

import ArchiveSimilar from '../lib/archive-similar';

describe("activate", () => {
  it("should register the composer button and sidebar", () => {
    spyOn(ComponentRegistry, 'register');
    activate();
    expect(ComponentRegistry.register).toHaveBeenCalledWith(ArchiveSimilar, {role: 'MessageListSidebar:ContactCard'});
  });
});

describe("deactivate", () => {
  it("should unregister the composer button and sidebar", () => {
    spyOn(ComponentRegistry, 'unregister');
    deactivate();
    expect(ComponentRegistry.unregister).toHaveBeenCalledWith(ArchiveSimilar);
  });
});
