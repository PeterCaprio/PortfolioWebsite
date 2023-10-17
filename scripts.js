function showTab(tabId) {
    // Hide all contents
    var contents = document.querySelectorAll('.content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    
    // Remove active class from all tabs
    var tabs = document.querySelectorAll('.tabs li');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
    }
    
    // Show selected content and set tab as active
    document.getElementById(tabId).classList.add('active');
    var activeTab = document.querySelector('.tabs li[onclick="showTab(\'' + tabId + '\')"]');
    activeTab.classList.add('active');
}

// Default tab to show when page loads
showTab('coding');
