(function () {
  const projects = [
    {
      title: "Forkify-app",
      image: "./img/projects/forkify-app.png",
      imageAlt: "Forkify-app Project Cover Photo",
      description:
        "An online application for users to search for food recipes and create the recipes self own. Every recipe also had the function Calculate the nutrition for those who care about food ingredients.",
      badgeCaption: "Forkify-app",
      links: {
        github: "https://github.com/Zack85219/Recipe-app.git",
        webPage: "https://forkify-app-portfolio.netlify.app",
      },
      accomplishments: [
        "Using Javascript ES6",
        "Create nutrition calculation with Spoonacular API",
        "Connect to third-party recipe searching API",
        "Using MVC model",
      ],
    },
    {
      title: "Secret-app",
      image: "./img/projects/secrete-app.png",
      imageAlt: "Secret-app Project Cover Photo",
      description:
        "An online app built with Node.js, Express, and Mongo DB for sharing people's secrets. You need to sign up for an account to view others' secrets or create your own secret.",
      badgeCaption: "Secret-app",
      links: {
        github: "https://github.com/Zack85219/Secret-app.git",
        webPage: "https://infinite-mesa-99123.herokuapp.com/",
      },
      accomplishments: [
        "MongoDB & Mongoose",
        "Passport Authentication",
        "Front-end & Back-end validation",
        "Using Javascript ES6",
        "Express & Node.js",
      ],
    },
    {
      title: "Keeper-app",
      image: "./img/projects/keeper-app.png",
      imageAlt: "Keeper-app Project Cover Photo",
      description:
        "An online app for keeping notes. The app has functions that create flexible-size notes and delete notes in the recycle bin now. It is still in development. ",
      badgeCaption: "Keeper-app",
      links: {
        github: "https://github.com/Zack85219/Keeper-app.git",
        webPage: "https://zack85219.github.io/Keeper-app/",
      },
      accomplishments: [
        "Using JSX to render elements",
        "Create icons with Material Design icon",
        "Using React components to build app",
        "Using State Hook to update DOM",
      ],
    },
    {
      title: "PayRapid",
      image: "./img/projects/pay-rapid.png",
      imageAlt: "Payrapid Project Cover Photo",
      description:
        "A one-page RWD web for appealing to people to sign up for the mobile payment app. The web page is built with BootStrap and AOS anime.",
      badgeCaption: "PayRapid",
      links: {
        github: "https://github.com/Zack85219/landingPage.git",
        webPage: "https://zack85219.github.io/landingPage/",
      },
      accomplishments: [
        "Using Figma to design the layout and components",
        "Built with BootStrap 5.0.2",
        "AOS animate",
      ],
    },
  ];

  const nav = document.querySelector("nav");
  const navHeight = nav.offsetHeight;
  const skillOffsetHeight = document.getElementById("skill").offsetTop;
  const projectOffsetHeight = document.getElementById("project").offsetTop;
  let skillsAnimated = false;
  let projectPlaced = false;

  // Handle animation end
  function handleAnimationEnd(element, animations) {
    element.classList.remove(...animations);
  }

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) {
      return nav.classList.add("blue-grey", "lighten-3", "shadow");
    }
    nav.classList.remove("blue-grey", "lighten-3", "shadow");
  }

  // Handle skill section animation
  function animateSkills() {
    if (window.pageYOffset + window.innerHeight <= skillOffsetHeight) {
      return;
    }
    const firstSkillSection = document.getElementById(
      "front-end-carousel-item"
    );
    const animations = ["animated", "slideInRight"];
    skillsAnimated = true;
    firstSkillSection.classList.add(...animations);
    firstSkillSection.addEventListener("animationend", () =>
      handleAnimationEnd(event.target, animations)
    );
  }

  // Generate icons of link
  function getIconLinks(links) {
    let icons = ``;
    if (links.github) {
      icons += `<a href=${links.github} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-github"></i></a>`;
    }
    if (links.medium) {
      icons += `<a href=${links.medium} class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i
                  class="fab fa-medium-m"></i></a>`;
    }
    if (links.chrome) {
      icons += `<a href=${links.chrome}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fab fa-chrome"></i></a>`;
    }
    if (links.webPage) {
      icons += `<a href=${links.webPage}
                class="right btn-floating btn-small waves-effect waves-light teal" target="_blank"><i class="fas fa-home"></i></a>`;
    }

    return icons;
  }

  function getAccomplishments(accomplishments) {
    return accomplishments
      .map((point) => `<li><i class="fas fa-caret-right"></i>${point}</li>`)
      .join("");
  }

  // Place all projects into project section
  function placeProjects() {
    // place projects when scroll to project section
    if (window.pageYOffset + window.innerHeight <= projectOffsetHeight) {
      return;
    }
    // get elements
    const projectSection = document.querySelector(".section-project .row");
    // switch status to placed
    projectPlaced = true;
    // generate html for each project
    projects.forEach((project) => {
      // Get all icon links
      const icons = getIconLinks(project.links);
      // Gather all accomplishments
      const accomplishments = getAccomplishments(project.accomplishments);

      projectSection.innerHTML += `
        <div class="col s12 m6 animated flipInX">
          <div class="card sticky-action hoverable">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="responsive-img activator" src=${project.image}
                alt="${project.image} Project Cover Photo">
              <div class="overlay"></div>
              <span class="card-title activator">${project.title}</span>
            </div>
            <div class="card-action">
              <p class="activator truncate"><span class="new badge right activator"
                data-badge-caption="${project.badgeCaption}"></span>${project.title}</p>
            </div>
            <div class="card-reveal">
              <div class="overlay"></div>
              <span class="card-title white-text">Accomplishments<i class="material-icons right">close</i></span>
              <ul class="white-text">
                ${accomplishments}
              </ul>
              <div id="card-reveal-icons">
                ${icons}
              </div>
            </div>
          </div>
        </div>
        <div class="col m5 hide-on-med-and-down offset-m1 valign-wrapper">
          <h5 class="blue-grey-text text-darken-1">${project.title}</h5>
          <span class="blue-grey-text text-lighten-1">${project.description}</span>
        </div>
      `;
    });
  }

  window.addEventListener("scroll", () => {
    animateNav();

    if (!skillsAnimated) {
      animateSkills();
    }
    if (!projectPlaced) {
      placeProjects();
    }
  });
})();
