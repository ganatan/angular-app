import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateHourFormat'
})
export class DateHourFormatPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (!value) {
      return '';
    }
    const regex = /^([0-2][0-9]|3[0-1])\/([0][1-9]|1[0-2])\/[0-9]{4} ([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
    if (regex.test(value)) {
      return value;
    }
    const date = new Date(value);
    if (!isNaN(date.getTime())) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const seconds = String(date.getSeconds()).padStart(2, '0');

      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    }

    return '';
  }
}
