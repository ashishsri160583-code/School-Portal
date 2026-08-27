
// ==============================
// LOGIN SESSION CHECK
// ==============================

const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);


// Check user is logged in

if (!loggedInUser)
{
    window.location.href = "login.html";
}


// Check user role

else if (loggedInUser.role !== "student")
{
    window.location.href = "login.html";
}


// ==============================
// DISPLAY LOGGED IN USER
// ==============================

const sidebarUserName =
    document.getElementById("sidebarUserName");

const sidebarUserRole =
    document.getElementById("sidebarUserRole");


if (sidebarUserName)
{
    sidebarUserName.textContent =
        loggedInUser.name;
}


if (sidebarUserRole)
{
    sidebarUserRole.textContent =
        loggedInUser.role.charAt(0).toUpperCase()
        +
        loggedInUser.role.slice(1) ;
}


console.log("Dashboard JS Loaded");


const sidebarToggle =
    document.getElementById("sidebarToggle");

const sidebar =
    document.querySelector(".sidebar");

const menuLinks =
    document.querySelectorAll(".sidebar-menu a");

const contentSections =
    document.querySelectorAll(".content-section");


console.log("Menu Links:", menuLinks.length);
console.log("Content Sections:", contentSections.length);


if (sidebarToggle && sidebar) {

    sidebarToggle.addEventListener("click", function() {

        sidebar.classList.toggle("show");

    });

}


menuLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        console.log("Clicked:", link.dataset.section);


        // Sab links se active remove

        menuLinks.forEach(function(item) {

            item.classList.remove("active");

        });


        // Clicked link active

        link.classList.add("active");


        // Kaunsa section open karna hai

        const sectionName = link.dataset.section;


        // Sab sections hide

        contentSections.forEach(function(section) {

            section.classList.remove("active-section");

        });


        // Selected section find karo

        const selectedSection =
            document.getElementById(sectionName);


        console.log("Selected Section:", selectedSection);


        // Selected section show karo

        if (selectedSection) {

            selectedSection.classList.add("active-section");

        }


        // Mobile sidebar close

        if (
            sidebar &&
            window.innerWidth <= 850
        ) {

            sidebar.classList.remove("show");

        }

    });

});


// =========================
// ASSIGNMENT FILTER
// =========================

const assignmentFilters =
    document.querySelectorAll(".assignment-filter");

const assignmentItems =
    document.querySelectorAll(".assignment-item");


assignmentFilters.forEach(function(filterButton) {

    filterButton.addEventListener("click", function() {

        // Remove active class from all buttons
        assignmentFilters.forEach(function(button) {

            button.classList.remove("active");

        });


        // Add active class to clicked button
        filterButton.classList.add("active");


        // Get filter value
        const filter =
            filterButton.dataset.filter;


        assignmentItems.forEach(function(item) {

            if (filter === "all") {

                item.style.display = "flex";

            }

            else if (item.classList.contains(filter)) {

                item.style.display = "flex";

            }

            else {

                item.style.display = "none";

            }

        });

    });

});


// =========================
// NOTIFICATION FILTER
// =========================

const notificationFilters =
    document.querySelectorAll(".notification-filter");

const notificationItems =
    document.querySelectorAll(".notification-item");


notificationFilters.forEach(function(filterButton) {

    filterButton.addEventListener("click", function() {

        // Remove active class
        notificationFilters.forEach(function(button) {

            button.classList.remove("active");

        });


        // Add active class
        filterButton.classList.add("active");


        const filter =
            filterButton.dataset.notificationFilter;


        notificationItems.forEach(function(item) {

            if (filter === "all") {

                item.style.display = "flex";

            }

            else if (item.classList.contains(filter)) {

                item.style.display = "flex";

            }

            else {

                item.style.display = "none";

            }

        });

    });

});

// =========================
// MARK ALL NOTIFICATIONS AS READ
// =========================

const markAllRead =
    document.getElementById("markAllRead");

const unreadCount =
    document.getElementById("unreadCount");


if (markAllRead) {

    markAllRead.addEventListener("click", function() {

        const unreadNotifications =
            document.querySelectorAll(".notification-item.unread");


        unreadNotifications.forEach(function(notification) {

            notification.classList.remove("unread");

            notification.classList.add("read");


            const unreadDot =
                notification.querySelector(".unread-dot");


            if (unreadDot) {

                unreadDot.remove();

            }

        });


        unreadCount.textContent = "0";


        markAllRead.innerHTML = `
            <i class="fa-solid fa-check"></i>
            All Notifications Read
        `;

    });

}

// =========================
// NOTICE FILTER
// =========================

const noticeFilters =
    document.querySelectorAll(".notice-filter");

const schoolNoticeItems =
    document.querySelectorAll(".school-notice-item");


noticeFilters.forEach(function(filterButton) {

    filterButton.addEventListener("click", function() {

        // Active button change
        noticeFilters.forEach(function(button) {

            button.classList.remove("active");

        });


        filterButton.classList.add("active");


        const filter =
            filterButton.dataset.noticeFilter;


        schoolNoticeItems.forEach(function(notice) {

            if (filter === "all") {

                notice.style.display = "flex";

            }

            else if (notice.classList.contains(filter)) {

                notice.style.display = "flex";

            }

            else {

                notice.style.display = "none";

            }

        });

    });

});

// =========================
// NOTICE SEARCH
// =========================

const noticeSearch =
    document.getElementById("noticeSearch");


if (noticeSearch) {

    noticeSearch.addEventListener("input", function() {

        const searchText =
            noticeSearch.value.toLowerCase();


        schoolNoticeItems.forEach(function(notice) {

            const noticeText =
                notice.textContent.toLowerCase();


            if (noticeText.includes(searchText)) {

                notice.style.display = "flex";

            }

            else {

                notice.style.display = "none";

            }

        });

    });

}

// =========================
// DOCUMENT FILTER
// =========================

const documentFilters =
    document.querySelectorAll(".document-filter");

const documentCards =
    document.querySelectorAll(".document-card");


documentFilters.forEach(function(filterButton) {

    filterButton.addEventListener("click", function() {

        // Remove active class
        documentFilters.forEach(function(button) {

            button.classList.remove("active");

        });


        // Add active class
        filterButton.classList.add("active");


        const filter =
            filterButton.dataset.documentFilter;


        documentCards.forEach(function(card) {

            if (filter === "all") {

                card.style.display = "block";

            }

            else if (card.classList.contains(filter)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});

// =========================
// DOCUMENT SEARCH
// =========================

const documentSearch =
    document.getElementById("documentSearch");


if (documentSearch) {

    documentSearch.addEventListener("input", function() {

        const searchText =
            documentSearch.value.toLowerCase();


        documentCards.forEach(function(card) {

            const documentText =
                card.textContent.toLowerCase();


            if (documentText.includes(searchText)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

}

// ==============================
// LOGOUT
// ==============================

const logoutBtn =
    document.getElementById("logoutBtn");


if (logoutBtn)
{
    logoutBtn.addEventListener(
        "click",
        function(event)
        {
            event.preventDefault();


            // Remove login session

            localStorage.removeItem(
                "loggedInUser"
            );


            // Go to login page

            window.location.href =
                "login.html";
        }
    );
}
