function signPDF() {
    const fd = new FormData();
    fd.append("file", document.getElementById("file").files[0]);

    const text = document.getElementById("text").value;
    if (text) fd.append("text", text);

    uploadAndDownload("sign-pdf/", fd, "signed.pdf");
}
