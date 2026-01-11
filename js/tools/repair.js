function repairPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    uploadAndDownload("repair-pdf/", fd, "repaired.pdf");
}
