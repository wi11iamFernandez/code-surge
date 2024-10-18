// my-date-formats.ts
import { MatDateFormats } from '@angular/material/core';

export const MY_DATE_FORMATS: MatDateFormats = {
    parse: {
        dateInput: 'DD/MM/YYYY', // Parsing della data dall'input dell'utente
    },
    display: {
        dateInput: 'DD/MM/YYYY', // Formato di visualizzazione nell'input
        monthYearLabel: 'MMMM YYYY', // Formato per l'intestazione del mese e anno
        dateA11yLabel: 'LL', // Formato accessibile per la data
        monthYearA11yLabel: 'MMMM YYYY', // Formato accessibile per il mese e anno
    }
};
