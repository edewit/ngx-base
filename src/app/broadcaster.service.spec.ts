import { inject, TestBed } from '@angular/core/testing';
import { Broadcaster } from './broadcaster.service';

describe('Service: Broadcaster service', () => {

  let broadcaster: Broadcaster;

  beforeEach(() => {
    broadcaster = new Broadcaster();
  });

  afterEach( () => {
    broadcaster = null;
    Broadcaster.refCount = 0;
  });

  it('Broadcaster can successfully send and receive messages', (done) => {
    broadcaster.on('testEvent').subscribe((data: number) => {
      expect(data).toEqual(1001);
      done();
    });

    broadcaster.broadcast('testEvent', 1001);
  });

  it('Broadcaster can only be created once', () => {
    expect(() => {
      new Broadcaster();
    }).toThrow();
  });
});

