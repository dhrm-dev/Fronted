function organizePDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);
    fd.append("order", document.getElementById("order").value);

    uploadAndDownload("organize-pdf/", fd, "organized.pdf");
}
