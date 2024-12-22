//memuat halaman ke dalam iframe
function loadPage(page) {
    document.getElementById('contentFrame').src = page;
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

 