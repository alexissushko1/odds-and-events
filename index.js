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

    const numberBank = [];
    let selectedNum = "";

    function addNumber(number) {
        numberBank.push(number);
      }  

      //---Render---
      function render() {
        const $numberBank = numberBank.map((number) => {
         const $number = document.createElement("span");
         $number.textContent = number;

        $number.addEventListener("submit", () => {
          selectedNum = number;
          render();
        });
        return $number;
        });

        const $section = document.querySelector("#numberBank");
        $section.replaceChildren(...$numberBank);

      }

      //===Script===

      render();

    const $form = document.querySelector("form");
    $form.addEventListener("submit", (event) => {
      event.preventDefault();
      //word should be added to state
      const $number = document.querySelector("#number"); 
      const number = $number.value;
      addNumber($number.value);
      $number.value = "";
   

//rerender b/c change of state
render();
});