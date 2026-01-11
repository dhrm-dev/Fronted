function pageNumberPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);
    fd.append("start", document.getElementById("start").value);

    uploadAndDownload("page-number/", fd, "page_numbered.pdf");
}
