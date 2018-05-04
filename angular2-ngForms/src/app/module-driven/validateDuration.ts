import {FormControl} from '@angular/forms';

export function validateDuration(ctrl: FormControl){

    const numValue = parseInt(ctrl.value);

    const valid = numValue && numValue < 10;
    
    // restituisco un valore nullo se il valore dell'input esiste ed è minore di 10
    return valid ? null : {
        validateDuration : {
            valid: false
        }
    };
        
}