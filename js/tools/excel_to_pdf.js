function excelToPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    uploadAndDownload("excel-to-pdf/", fd, "file.pdf");
}
