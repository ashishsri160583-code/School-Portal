// ==============================
// STAFF LOGIN PROTECTION
// ==============================

const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
);


if (!loggedInUser)
{
    window.location.href = "login.html";
}
else if (loggedInUser.role !== "staff")
{
    window.location.href = "login.html";
}


// ==============================
// STAFF USER INFORMATION
// ==============================

const sidebarUserName =
    document.getElementById("sidebarUserName");

const sidebarUserRole =
    document.getElementById("sidebarUserRole");

const headerUserName =
    document.getElementById("headerUserName");


if (sidebarUserName)
{
    sidebarUserName.textContent =
        loggedInUser.name;
}


if (headerUserName)
{
    headerUserName.textContent =
        loggedInUser.name;
}


if (sidebarUserRole)
{
    sidebarUserRole.textContent =
        loggedInUser.role.charAt(0).toUpperCase()
        +
        loggedInUser.role.slice(1);
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

            localStorage.removeItem(
                "loggedInUser"
            );

            window.location.href =
                "login.html";
        }
    );
}


// ==============================
// SIDEBAR SECTION SWITCHING
// ==============================

const menuLinks =
    document.querySelectorAll(".sidebar-menu a");

const contentSections =
    document.querySelectorAll(".content-section");


menuLinks.forEach(function(link)
{
    link.addEventListener(
        "click",
        function(event)
        {
            event.preventDefault();


            const sectionName =
                link.dataset.section;


            showSection(sectionName);


            // Browser history mein save karo

            history.pushState(
                {
                    section: sectionName
                },
                "",
                "#"
                +
                sectionName
            );


            // Students section click

            if (sectionName === "students")
            {
                selectedClass = "all";

                studentSearch.value = "";

                studentsHeading.textContent =
                    "My Students";

                displayStudents(students);
            }

        }
    );
});

// ==============================
// SHOW SECTION FUNCTION
// ==============================

function showSection(sectionName)
{
    // Remove active menu

    menuLinks.forEach(function(link)
    {
        link.classList.remove("active");
    });


    // Add active menu

    const activeMenu =
        document.querySelector(
            `[data-section="${sectionName}"]`
        );


    if (activeMenu)
    {
        activeMenu.classList.add("active");
    }


    // Hide all sections

    contentSections.forEach(function(section)
    {
        section.classList.remove(
            "active-section"
        );
    });


    // Show selected section

    const selectedSection =
        document.getElementById(sectionName);


    if (selectedSection)
    {
        selectedSection.classList.add(
            "active-section"
        );
    }
}


// ==============================
// STUDENTS DATA
// ==============================

const students = [

    {
        roll: "101",
        name: "Aarav Sharma",
        className: "8-A",
        gender: "Male",
        attendance: "94%",
        status: "Active"
    },

    {
        roll: "102",
        name: "Ananya Singh",
        className: "8-A",
        gender: "Female",
        attendance: "97%",
        status: "Active"
    },

    {
        roll: "103",
        name: "Rohan Verma",
        className: "8-A",
        gender: "Male",
        attendance: "89%",
        status: "Active"
    },

    {
        roll: "201",
        name: "Priya Gupta",
        className: "9-A",
        gender: "Female",
        attendance: "96%",
        status: "Active"
    },

    {
        roll: "202",
        name: "Kabir Mishra",
        className: "9-A",
        gender: "Male",
        attendance: "91%",
        status: "Active"
    },

    {
        roll: "301",
        name: "Ishita Srivastava",
        className: "10-A",
        gender: "Female",
        attendance: "98%",
        status: "Active"
    },

    {
        roll: "302",
        name: "Arjun Patel",
        className: "10-A",
        gender: "Male",
        attendance: "93%",
        status: "Active"
    }

];


// ==============================
// SELECTED CLASS
// ==============================

// "all" means all students

let selectedClass = "all";


// ==============================
// STUDENTS ELEMENTS
// ==============================

