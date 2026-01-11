function splitPDF() {
    const file = document.getElementById("file").files[0];
    const ranges = document.getElementById("ranges").value;

    const fd = new FormData();
    fd.append("file", file);
    fd.append("ranges", ranges);

    uploadAndDownload("split-pdf/", fd, "split.zip");
}
