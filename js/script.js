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
      enrol: true,
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
      certificate: true,
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
    {
      id: 13,
      type: "Course",
      title: "Course 113",
      duration: "14 hours",
      description: "Aliquam ac felis quis nisi tincidunt efficitur.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 14,
      type: "Webinar",
      title: "Course 114",
      duration: "15 hours",
      description:
        "Pellentesque ullamcorper lacus vitae arcu tempus sollicitudin.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["G", "H"],
    },
    {
      id: 15,
      type: "Webinar",
      title: "Course 115",
      duration: "16 hours",
      description:
        "Maecenas congue libero et dui bibendum, nec viverra quam varius.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["C", "D"],
    },
    {
      id: 16,
      type: "Course",
      title: "Course 116",
      duration: "17 hours",
      description: "Proin consequat sapien eu lorem bibendum gravida.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["G", "H"],
    },
    {
      id: 17,
      type: "Course",
      title: "Course 117",
      duration: "18 hours",
      description:
        "Maecenas congue libero et dui bibendum, nec viverra quam varius.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["G", "H"],
    },
    {
      id: 18,
      type: "Course",
      title: "Course 118",
      duration: "19 hours",
      description: "Ut sit amet urna in purus gravida sollicitudin.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["G", "H"],
    },
    {
      id: 19,
      type: "Webinar",
      title: "Course 119",
      duration: "20 hours",
      description: "Proin consequat sapien eu lorem bibendum gravida.",
      image: "./assets/Image.svg",
      enrol: true,
      certificate: true,
      enroledPersons: ["E", "F"],
    },
    {
      id: 20,
      type: "Course",
      title: "Course 120",
      duration: "21 hours",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "./assets/Image.svg",
      enrol: false,
      certificate: false,
      enroledPersons: ["G", "H"],
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
  // Handle the reset button click
  $("#reset-filters").on("click", function () {
    // Reset checkboxes
    $("#filter-form input[type=checkbox]").prop("checked", false);
    // Reset dropdowns
    $("#filter-form select").prop("selectedIndex", 0);
  });
});
