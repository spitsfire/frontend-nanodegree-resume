//all code below was created by me. Helper.js and jQuiery.js were prefabricated for my use.

// init vars
var formattedName = HTMLheaderName.replace("%data%", "Claire Elliott");
var formattedRole = HTMLheaderRole.replace("%data%", "Aspiring Web Developer");
var formattedImage = HTMLbioPic.replace("%data%", "images/claire.jpg");
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", "Gonna make sum shit up rn and totally smoke this later yo!!");
var formattedEmail = HTMLemail.replace("%data%", "yue.katou@gmail.com");
var formattedTwitter = HTMLtwitter.replace("%data%", "slanndalous");
var formattedGithub = HTMLgithub.replace("%data%", "spitsfire");
var formattedMobile = HTMLmobile.replace("%data%", "555-555-5555");
var formattedLocation = HTMLlocation.replace("%data%", "Tulsa, Oklahoma");
$("#header").prepend(formattedName, formattedRole, formattedImage, formattedWelcome);
$("#topContacts").prepend(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
$("#footerContacts").prepend(formattedMobile, formattedEmail, formattedTwitter, formattedGithub, formattedLocation);
$("#mapDiv").append(googleMap);

// arrays
var projects = {
    projects: [{
            title: "Portfolio Mockup",
            date: "May 30, 2017",
            description: "Based on a mockup PDF, I created my own one-page portfolio site using HTML and CSS. I did not use any frameworks. Everything is hand coded.",
            images: ["images/projects1_1.jpg", "images/projects1_2.jpg"],
            url: "https://github.com/spitsfire/udacity-fewd/tree/master/pj-portfolio"
        },
        {
            title: "",
            date: "",
            description: "",
            images: [],
            url: ""
        }
    ]
};
var bio = {
    name: "Mary Claire Elliott",
    role: "Aspiring Web Developer",
    contacts: {
        email: "yue.katou@gmail.com",
        twtter: "@slanndalous",
        github: "spitsfire",
        location: "Oklahoma"
    },
    bioPic: "images/claire.jpg",
    welcomeMessage: "Gonna make sum shit up rn and totally smoke this later yo!!",
    skills: [
        "CELTA Certified", "Japanese as a Second Language", "Experience w/ Excel Formulas and Functions", "Familiar w/ HTML, CSS, C#, Ruby, and JavaScript"
    ]
};
var work = {
    jobs: [{
            employer: "JET Programme",
            url: "https://jetprogramusa.org/",
            title: "Assistant Language Teacher",
            location: "Kamiamakusa, Kumamoto, Japan",
            dates: "Apr 2014 - Aug 2017",
            description: "<strong>Planned</strong> and taught elementary-level English lessons and organized yearly curriculums for six different different elementary and junior high schools. <strong>Organized</strong> and facilitated English teaching workshops each year for over one hundred elementary school teachers in the Kamiamakusa city area. <strong>Taught</strong> frequent English classes that focused on current issues in American politics and the social climate. Some of these classes included racial discrimination after the Civil War and during the Second World War, the Ferguson protests, and the 2016 Presidential race."
        },
        {
            employer: "Digital Land Management Co.",
            url: "http://www.dlmplan.com/",
            title: "Assistant to President",
            location: "Edmond, Oklahoma",
            dates: "Mary 2011 - Apr 2014",
            description: "<strong>Promoted</strong> to personal assistant of the President because of my ability to quickly absorb, understand and apply new theories. Oversaw and executed the majority of his responsibilities with his guidance while he recovered from a serious accident. <strong>Primary</strong> responsibilies included importing large amounts of sensitive data, overseeing client leasing projects, and training clients to use land management software. <strong>Independently</strong> oversaw projects across the country, temporarily relocated to Pittsburgh, PA to provide onsite assistance for clients."
        }
    ]
};
var education = {
    schools: [{
            name: "University of Cambridge's CELTA Program",
            location: "Krakow, Poland",
            degree: "Certified English Language Teacher for Adults",
            dates: "Jan 2012",
            majors: "N/A",
            url: "https://www.britishcouncil.pl/en/celta"
        },
        {
            name: "University of Oklahoma",
            location: "Norman, Oklahoma",
            degree: "Bachelors",
            dates: "Aug 2007 - Dec 2012",
            majors: ["East Asian Studies"],
            url: "https://www.ou.edu/cis/ias/undergrad-academics/majors/asian_studies.html"
        },
        {
            name: "Yamaguchi University",
            location: "Yamaguchi City, Yamaguchi, Japan",
            degree: "Study Abroad",
            dates: "Sept 2010 - Mar 2011",
            majors: ["East Asian Studies"],
            url: "http://www.yamaguchi-u.ac.jp/english.html"
        }
    ],
    onlineCourses: [{
        title: "",
        school: "",
        dates: "",
        url: ""
    }]
};
if (bio.skills) {
    $("#header").append(HTMLskillsStart);
    var displaySkills = bio.skills.forEach(function(skill) {
        var formattedSkills = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkills);
    });
}

var displayEducation = education.schools.forEach(function(edu) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", edu.name);
    var formattedURL = formattedName.replace("#", edu.url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", edu.degree);
    var formattedDates = HTMLschoolDates.replace("%data%", edu.dates);
    var formattedLoc = HTMLschoolLocation.replace("%data%", edu.location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", edu.majors);
    var formattedNameDegree = formattedURL + formattedDegree;
    $(".education-entry:last").append(formattedNameDegree,formattedDates, formattedLoc,formattedMajor);
});

var displayWork = work.jobs.forEach(function(career) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", career.employer);
    var formattedURL = formattedEmployer.replace("#", career.url);
    var formattedTitle = HTMLworkTitle.replace("%data%", career.title);
    var formattedDates = HTMLworkDates.replace("%data%", career.dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", career.location);
    var formattedDescription = HTMLworkDescription.replace("%data%", career.description);
    var formattedEmployerTitle = formattedURL + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle,formattedDates,formattedLocation,formattedDescription);
});
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

var displayProjects = projects.projects.forEach(function(proj) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", proj.title);
    var formattedURL = formattedTitle.replace("#", proj.url);
    var formattedDate = HTMLprojectDates.replace("%data%", proj.date);
    var formattedDescription = HTMLprojectDescription.replace("%data%", proj.description);
    $(".project-entry:last").append(formattedURL, formattedDate, formattedDescription);
    if (proj.images.length > 0) {
        proj.images.forEach(function(img) {
            var formattedProjImage = HTMLprojectImage.replace("%data%", img);
            $(".project-entry:last").append(formattedProjImage);
        });
    }
});

displayEducation();
displayWork();
displayProjects();
