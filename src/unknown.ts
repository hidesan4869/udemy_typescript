export {};

const kansu = (): number => 29;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 100;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown)
}

console.log(sumAny);
