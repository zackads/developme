## Brain Code

1. Why do these yield different results?

   ```javascript
   "1" + 2 + 3; // Equals "123"
   3 + 2 + "1"; // Equals "51"
   3 + 2 + 1; // Equals 6
   ```

> _Line 1_. The first `+` in line 1 is the string concatenate operator. This type-coerces the number 2 to a string and concatenates it with the string "1", creating "12". Because "12" is now a string, the second `+` alose coerces and concatenates the number 3.

> _Line 2_. As both 3 and 2 are numbers, the `+` character is the addition operator. This results in the number 5. 5 + "1" is, however, the concatenation operator as "1" is a string: the number 5 is type-coerced to string and concatenated.

> _Line 3_. All characters on either side of the `+` symbol are of type numbers; the `+` symbol is the addition operator. The numbers are added.

Work out the answers to the following without running the code. Once you've worked out the answer, run the code in node to check that you're right.

2. What does `foo` equal?

   ```javascript
   let bar = 12;
   let foo = bar > 10 ? bar : 15;

   console.log(foo); // ??
   ```

> foo = 12.

3. What does `x` equal?

   ```javascript
   let x = 12;

   let add = (x) => {
     x += 12;
     return x;
   };

   add(x);

   console.log(x); // ??
   ```

> x = 24.

4. What does `x` equal?

   ```javascript
   let x = 12;

   let add = () => {
     x += 12;
     return x;
   };

   add(x);

   console.log(x); // ??
   ```

> x = 24
