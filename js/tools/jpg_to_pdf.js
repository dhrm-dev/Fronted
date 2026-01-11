function jpgToPDF() {
    const files = document.getElementById("files").files;
    const fd = new FormData();

    for (let f of files) fd.append("files", f);

    uploadAndDownload("jpg-to-pdf/", fd, "images.pdf");
}
