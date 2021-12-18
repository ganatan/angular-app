import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Item } from './item';
import { Injectable } from "@angular/core";

declare var bootstrap: any;

@Injectable()
export class ModalEbookService {

  trailer = false;

  pageId: any;
  sendMessageSource = new Subject<Item>();

  private missionAnnouncedSource = new Subject<string>();
  private missionConfirmedSource = new Subject<string>();
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  constructor() {
  }

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }

  open(idModal: string, pageId?: any) {
    this.pageId = pageId;
    let modalEbook = new bootstrap.Modal(document.getElementById('modalEbook'), {
      keyboard: true
    })
    let selectPlayer = document.getElementById('newsModal')
    selectPlayer?.addEventListener('show.bs.modal', this.onShowModal.bind(this));
    selectPlayer?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    if (modalEbook) {
      modalEbook?.show();
    } 
  }

  onShowModal() {
  }

  onCloseModal() {
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
