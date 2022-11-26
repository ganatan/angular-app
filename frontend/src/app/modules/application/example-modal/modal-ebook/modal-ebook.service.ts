import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Item } from './item';
import { Injectable } from "@angular/core";

// eslint-disable-next-line
declare const bootstrap: any;

@Injectable()
export class ModalEbookService {

  trailer = false;

  pageId: any;
  sendMessageSource = new Subject<Item>();

  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  open(idModal: string, pageId?: any) {
    this.pageId = pageId;
    const modalEbook = new bootstrap.Modal(document.getElementById('modalEbook'), {
      keyboard: true
    })
    if (modalEbook) {
      modalEbook?.show();
    } 
  }

  afterClosed(item: Item) {
    this.sendMessageSource.next(item);
  }

  getMessage(): Observable<any> {
    return this.sendMessageSource.asObservable();
  }

  sendMessage(item: Item) {
    this.sendMessageSource.next(item);
  }

}
