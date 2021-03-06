import { EventService } from './shared/event.service';
import { Injectable, Inject, forwardRef } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class EventListResolver implements Resolve<any> {

  constructor(@Inject(forwardRef(() => EventService)) private eventService: EventService) {
  }

  resolve()  {
    // This is the resolver; we get the events data from a pipe then we map the event so
    // that we can directly return the observable to the route
    return this.eventService.getEvents();
  }
}
