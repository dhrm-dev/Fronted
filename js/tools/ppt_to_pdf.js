function pptToPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    uploadAndDownload("ppt-to-pdf/", fd, "file.pdf");
}
