function pdfToJPG() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    uploadAndDownload("pdf-to-jpg/", fd, "images.zip");
}
