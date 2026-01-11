function watermarkPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);
    fd.append("text", document.getElementById("text").value);

    uploadAndDownload("watermark-pdf/", fd, "watermarked.pdf");
}
