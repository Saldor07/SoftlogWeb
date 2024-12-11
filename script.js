// Koyu/Açık Tema
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDarkMode = document.body.classList.contains("dark");
    themeToggle.textContent = isDarkMode ? "☀️" : "🌙";
});

// Kısayol Ekleme Butonları
const addShortcutButton = document.getElementById("addShortcut");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("closeModal");
const saveShortcutButton = document.getElementById("saveShortcut");
const siteNameInput = document.getElementById("siteName");
const siteURLInput = document.getElementById("siteURL");
const shortcutList = document.getElementById("shortcutList");

// "⭐" Butonuna Tıklanınca Modalı Göster
addShortcutButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

// "Kapat" Butonuna Tıklayınca Modalı Gizle
closeModalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Yeni Kısayol Kaydetme
saveShortcutButton.addEventListener("click", () => {
    const siteName = siteNameInput.value.trim(); // Boşlukları kaldır
    const siteURL = siteURLInput.value.trim();

    if (siteName && siteURL) {
        // Listeye yeni bir kısayol ekle
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = siteURL.startsWith("http") ? siteURL : `https://${siteURL}`; // URL'yi kontrol et
        link.textContent = siteName;
        link.target = "_blank"; // Yeni sekmede açılması için

        listItem.appendChild(link);
        shortcutList.appendChild(listItem);

        // Giriş kutularını sıfırla
        siteNameInput.value = "";
        siteURLInput.value = "";

        // Modalı gizle
        modal.classList.add("hidden");
    } else {
        alert("Lütfen tüm alanları doldurun!"); // Hata mesajı
    }
});
