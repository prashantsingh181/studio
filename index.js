const video = document.querySelector("#camera");

navigator.mediaDevices.enumerateDevices().then((data) => console.log(data));
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
    video.srcObject = stream;
    video.play();
  });
}
