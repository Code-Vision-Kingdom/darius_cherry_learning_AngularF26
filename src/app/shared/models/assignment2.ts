
export interface Assignment2 { // export makes it where this can be used in multiple different places as long as you import it
  id: number;
  name: string;
  city: string;
  age: number;
  howManyHouse?: number | string; //This is an optional property
  friendAge: boolean;// This is a union type meaning it accepts a number(int,doubles,floats) or strings ("Something")
}