const studentsTableBody =
    document.getElementById("studentsTableBody");

const studentSearch =
    document.getElementById("studentSearch");

const studentCount =
    document.getElementById("studentCount");

const noStudentsMessage =
    document.getElementById("noStudentsMessage");

const studentsHeading =
    document.getElementById("studentsHeading");

const classFilter =
    document.getElementById("classFilter");

// ==============================
// DISPLAY STUDENTS
// ==============================

function displayStudents(studentList)
{
    studentsTableBody.innerHTML = "";


    if (studentList.length === 0)
    {
        noStudentsMessage.style.display =
            "block";

        studentCount.textContent =
            "0 Students";

        return;
    }


    noStudentsMessage.style.display =
        "none";


    studentList.forEach(function(student)
    {
        const firstLetter =
            student.name.charAt(0);


        studentsTableBody.innerHTML += `

            <tr>

                <td>
                    ${student.roll}
                </td>


                <td>

                    <div class="student-name">

                        <div class="student-avatar">

                            ${firstLetter}

                        </div>


                        <strong>

                            ${student.name}

                        </strong>

                    </div>

                </td>


                <td>
                    ${student.className}
                </td>


                <td>
                    ${student.gender}
                </td>


                <td>

                    <span class="attendance-value">

                        ${student.attendance}

                    </span>

                </td>


                <td>

                    <span class="student-status active">

                        ${student.status}

                    </span>

                </td>


                <td>

                    <button class="student-view-btn" data-roll="${student.roll}">
                        View
                    </button>

                </td>

            </tr>

        `;
    });


    studentCount.textContent =
        studentList.length + " Students";
}


// ==============================
// FILTER STUDENTS
// ==============================

function filterStudents()
{
    const searchText =
        studentSearch.value
        .trim()
        .toLowerCase();

    const selectedFilter =
        classFilter.value;

    const filteredStudents =
        students.filter(function(student)
        {
            const nameMatch =
                student.name
                .toLowerCase()
                .includes(searchText);

            const classMatch =
                selectedFilter === "all"
                ||
                student.className === selectedFilter;

            return nameMatch && classMatch;
        });

    displayStudents(filteredStudents);
}

// ==============================
// SEARCH STUDENTS
// ==============================

if (studentSearch)
{
    studentSearch.addEventListener(
        "input",
        filterStudents
    );
}

// ==============================
// CLASS FILTER
// ==============================

if (classFilter)
{
    classFilter.addEventListener(
        "change",
        filterStudents
    );
}


// ==============================
// VIEW CLASS STUDENTS
// ==============================

const viewStudentButtons =
    document.querySelectorAll(
        ".view-students-btn"
    );


viewStudentButtons.forEach(function(button)
{
    button.addEventListener(
        "click",
        function()
        {
            // Get selected class

            const className =
                button.dataset.class;


            console.log(
                "Selected Class:",
                className
            );


            // Save selected class

            selectedClass = className;

            history.pushState(
                {
                    section: "students",
                    previousSection: "classes",
                    className: className
                },
                "",
                "#students"
            );

            // Remove active menu

            menuLinks.forEach(function(link)
            {
                link.classList.remove("active");
            });


            // Activate Students menu

            const studentsMenu =
                document.querySelector(
                    '[data-section="students"]'
                );


            if (studentsMenu)
            {
                studentsMenu.classList.add(
                    "active"
                );
            }


            // Hide all sections

            contentSections.forEach(function(section)
            {
                section.classList.remove(
                    "active-section"
                );
            });


            // Show Students section

            const studentsSection =
                document.getElementById(
                    "students"
                );


            if (studentsSection)
            {
                studentsSection.classList.add(
                    "active-section"
                );
            }


            // Clear search

            studentSearch.value = "";


            // Change heading

            studentsHeading.textContent =
                "Students - Class "
                +
                className;


            // Filter selected class

            const classStudents =
                students.filter(function(student)
                {
                    return student.className ===
                        className;
                });


            // Display students

            displayStudents(classStudents);


            // Scroll page to top

            window.scrollTo(
                {
                    top: 0,
                    behavior: "smooth"
                }
            );

        }
    );
});


