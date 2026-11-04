import { AbstractControl, ValidationErrors } from '@angular/forms'; // ADDED: whole file

// ADDED: Going Further 1, custom validator for a single field
// Takes a control and returns an error object, or null when valid
export function notBlank(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  // an empty field is left to Validators.required; this only catches spaces-only text
  if (typeof value === 'string' && value.length > 0 && value.trim().length === 0) {
    return { blank: true };
  }
  return null;
}

// ADDED: Going Further 2, cross-field validator, attached to the whole FormGroup
// Reads two fields (rarity and damage) and compares them
export function rarityNeedsDamage(group: AbstractControl): ValidationErrors | null {
  const rarity = group.get('rarity')?.value;
  const damage = group.get('damage')?.value;

  const highRarity = rarity === 'Epic' || rarity === 'Legendary';

  // rule is broken: Epic or Legendary with less than 100 damage
  if (highRarity && damage !== null && damage < 100) {
    return { rarityDamage: true };
  }
  return null;
}
