function editPDF() {
    const fd = new FormData();

    fd.append("file", document.getElementById("file").files[0]);

    const text = document.getElementById("text").value;
    if (text) fd.append("text", text);

    const imageInput = document.getElementById("image");
    if (imageInput && imageInput.files.length > 0) {
        fd.append("image", imageInput.files[0]);
    }

    fd.append("page", document.getElementById("page").value || 1);
    fd.append("x", document.getElementById("x").value || 100);
    fd.append("y", document.getElementById("y").value || 100);
    fd.append("font_size", document.getElementById("font_size").value || 14);

    uploadAndDownload("edit-pdf/", fd, "edited.pdf");
}
