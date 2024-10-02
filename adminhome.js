document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('sidebarSearch');
    const sidebarNav = document.getElementById('sidebarNav');
    const sidebar = document.getElementById('sidebar');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const companiesSubmenu = document.getElementById('companiesSubmenu');

    // Existing search functionality
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const links = sidebarNav.getElementsByClassName('nav-link');

        for (let i = 0; i < links.length; i++) {
            const linkText = links[i].textContent || links[i].innerText;
            if (linkText.toLowerCase().indexOf(filter) > -1) {
                links[i].style.display = "";
            } else {
                links[i].style.display = "none";
            }
        }
    });

    // Dropdown toggle functionality
    dropdownToggle.addEventListener('click', function(e) {
        e.preventDefault();
        companiesSubmenu.classList.toggle('show');
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target)) {
            companiesSubmenu.classList.remove('show');
            dropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Smooth scrolling and sidebar animation (from previous code)
    // ... (include the smooth scrolling and sidebar animation code here) ...
});