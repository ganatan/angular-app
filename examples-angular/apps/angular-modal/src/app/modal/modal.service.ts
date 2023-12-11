import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

// eslint-disable-next-line
declare const bootstrap: any;

@Injectable()
export class ModalService {

  formModal: any;
  messageSendData = new Subject<string>();
  messageReceiveData = new Subject<string>();

  open(data?: any) {
    this.formModal = new bootstrap.Modal(
      document.getElementById('modalForm')
    );
    this.formModal?.show();
    this.messageReceiveData.next(data);
  }

  afterClosed(message: any) {
    this.formModal.hide();
    this.messageSendData.next(message);
  }

  sendData(): Observable<any> {
    return this.messageSendData.asObservable();
  }

  receiveData(): Observable<any> {
    return this.messageReceiveData.asObservable();
  }

}
