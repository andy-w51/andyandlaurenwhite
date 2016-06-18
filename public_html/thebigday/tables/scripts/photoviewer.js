// Photo viewer
var photoviewer = null;
var photocontent = null;

function enlargePhoto(src) {
    photocontent.onload = displayPhotoViewer;
    photocontent.src = src;
}

function displayPhotoViewer() {
    photoviewer.style.display = "flex";
}

function registerPhotoViewerCallbacks()
{
    photoviewer = document.getElementById("photoviewer");
    photocontent = document.getElementById("photocontent");

    var photoclose = document.getElementById("photoclose");

    photoclose.onclick = function() {
        photoviewer.style.display = "none";
    }
}
