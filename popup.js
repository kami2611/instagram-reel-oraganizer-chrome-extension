document.addEventListener('DOMContentLoaded', () => {
    const saveReelButton = document.getElementById('saveReelButton');
    saveReelButton.addEventListener('click', getTheLink);
});
function getTheLink() {
    console.log('clicked');
    console.log(window.location.href);
}