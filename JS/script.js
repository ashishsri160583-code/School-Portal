const menuToggle=document.getElementById("menuToggle");
const navLinks=document.querySelector(".nav-links");
const loginArea=document.querySelector(".login-area");

const dropdownToggle=document.querySelector(".dropdown-toggle");
const dropdown=document.querySelector(".dropdown");



const notices=[
    {
        title: "Annual Examination Notice",
        date: "20 August 2026"
    },
    {
        title: "Parent Teacher Meeting",
        date: "25 August 2026"
    },
    {
        title: "Holiday Notice",
        date: "30 August 2026"
    },
    {
        title: "Admission Form Submission",
        date: "05 September 2026"
    },
    {
        title: "School Picnic Notice",
        date: "18 September 2026"
    },
    {
        title: "School Anniversary",
        date: "25 September 2026"
    }

];

const events=[
    {
        day: "25",
        month: "AUG",
        title: "Annual Function",
        location: "School Auditorium"
    },
    {
        day: "02",
        month: "SEP",
        title: "Annual Sports Day",
        location: "School Ground"
    },
    {
        day: "15",
        month: "SEP",
        title: "Teacher's Day",
        location: "School Campus"
    },
    {
        day: "20",
        month: "SEP",
        title: "Sicence Exhibition",
        location: "Science Block"
    },
    {
        day: "18",
        month: "SEP",
        title: "School Picnic",
        location: "City Park"
    },
    {
        day: "25",
        month: "SEP",
        title: "School Anniversary Function",
        location: "City Park"
    }
];

const noticeList=document.getElementById("noticeList")
const eventList=document.getElementById("eventList")

notices.forEach(function(notice){
    noticeList.innerHTML +=`
        <div class="notice-item">
            <div class="notice-item-icon">
                <i class="fa-solid fa-thumbtack"></i>
            </div>

            <div class="notice-item-content">
                <h3>
                    ${notice.title}
                </h3>

                <span>
                    ${notice.date}
                </span>
            </div>
        </div>
        `;
});

events.forEach(function(event){
    eventList.innerHTML +=`
        <div class="event-item">
            <div class ="event-date">
                <strong>
                    ${event.day}
                </strong>

                <span>
                    ${event.month}
                </span>
            </div>

            <div class="event-content">
                <h3>
                    ${event.title}
                </h3>

                <p>
                    ${event.location}
                </p>
            </div>
        </div>
    `;
});

// Gallery Sections

const galleryImages = [
    {
        image: "Images/Gallery/event-1.jpg",
        title: "Annual Function",
        category: "events"
    },
    {
        image: "Images/Gallery/sport-1.jpg",
        title: "Annual Sport Day",
        category: "sports"
    },
    {
        image: "Images/Gallery/campus-1.jpg",
        title: "Annual Campus",
        category: "campus"
    },
    {
        image: "Images/Gallery/activity-1.jpg",
        title: "Art Activity",
        category: "activities"
    },
    {
        image: "Images/Gallery/event-2.jpg",
        title: "Cultural Event",
        category: "events"
    },
    {
        image: "Images/Gallery/sport-2.jpg",
        title: "Football Competition",
        category: "sports"
    },
    {
        image: "Images/Gallery/achieve-1.jpg",
        title: "Achievement",
        category: "achieve"
    },
    {
        image: "Images/Gallery/achieve-2.jpg",
        title: "Achievement",
        category: "achieve"
    },
    {
        image: "Images/Gallery/achieve-3.jpg",
        title: "Achievement",
        category: "achieve"
    },
    {
        image: "Images/Gallery/achieve-4.jpg",
        title: "Achievement",
        category: "achieve"
    }
];

const galleryGrid=document.getElementById("galleryGrid");
let currentGalleryImages = galleryImages;
let currentImageIndex = 0;


// Gallery Lighbox Elements

const galleryLightbox = document.getElementById("galleryLightbox");
const lightboxImage=document.getElementById("lightboxImage");
const lightboxTitle=document.getElementById("lightboxTitle");
const lightboxCounter=document.getElementById("lightboxCounter");
const lighboxClose=document.getElementById("lightboxClose");
const lightboxPrev=document.getElementById("lightboxPrev");
const lightboxNext=document.getElementById("lightboxNext")


