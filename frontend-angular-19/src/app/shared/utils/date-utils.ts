import { formatDate } from '@angular/common';

export function getCurrentDate(): string {
  const now = new Date();

  return formatDate(now, 'dd/MM/yyyy HH:mm:ss', 'fr-FR');
}
