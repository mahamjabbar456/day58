// Or operator practice
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false );

let hour = 9;

if (hour < 10 || hour > 18) {
  console.log( 'The office is closed.' );
}

console.log(null || 0);
console.log(null || 0 || 2);

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

console.log( firstName || lastName || nickName || "Anonymous");
console.log( null || 2 || undefined );
console.log( 1 || 2 || console.log(3) );

// And Operator
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false );

let hour1 = 12;
let minute = 30;

if (hour1 == 12 && minute == 30) {
  console.log( 'The time is 12:30' );
}

console.log(1 && 0);
if (1 && 0) { // evaluated as true && false
    console.log( "won't work, because the result is falsy" );
  }

// if the first operand is truthy,
// AND returns the second operand:
console.log( 1 && 0 ); // 0
console.log( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log( null && 5 ); // null
console.log( 0 && "no matter what" ); // 0
console.log( 1 && null && 2 );

// Not Operator
console.log( !!"non-empty string" ); // true
console.log( !!null );

// And and or operator
console.log( null || 2 && 3 || 4 );

// NULLISH Operator

let user = "John";

console.log(user ?? "Anonymous");

console.log(firstName ?? lastName ?? nickName ?? "Anonymous");