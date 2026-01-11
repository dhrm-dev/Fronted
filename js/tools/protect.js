function protectPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);
    fd.append("password", document.getElementById("password").value);

    uploadAndDownload("protect-pdf/", fd, "protected.pdf");
}
