// Fitur Dark Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Terang';
    } else {
        themeToggleBtn.textContent = '🌙 Mode';
    }
});

// Fungsi Modal Pop-up Anggota Tim
const modal = document.getElementById('modal');
const modalName = document.getElementById('modal-name');
const modalRole = document.getElementById('modal-role');
const modalDesc = document.getElementById('modal-desc');

function openModal(name, role, desc) {
    modal.style.display = 'block';
    modalName.textContent = name;
    modalRole.textContent = role;
    modalDesc.textContent = desc;
}

function closeModal() {
    modal.style.display = 'none';
}

// Tutup modal jika pengguna klik di luar kotak modal
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
