function unlockPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);
    fd.append("password", document.getElementById("password").value);

    uploadAndDownload("unlock-pdf/", fd, "unlocked.pdf");
}
