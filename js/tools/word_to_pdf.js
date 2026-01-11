function wordToPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    uploadAndDownload("word-to-pdf/", fd, "file.pdf");
}
