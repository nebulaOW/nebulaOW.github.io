const copyCode = (clickEvent) => {
  // The magic happens here
};

document.querySelectorAll('.copy-code-button').forEach((copyCodeButton) => {
  copyCodeButton.addEventListener('click', copyCode);
});
