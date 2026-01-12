function splitPDF() {
    const fileInput = document.getElementById("file");
    const rangesInput = document.getElementById("ranges");

    if (!fileInput.files.length) {
        alert("Please select a PDF file");
        return;
    }

    const file = fileInput.files[0];
    const ranges = rangesInput.value;

    const fd = new FormData();
    fd.append("file", file);
    fd.append("ranges", ranges);

    fetch(API_BASE + "pdf/split/", {
        method: "POST",
        body: fd
    })
    .then(res => {
        if (!res.ok) throw new Error("Split failed");
        return res.blob();
    })
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "split.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
    })
    .catch(err => {
        alert("Error while splitting PDF");
        console.error(err);
    });
}