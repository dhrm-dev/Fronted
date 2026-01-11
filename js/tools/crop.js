function cropPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    fd.append("left", document.getElementById("left").value);
    fd.append("right", document.getElementById("right").value);
    fd.append("top", document.getElementById("top").value);
    fd.append("bottom", document.getElementById("bottom").value);

    uploadAndDownload("pdf/crop/", fd, "cropped.pdf");
}
