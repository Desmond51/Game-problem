
// Problem

/*
	Count the Number of Ways to Reach a Given Score Problem.
	In a game, a player can score only 3, 5 or 10 points in a move. Given a score of S, find the number of ways to reach the given score using the specified moves.S = 50
    S = 30
     S = 22
*/


/*A JavaScript program to count number of
 possible ways to a given score
 can be reached in a game where a
 move can earn 3 or 5 or 10

// Returns number of ways
// to reach score n
*/
//Procedure
    //    Step one
    // Create an array table[] of size N+1 to store counts of all scores from 0 to N.
    //      Step two
    // For every possible move (3, 5, and 10), increment the number of ways to reach the current score x i.e. table[x] with ways in which those scores can be reached from where x is reachable i.e. (x – 3), (x – 5), (x – 10). 
        //    Step three
    // Return table[N] .
function count(S)
{
	// table[i] will store count
	// of solutions for value i.
	let table = new Array(S + 1), i;

	// Initialize all table
	// values as 0
	for(let j = 0; j < S + 1; j++)
			table[j] = 0;

	// Base case (If given value is 0)
	table[0] = 1;

	// One by one consider given 3 moves
	// and update the table[] values after
	// the index greater than or equal to
	// the value of the picked move
	for (i = 3; i <= S; i++)
	table[i] += table[i - 3];
	
	for (i = 5; i <= S; i++)
	table[i] += table[i - 5];
	
	for (i = 10; i <= S; i++)
	table[i] += table[i - 10];

	return table[S];
}

// Sample output

	let S = 50;
	console.log("Count for " + S
		+ " is " + count(S) );

	S = 30;
	console.log("Count for "+ S + " is "
		+ count(S));
    S = 22;
        console.log("Count for "+ S + " is "
            + count(S));

