function rotatePDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);
    fd.append("angle", document.getElementById("angle").value);

    uploadAndDownload("rotate-pdf/", fd, "rotated.pdf");
}
