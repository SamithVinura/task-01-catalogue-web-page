$(document).ready(function () {
  // Toggle the side navigation when hamburger is clicked
  $(".hamburger").click(function () {
    $(".side-nav").toggleClass("active"); // Toggle side navigation visibility
    $("body").toggleClass("no-scroll"); // Toggle body scroll lock
  });

  // Close the side navigation when clicking outside of it
  $(document).click(function (e) {
    if (!$(e.target).closest(".side-nav, .hamburger").length) {
      $(".side-nav").removeClass("active"); // Hide side navigation
      $("body").removeClass("no-scroll"); // Allow body scrolling again
    }
  });
});

$(document).ready(function () {
  const data = [
    {
      id: 1,
      type: "Webinar",
      title: "Course 101",
      duration: "2 hours",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./assets/Image.svg",
      enrol: false,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 2,
      type: "Course",
      title: "Course 102",
      duration: "3 hours",
      description: "Ut sit amet urna in purus gravida sollicitudin.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: false,
      enroledPersons: ["E", "F"],
    },
    {
      id: 3,
      type: "Course",
      title: "Course 103",
      duration: "4 hours",
      description: "Donec vulputate urna sed dapibus fermentum.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 4,
      type: "Webinar",
      title: "Course 104",
      duration: "5 hours",
      description: "Proin consequat sapien eu lorem bibendum gravida.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: false,
      enroledPersons: ["C", "D"],
    },
    {
      id: 5,
      type: "Course",
      title: "Course 105",
      duration: "6 hours",
      description: "Donec vulputate urna sed dapibus fermentum.",
      image: "./assets/Image.svg",
      enrol: false,
      certificate: true,
      enroledPersons: ["C", "D"],
    },
    {
      id: 6,
      type: "Course",
      title: "Course 106",
      duration: "7 hours",
      description:
        "Maecenas congue libero et dui bibendum, nec viverra quam varius.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 7,
      type: "Course",
      title: "Course 107",
      duration: "8 hours",
      description: "Aliquam ac felis quis nisi tincidunt efficitur.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["G", "H"],
    },
    {
      id: 8,
      type: "Course",
      title: "Course 108",
      duration: "9 hours",
      description: "In tempor purus eget lacus vehicula posuere.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["A", "B"],
    },
    {
      id: 9,
      type: "Webinar",
      title: "Course 109",
      duration: "10 hours",
      description: "Proin consequat sapien eu lorem bibendum gravida.",
      image: "../assets/Image.svg",
      enrol: false,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 10,
      type: "Course",
      title: "Course 110",
      duration: "11 hours",
      description:
        "Maecenas congue libero et dui bibendum, nec viverra quam varius.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["G", "H"],
    },
    {
      id: 11,
      type: "Webinar",
      title: "Course 111",
      duration: "12 hours",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: false,
      enroledPersons: ["C", "D"],
    },
    {
      id: 12,
      type: "Course",
      title: "Course 112",
      duration: "13 hours",
      description: "Curabitur lobortis id lorem id bibendum.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
  ];

  // Loop through the data and create cards
  data.forEach((course) => {
    console.log("c", course);
    const enrolledList = course.enroledPersons
      .map((person) => `<div class="enrol-person">${person}</div> `)
      .join("");
    const courseCard = `
            <div class="card">
                <div class="card-header" >
                    <div class="icons">
                        <img src="${
                          course.type === "Course"
                            ? "./assets/Course.svg"
                            : "./assets/Webinar.svg"
                        }" alt="${course.type}" />
                        <span>${course.type}</span>
                        
                    </div>
                    ${
                      course.certificate
                        ? `<img src="./assets/Certificate.svg" alt="Certificate" />`
                        : ""
                    }
                </div>
                <div class="card-body">
                    <div class="enrolled">
                        <div class="enrol-container" >${enrolledList}</div>
                        <span>${course.duration}</span>
                    </div>
                    <p>${course.description}</p>
                </div>
                <div class="card-footer">
                    <button class="button ${course.enrol ? "enrol" : "view"}">
                        ${course.enrol ? "Enroll" : "View"}
                    </button>
                </div>
            </div>
        `;
    $("#card-container").append(courseCard);
  });
});

$(document).ready(function () {
  const data = [
    {
      id: 1,
      type: "Webinar",
      title: "Course 101",
      duration: "2 hours",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 2,
      type: "Course",
      title: "Course 102",
      duration: "3 hours",
      description: "Ut sit amet urna in purus gravida sollicitudin.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 3,
      type: "Course",
      title: "Course 103",
      duration: "4 hours",
      description: "Donec vulputate urna sed dapibus fermentum.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 4,
      type: "Webinar",
      title: "Course 104",
      duration: "5 hours",
      description: "Proin consequat sapien eu lorem bibendum gravida.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["C", "D"],
    },
    {
      id: 5,
      type: "Course",
      title: "Course 105",
      duration: "6 hours",
      description: "Donec vulputate urna sed dapibus fermentum.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["C", "D"],
    },
  ];

  // Loop through the data and create cards
  data.forEach((course) => {
    console.log("c", course);
    const enrolledList = course.enroledPersons
      .map((person) => `<div class="enrol-person">${person}</div> `)
      .join("");
    const courseCard = `
  <div class="card-recent">
           <div class="card">
                <div class="card-header" >
                    <div class="icons">
                        <img src="${
                          course.type === "Course"
                            ? "./assets/Course.svg"
                            : "./assets/Webinar.svg"
                        }" alt="${course.type}" />
                        <span>${course.type}</span>
                        
                    </div>
                    ${
                      course.certificate
                        ? `<img src="./assets/Certificate.svg" alt="Certificate" />`
                        : ""
                    }
                </div>
                <div class="card-body">
                    <div class="enrolled">
                        <div class="enrol-container" >${enrolledList}</div>
                        <span>${course.duration}</span>
                    </div>
                    <p>${course.description}</p>
                </div>
                <div class="card-footer">
                    <button class="button ${course.enrol ? "enrol" : "view"}">
                        ${course.enrol ? "Enroll" : "View"}
                    </button>
                </div>
            </div>
            
            </div>
        `;
    $("#recent-slider").append(courseCard);
  });
});
$(document).ready(function () {
  const $slider = $("#recent-slider");
  const $sliderItems = $(".card-recent");
  const totalItems = $sliderItems.length;
  const itemWidth = $sliderItems.outerWidth(true); // Get width including margin
  let currentIndex = 0;

  // Function to move slider
  function moveSlider() {
    const translateX = -currentIndex * itemWidth;
    $slider.css("transform", `translateX(${translateX}px)`);
  }

  // Next button functionality
  $("#next-slide").click(function () {
    if (currentIndex < totalItems - 1) {
      currentIndex++;
      moveSlider();
    }
  });

  // Previous button functionality
  $("#prev-slide").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
      moveSlider();
    }
  });

  // Automatic slider for tablet and desktop
  const isMobile = window.matchMedia("(max-width: 426px)").matches;

  if (!isMobile) {
    setInterval(function () {
      if (currentIndex < totalItems - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the start
      }
      moveSlider();
    }, 3000); // Change slide every 3 seconds
  }
});
