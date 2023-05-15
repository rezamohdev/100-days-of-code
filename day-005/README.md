# #100DaysOfCode Challenge

## Day 001 | Codewras challenge: Find the next perfect square

### Problem statement:

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is positive.

#### Examples:

findNextSquare(121) --> returns 144

findNextSquare(625) --> returns 676

findNextSquare(114) --> returns -1 since 114 is not a perfect

Solution Approach:

Step 1: check if the perfect square root of the given number say “n” is available.

Step 2: if yes, then simply get the square of the “n+1” number.

Step 3: if no, return false.
