// TODO: this file! :)

/* 
-When user clicks Add Number button, the number they entered into the input field should be added to the number bank.
-The number bank is not changed if the user enters a non-numberic value.
-Number bank should display all the numbers the user has entered.
-When Sort 1 button is clicked, first number in the number bank should be removed and placed into odd or even category.
-When Sort All button is clicked, all numbers should be remobed and placed into odd or even  category. */

/* 
noun: 
-Number entered
-Sheet of paper with the numbers
-Sort 1 button
-Sort 2 button
-Sheet of paper with the even numbers
-Sheet of paper with the odd numbers

verbs:
1. Look at number inputted
2. If input is not a number, keep number bank the same
3. Add number to number bank
4. Look at all numbers on number bank
5. If sort 1 is clicked,  (could be clicked multiple times)
  5a. if number is even, put in even category. 
  5b. If number is odd, put in odd category
6. If sort all is clicked,
  6a. if number is even, put in even category
  6b. if number is odd, put in odd category
7. Use DOM to connect JS to HTML
*/

/* - To look at number inputted, need EMPTY ARRAY that users can enter in  (1)

-Create if, else if statement. (2)
  - If statement- if input is not a number, don't compute
  -Else if statement- if input is a number, compute   ----->

------>   Want to add number to array. Make a function, given parametere of number,  that gets the number that was inputted and PUSHES it to the array. 
Array is stored in number bank

-When event submit happens for button sort 1, look at each number in array (number bank)
  -If number is even, pop to even category
  -If number is odd, pop to odd category

  -When event submit happens for button sort all, look at each number in array (number bank)
    -If number is even, pop to even category
    -If number is odd, pop to odd category
    */ 

    //===State===

    /* added 3 arrays, 1 for the numberBank that the number from the text input would go. 1 array was for the numbers
    that would be moved from the numberBank if they were odd and 1 that moved from the 
    number bank if they were even*/

    const numberBank = [];
    const odds = [];
    const evens = [];

    /* Created a function to get a number,
    add (push) that number to the numberbank, 
    and log so it shows in the console */

    function addNumber(number) {
        numberBank.push(number);
        console.log(numberBank);
      }  

      /* Created a function that uses shift to take
      the first number from the numberBank array and sort
      it so that if it has is a remainder of 1, we know it is 
      odd and pushed the odds array, otherwise, it pushes
      to the evens array */
      function sort() {
        const number = numberBank.shift();
        if(number%2===1) {
          odds.push(number);
        } else{
          evens.push(number);
        }
      }


      //---Render---

      /* Created a function to render the numbers by
      setting the dom variable $numbers and assigning
      it to a number mapped as a div element that shows
      the number */

      const renderNumbers = () => {
        const $numbers = numberBank.map((number) => {
          const $number = document.createElement("div");
          $number.textContent = number;
          return $number;
        });
        const numberInput = document.querySelector("#select");
        numberInput.replaceChildren(...$numbers);
      }

      /* Created a function to render the odd numbers by
      setting the dom variable $numbers assigned to the mapped 
      number that is a created div that displays the number
      if it is odd */


      const renderOdds = () => {
        const $numbers = odds.map((number) => {
          const $number = document.createElement("div");
          $number.textContent=number;
          return $number;
        });
        const numberInput = document.querySelector("#odds");
        numberInput.replaceChildren(...$numbers);
      }

         /* Created a function to render the odd numbers by
      setting the dom variable $numbers assigned to the mapped 
      number that is a created div that displays the number
      if it is odd */

      const renderEvens = () => {
        const $numbers = evens.map((number) => {
          const $number = document.createElement("div");
          $number.textContent=number;
          return $number;
        });
        const numberInput = document. querySelector("#evens");
        numberInput.replaceChildren(...$numbers);
      }

      //Created a function to hold all of the render functions
     
      function render(){
        renderOdds();
        renderEvens();
        renderNumbers();
      }



      //===Script===

      /* Set dom variable $sortOne, got the id from 
      the HTML and added an event listener to listen for 
      the click of the first button, then perform the sort and render functions. */
            
      const $sortOne = document.querySelector("#sortOne");
      $sortOne.addEventListener("click", () => {
        sort();
        render();
      })

        /* Set dom variable $sortAll got the id from 
      the HTML and added an event listener to listen for 
      the click of the next button, then perform the sort and render functions for 
      all of the numbers in the numberBank(using a while loop to 
        check for all of the numbers. */

      const $sortAll = document.querySelector("#sortAll");
      $sortAll.addEventListener("click", () => {
        while (0 < numberBank.length) {
        sort();
      }
      render();
      })

      /* Created a DOM variable that uses querySelector to get the form from
      the HTML and then apply an event listener to it. The 
      event listener will wait for submit, set the form to 
      not refresh after submitted, get the number from the 
      HTML, perform the addNumber function and then render it. */
      const $form = document.querySelector("form");
      $form.addEventListener("submit", (event) => {
        event.preventDefault();
        const $number = document.querySelector("#number");
        addNumber($number.value);
        $number.value="";
        render();
      })
      
      

//rerender b/c change of state