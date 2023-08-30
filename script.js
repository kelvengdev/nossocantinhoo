const messagesContainer = document.getElementById('messages');
const newMessageInput = document.getElementById('newMessage');
const sendMessageButton = document.getElementById('sendMessage');

sendMessageButton.addEventListener('click', () => {
  const newMessage = newMessageInput.value;
  if (newMessage.trim() !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = newMessage;
    messagesContainer.appendChild(messageElement);
    saveMessage(newMessage); // Chame a função para salvar a mensagem
    newMessageInput.value = '';
  }
});

function saveMessage(message) {
  // Implemente aqui a lógica para salvar a mensagem (por exemplo, em um banco de dados ou arquivo)
}
