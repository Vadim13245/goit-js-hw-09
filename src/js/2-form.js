const KEY_MESSAGE = "feedback-form-state";
const formRef = document.querySelector('form');

formRef.addEventListener('submit', function(event) {
    event.preventDefault();
    if (formRef.elements.email.value.trim() === '' || formRef.elements.message.value.trim() === '') {
        alert('Please fill out all form fields');
        return;
    }
    const objMessage = JSON.stringify({ email: formRef.elements.email.value.trim(), message: formRef.elements.message.value.trim() });
    localStorage.setItem(KEY_MESSAGE, objMessage);
    formRef.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    const objMessage = JSON.parse(localStorage.getItem(KEY_MESSAGE)) || {};
    formRef.elements.email.value = objMessage.email || '';
    formRef.elements.message.value = objMessage.message || '';
});

formRef.addEventListener('input', addLocalStorage);
function addLocalStorage() {
    const objMessage = JSON.stringify({ email: formRef.elements.email.value.trim(), message: formRef.elements.message.value.trim() });
    localStorage.setItem(KEY_MESSAGE, objMessage);
};

function removeLocalStorage() {
    localStorage.removeItem(KEY_MESSAGE);
    formRef.elements.email.value = '';
    formRef.elements.message.value = '';
};

formRef.addEventListener('reset', removeLocalStorage);