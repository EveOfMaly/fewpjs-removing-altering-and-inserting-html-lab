// Write your code here!

//enter the following code to remove the main node element */
document.querySelector('main').remove()

/* Create a new element and assign it t newHeader */
const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.innerHTML = 'is the champion'
document.body.appendChild(newHeader)
