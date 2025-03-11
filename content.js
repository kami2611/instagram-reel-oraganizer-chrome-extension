console.log('i am content js');
console.log('also content');
window.onload = function()
{
    const mainElement = document.querySelector('[role="main"]');
    const extButton = document.createElement('button');
    extButton.textContent = 'saveAi';
    extButton.id = 'extButton';
    mainElement.parentNode.insertBefore(extButton, mainElement);
    extButton.addEventListener('click', getTheLinkAndSendIt);
    console.log(mainElement);
    console.log('button inserted', extButton);
    console.log(window.location.href);
}
async function getTheLinkAndSendIt() {
    try {
        const response = await fetch('http://localhost:3000/sendLink', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reelLink: window.location.href }) // ✅ Ensure JSON format
        });
        const data = await response.json();
        console.log('Server Response:', data);
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}