// ==============================
// INITIAL HISTORY STATE
// ==============================

history.replaceState(
    {
        section: "dashboard"
    },
    "",
    "#dashboard"
);


// ==============================
// INITIAL DISPLAY
// ==============================

displayStudents(students);


// ==============================
// BROWSER BACK BUTTON
// ==============================

window.addEventListener(
    "popstate",
    function(event)
    {
        const state = event.state;


        if (!state)
        {
            showSection("classes");

            return;
        }


        if (state.section)
        {
            showSection(state.section);
        }


        if (
            state.section === "students"
            &&
            state.className
        )
        {
            selectedClass =
                state.className;


            studentsHeading.textContent =
                "Students - Class "
                +
                state.className;


            const classStudents =
                students.filter(function(student)
                {
                    return student.className ===
                        state.className;
                });


            displayStudents(classStudents);
        }
    }
);



// ==============================
// BROWSER BACK BUTTON
// ==============================

window.addEventListener(
    "popstate",
    function(event)
    {
        const state = event.state;


        // Agar previous state nahi hai
        // to My Classes par bhejo

        if (!state)
        {
            showSection("classes");

            return;
        }


        // Previous section show karo

        if (state.section)
        {
            showSection(state.section);
        }


        // Agar Students state hai

        if (
            state.section === "students"
            &&
            state.className
        )
        {
            selectedClass =
                state.className;


            studentsHeading.textContent =
                "Students - Class "
                +
                state.className;


            const classStudents =
                students.filter(function(student)
                {
                    return student.className ===
                        state.className;
                });


            displayStudents(classStudents);
        }
    }
);


// ==============================
// STUDENT DETAILS MODAL
// ==============================

const studentModal =
    document.getElementById("studentModal");

const modalClose =
    document.getElementById("modalClose");

const modalStudentAvatar =
    document.getElementById("modalStudentAvatar");

const modalStudentName =
    document.getElementById("modalStudentName");

const modalStudentClass =
    document.getElementById("modalStudentClass");

const modalStudentRoll =
    document.getElementById("modalStudentRoll");

const modalStudentGender =
    document.getElementById("modalStudentGender");

const modalStudentAttendance =
    document.getElementById("modalStudentAttendance");

const modalStudentStatus =
    document.getElementById("modalStudentStatus");


// Event Delegation

studentsTableBody.addEventListener(
    "click",
    function(event)
    {
        const button =
            event.target.closest(
                ".student-view-btn"
            );


        if (!button)
        {
            return;
        }


        const roll =
            button.dataset.roll;


        const student =
            students.find(function(student)
            {
                return student.roll === roll;
            });


        if (!student)
        {
            return;
        }


        modalStudentAvatar.textContent =
            student.name.charAt(0);


        modalStudentName.textContent =
            student.name;


        modalStudentClass.textContent =
            "Class " + student.className;


        modalStudentRoll.textContent =
            student.roll;


        modalStudentGender.textContent =
            student.gender;


        modalStudentAttendance.textContent =
            student.attendance;


        modalStudentStatus.textContent =
            student.status;


        studentModal.classList.add("show");
    }
);


// Close Button

modalClose.addEventListener(
    "click",
    function()
    {
        studentModal.classList.remove("show");
    }
);


// Click Outside Modal

studentModal.addEventListener(
    "click",
    function(event)
    {
        if (event.target === studentModal)
        {
            studentModal.classList.remove("show");
        }
    }
);


// Escape Key

document.addEventListener(
    "keydown",
    function(event)
    {
        if (event.key === "Escape")
        {
            studentModal.classList.remove("show");
        }
    }
);

