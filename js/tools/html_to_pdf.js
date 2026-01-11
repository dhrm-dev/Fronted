function htmlToPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    uploadAndDownload("html-to-pdf/", fd, "file.pdf");
}
