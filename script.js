/* script.js */

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const mailtoLink = `mailto:pablorahonne.pr@gmail.com?subject=Contato%20do%20Portf%C3%B3lio&body=Nome: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMensagem: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});
