let historyStack = [];
let historyIndex = -1;

function navigate() {
    const addressBar = document.getElementById("address-bar");
    const url = addressBar.value;
    
    // Guarda la página en el historial
    if (historyIndex === -1 || historyStack[historyIndex] !== url) {
        historyStack = historyStack.slice(0, historyIndex + 1);
        historyStack.push(url);
        historyIndex++;
    }

    loadContent(url);
}

function goBack() {
    if (historyIndex > 0) {
        historyIndex--;
        loadContent(historyStack[historyIndex]);
    }
}

function goForward() {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        loadContent(historyStack[historyIndex]);
    }
}

function reloadPage() {
    const url = historyStack[historyIndex];
    loadContent(url);
}

function loadContent(url) {
    const contentDisplay = document.getElementById("content-display");
    
    if (url === "https://www.roquinia.com") {
        contentDisplay.innerHTML = "<h2>Página Principal de Roquinia</h2><p>Bienvenido a Roquinia, una nación ficticia.</p>";
    } else if (url === "https://www.roquinia.com/noticias") {
        contentDisplay.innerHTML = "<h2>Noticias de Roquinia</h2><p>Últimas noticias: ¡Roquinia lanza un nuevo navegador ficticio!</p>";
    } else {
        contentDisplay.innerHTML = "<h2>Página no encontrada</h2><p>La URL ingresada no está disponible en este navegador ficticio.</p>";
    }
}
