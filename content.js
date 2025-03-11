console.log('i am content js');
console.log('also content');
window.onload = function()
{
    const mainElement = document.querySelector('[role="main"]');

    // const shareButton = document.querySelector('svg[aria-label="Share"]');
    const extButton = document.createElement('button');
    extButton.textContent = 'saveAi';
    extButton.id = 'extButton';
    mainElement.parentNode.insertBefore(extButton, mainElement);
    extButton.addEventListener('click', getTheLink);
    console.log(mainElement);
    console.log('button inserted', extButton);
    console.log(window.location.href);
}
function getTheLink()
{
    console.log(window.location.href);
}