document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const totalModal = document.getElementById("totalModal");
  const modalBackground = document.getElementById("ModalBackground");
  const bottomSheet = document.getElementById("StyledBottomSheet");

  button.addEventListener("click", function () {
    totalModal.style.display = "block";
    // modalBackground.style.display = "block";
    // bottomSheet.style.display = "block";
  });

  modalBackground.addEventListener("click", function () {
    totalModal.style.display = "none";
  });
});
