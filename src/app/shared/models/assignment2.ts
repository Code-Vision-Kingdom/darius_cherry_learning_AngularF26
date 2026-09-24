
export interface Weapon { // export makes it where this can be used in multiple different places as long as you import it
  id: number;
  name: string;
  damage: number;
  rarity: string;
  class: "Melee" | "Ranged";// This is a union type meaning it accepts a number(int,doubles,floats) or strings ("Something")
  realItem?: boolean; //This is an optional property
}



