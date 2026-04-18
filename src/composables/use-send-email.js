export function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const body = `Nombre: ${name}%0D%0AEmail: ${email}%0D%0AMensaje: ${message}`;

  window.location.href = `mailto:aalonsoopg@gmail.com?subject=Contacto%20Portfolio&body=${body}`;
}
