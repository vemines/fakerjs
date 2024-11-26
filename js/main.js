function copyToClipboard(s) {
  navigator.clipboard.writeText(`${s}`);
  showToast(`Copied!`);
}
function showToast(message) {
  const existingToast = document.querySelector('.toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.classList.add('toast', 'show');
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// language modal
const languageModal = document.getElementById('language-modal');
const languageModalBtn = document.getElementById('language-modal-btn');
const languageModalClose = document.getElementById('language-modal-close');

// Open the modal
languageModalBtn.addEventListener('click', () => {
  languageModal.style.display = 'flex';
});

// Close the modal
languageModalClose.addEventListener('click', () => {
  languageModal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === languageModal) languageModal.style.display = 'none';
});

// info modal
const infoModal = document.getElementById('info-modal');
const infoModalBtn = document.getElementById('info-modal-btn');
const infoModalClose = document.getElementById('info-modal-close');

// Open the modal
infoModalBtn.addEventListener('click', () => {
  infoModal.style.display = 'flex';
});

// Close the modal
infoModalClose.addEventListener('click', () => {
  infoModal.style.display = 'none';
});

// Close the modal if the user clicks outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === infoModal) infoModal.style.display = 'none';
});
