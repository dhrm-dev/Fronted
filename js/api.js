async function uploadAndDownload(endpoint, formData, filename) {
    try {
        const response = await fetch(API_BASE + endpoint, {
            method: "POST",
            body: formData
        });

        if (!response.ok) {
            throw new Error("Server error");
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();

    } catch (err) {
        alert("Error: " + err.message);
    }
}