function displayGallery(category)
{
    galleryGrid.innerHTML="";

    currentGalleryImages = galleryImages.filter(function(item){

        return category === "all" || item.category === category;
    });

    currentGalleryImages.forEach(function(item, index){
        galleryGrid.innerHTML += `

            <div class="gallery-item" data-index="${index}">

                <img src="${item.image}" alt="${item.title}">

                <div class="gallery-overlay">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
        `;
    });

    addGalleryClickEvents();
}

function addGalleryClickEvents()
{
    const galleryItems=document.querySelectorAll(".gallery-item");

    galleryItems.forEach(function(item) {
        item.addEventListener("click", function() {

            const index=Number(item.dataset.index);

            openLightbox(index);
            
        });
    });
}

function openLightbox(index)
{
    currentImageIndex=index;

    const image=currentGalleryImages[currentImageIndex];

    lightboxImage.src = image.image;

    lightboxImage.alt=image.title;

    lightboxTitle.textContent=image.title;

    lightboxCounter.textContent =
    `${currentImageIndex+1} / ${currentGalleryImages.length}`;

    galleryLightbox.classList.add("open");
}


function closeLightbox()
{
    galleryLightbox.classList.remove("open");
}

lighboxClose.addEventListener("click", function(){
    closeLightbox();
});


function showNextImage()
{
    currentImageIndex++;

    if (currentImageIndex>=currentGalleryImages.length)
    {
        currentImageIndex = 0;
    }

    openLightbox(currentImageIndex);
}

lightboxNext.addEventListener("click", function() {
    showNextImage();
});


function showPreviousImage()
{
    currentImageIndex--;

    if (currentImageIndex<0)
    {
        currentImageIndex=currentGalleryImages.length - 1;
    }

    openLightbox(currentImageIndex);
}

lightboxPrev.addEventListener("click", function() {
    showPreviousImage();
});

document.addEventListener("keydown", function(event) 
{
    if (!galleryLightbox.classList.contains("open"))
    {
        return;
    }

    if (event.key === "ArrowRight")
    {
        showNextImage();
    }

    if (event.key === "ArrowLeft")
    {
        showPreviousImage();
    }

    if (event.key === "Escape")
    {
        closeLightbox();
    }
});




const galleryFilters= document.querySelectorAll(".gallery-filter")

galleryFilters.forEach(function(button){
    button.addEventListener("click", function(){

        galleryFilters.forEach(function(btn){
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category= button.dataset.category;

        displayGallery(category);
    });
});


displayGallery("all")

// Drop Down Functions Here

dropdownToggle.addEventListener("click", function(event){
    event.preventDefault();
    dropdown.classList.toggle("open");
})

menuToggle.addEventListener("click", function(){
    navLinks.classList.toggle("show");
    loginArea.classList.toggle("show");

    const icon=menuToggle.querySelector("i");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark")
}
)

// Contact Form

const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
const subjectInput=document.getElementById("subject");
const messageInput=document.getElementById("message");

const nameError=document.getElementById("nameError");
const emailError=document.getElementById("emailError");
const subjectError=document.getElementById("subjectError");
const messageError=document.getElementById("messageError");
const formSuccess=document.getElementById("formSuccess");


function clearErrors()
{
    nameError.textContent="";
    emailError.textContent="";
    subjectError.textContent="";
    messageError.textContent="";
    formSuccess.textContent="";
}

function validateForm()
{
    clearErrors();

    let isValid=true;

    if (nameInput.value.trim() === "")
    {
        nameError.textContent="Please enter your name.";

        isValid=false;
    }
    else if (emailInput.value.trim() === "")
    {
        emailError.textContent="Please enter your email.";

        isValid=false;
    }
    else if (!validateEmail(emailInput.value.trim()))
    {
        emailError.textContent="Please enter valid email.";
        isValid=false;
    }

    else if (subjectInput.value.trim() === "")
    {
        subjectError.textContent="Please enter subject.";

        isValid=false;
    }

    else if (messageInput.value.trim() === "")
    {
        messageError.textContent="Please enter your message. ";

        isValid=false;
    }

    return isValid;
    
}

function validateEmail(email)
{
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


const contactForm=document.getElementById("contactForm");

if (contactForm)
{
    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        console.log("Form submit event fired")

        if (validateForm())
        {
            formSuccess.textContent="Your message has been submitted successfully!";

            contactForm.reset();
        }
    });
}
