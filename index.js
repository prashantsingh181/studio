const video = document.querySelector("#camera");
const clickPicture = document.querySelector(".click-picture");
const recordVideo = document.querySelector(".record-video");

let currentFacingMode = "user";

function toggleCamera() {
  currentFacingMode = currentFacingMode === "user" ? "environment" : "user";
  startCamera();
}

function startCamera() {
  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: currentFacingMode,
      },
    })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch((error) => {
      console.error("Error accessing the camera:", error);
    });
}

clickPicture.addEventListener("click", function () {
  document.querySelector(".hero").style.display = "none";
  startCamera();
});
recordVideo.addEventListener("click", function () {
  document.querySelector(".hero").style.display = "none";
  startCamera();
});
