# JavaScript Quiz

ON this task I was tasked by the client to produce a JavaScript quiz that could be used to help in theie interview process. They wanted any potential employees to first take a JavaScript quiz to test their fundamental knowledge on the subject.

## Approach

I stored all the questions and answers in objects which were then in turn stored in a single Array. This meant that all the questions and answers could easily be handled when needed later on in the program. Also as I had 'rightAnswer' key in each of the objects I could also easily then compare this to the users input and handle incorrect and correct in different ways. Using this approach alongside a Question Index that incremented after each question was generated means the client can very easily add extra questions just by adding to the array and the program will handle this without any further changes to the code.

## Difficulites

I had set up a 'Play Again' button at the end initially. However, despite trying  multiple different approaches every time it ran a '405' error came up on the browser. I even changed the playAgain function so that all it did was refresh the page using the location.reload() method but the 405 error still persisted. I therefore had to ask the user to manually refresh and get rid of the play again button. 

However, this play again function was not in the specs from the client and so was a nice-to-have but not a necessity. I will check back with the client to see if they do want it and if they do continue work on a fix.


## Final Product

![Fullsize webpage](./assets/images/Final%20Product.png) 

## Credits

I used w3 schools and MDN docs to help me with the local storage and the getElementbyID syntax.

## Link

To view the portfolio yourself please [click here](https://joelcronin.github.io/super-winner/)
