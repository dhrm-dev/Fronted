document.getElementById("mergeBtn").addEventListener("click", function () {

    const filesInput = document.getElementById("pdfFiles");
    const status = document.getElementById("status");

    if (!filesInput.files || filesInput.files.length < 2) {
        status.innerText = "Please select at least 2 PDF files.";
        return;
    }

    const formData = new FormData();
    for (let i = 0; i < filesInput.files.length; i++) {
        formData.append("files", filesInput.files[i]);
    }

    status.innerText = "Uploading & merging PDFs...";

    fetch("http://127.0.0.1:8000/api/pdf/merge/", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Server error");
        }
        return response.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "merged.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
        status.innerText = "Merge successful ✅";
    })
    .catch(error => {
        console.error("FRONTEND ERROR:", error);
        status.innerText = "Error while merging PDFs ❌";
    });

});
