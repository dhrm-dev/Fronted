function mergePDF() {
    const files = document.getElementById("files").files;
    const formData = new FormData();

    for (let f of files) {
        formData.append("files", f);
    }

    uploadAndDownload(
        "pdf/merge/",
        formData,
        "merged.pdf"
    );
}
