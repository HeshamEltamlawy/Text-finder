
// word counter function start.

function count() {
    let DataLength = document.getElementsByClassName('h-text-area')[0].value.length;
    let counter = document.getElementsByClassName('h-count')[0];

    counter.innerHTML = DataLength;


}
//word counter function end.

//Find button start

const findButton = document.getElementsByClassName('h-button')
findButton[0].addEventListener("click", findWordOfParagraph);

//Find button end

//function findWordOfParagraph,
//handeling text-data an preparing it for 2 methods that apply finding text algorithms,
//which iterated then pushed input data as array and filtered it to match the textarea string.
//and find if the array value could match the text area string,
//if text area includes string as like as array value it returns action.


function findWordOfParagraph(event) {
    event.preventDefault();

    let data = [];
    let inputData = document.getElementsByClassName('h-text-box')[0];
    let currentData = inputData.value.toLowerCase().split(',').filter((x) => x.trim().length > 0);
    let inputDataArea = document.getElementsByClassName('h-text-area')[0];
    let currentDataArea = inputDataArea.value.toLowerCase();
    

    data.push(...currentData);


// the next four lines are 2 methods that apply finding text algorithms, handeling array value an preparing it 


    let letterIndex = 0;
    let targetWord = '';
 //First method:
    targetWord += data.filter((x) => currentDataArea.includes(x));
 //Second method
    letterIndex += currentDataArea.indexOf(data.filter((x) => currentDataArea.includes(x)));

    //the next two actions are "reversed actions" if the array input
    // value are the same as the text value then returns amount of html lines
    //that tell us about the result of the algorithm if it was true or false
    //but with some styling to meet the user output.

 //first action
    let wordLastIndex = letterIndex + targetWord.length;
    let makeMessageTrue = `<div class="message-box m-color-true">
                            <span class="m-text color-true">
                                ${targetWord} selected successfully &nbsp;!
                            </span>

                        </div>`
 //Second action
    let messageSpan = document.getElementsByClassName('set-message')[0];
    let makeMessageFalse = `<div class="message-box m-color-false">
                            <span class="m-text color-false">
                                No result found&nbsp;!
                            </span>

                        </div>
                            `

    

// function filterWord do the previous actions,
// depends on output has any value or not.
    function filterWord() {
        return targetWord.length > 0 ?
            messageSpan.innerHTML = makeMessageTrue :

            messageSpan.innerHTML = makeMessageFalse;

    }

    filterWord()

// function selectWord to select only the target word in the hole string

    selectWord()
   
   
    function selectWord() {

        inputDataArea.focus(); inputDataArea.setSelectionRange(letterIndex, wordLastIndex);
    }

    console.log("targetWord = " + targetWord +
    ", letter index = " + letterIndex +
    ", word last index = " + wordLastIndex)

}




