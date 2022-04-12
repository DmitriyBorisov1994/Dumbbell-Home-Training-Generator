class Exersice {
  constructor(
    title,
    movementGroup,
    bodyGroup,
    picURL,
    id,
    description,
    container = ".exersiceList",
    intensity = "hard"
  ) {
    this.title = title;
    this.movementGroup = movementGroup;
    this.bodyGroup = bodyGroup;
    this.picURL = picURL;
    this.id = id;
    this.description = description;
    this.container = document.querySelector(container);
    this.intensity = intensity;
  }
  get intensity() {
    return this._intensity;
  }
  set intensity(value) {
    if (value == "hard") {
      this._intensity = "6-9 sets 3-6 reps";
    }
    if (value == "medium") {
      this._intensity = "3-6 sets 6-10 reps";
    }
    if (value == "light") {
      this._intensity = "1-3 sets 10-15 reps";
    }
  }
  render() {
    this.container.insertAdjacentHTML(
      "afterbegin",
      `<li class='exersiceList__item'>
         <div class='item__info'>
            <div class='img'><img src = '${this.picURL}' alt='exersice' id='img${this.id}'></div>
            <div class='info__wrapper'>
               <h2>${this.title}</h2>
               <div class='info__parameters'>
                  <div class='item__focus'>${this.movementGroup},&nbsp</div>
                  <div class='item__intensity'>${this.intensity}</div>
               </div>
            </div>
         </div>
         <div class='item__intensity__changer'>
            <h2>Intensity</h2>
            <div class='intensity__changer'>
               <span class='changer${this.id}'>light</span>
               <span class='changer${this.id}'>medium</span>
               <span class='changer${this.id}'>hard</span>
            </div>
         </div>
      </li>
      <div class='item__description description${this.id}'>
         <div class = 'description__text'>${this.description}</div>
         <div class = 'description__pic'><img src = '${this.picURL}' alt='exersice' id='img${this.id}'></div>
      </div>`
    );
    this.intensityBlock = this.container.querySelector(`.item__intensity`);

    this.intensityChangers = this.container.querySelectorAll(
      `.changer${this.id}`
    );
    this.intensityChangers.forEach((changer) =>
      changer.addEventListener("click", () => {
        const currentView = changer.innerText.trim().toLowerCase();
        this.changeIntensity(currentView);
      })
    );

    this.descriptionShow = this.container.querySelector(`#img${this.id}`);
    this.descriptionBox = this.container.querySelector(
      `.description${this.id}`
    );
    this.descriptionShow.addEventListener("click", () => {
      this.descriptionBox.classList.toggle("displayDescription");
      this.descriptionBox.scrollIntoView({ behavior: "smooth" });
    });
  }
  changeIntensity(val) {
    this.intensity = val.toLowerCase();
    this.intensityBlock.innerText = `${this.intensity}`;
  }
}
//-----------------------Упражнения---------------------------------------
let exersices = [
  [
    new Exersice(
      "Dumbbell military press",
      "Shoulders",
      "upperbody",
      "../images/dumbbellMilitaryPress.png",
      1,
      "The standing dumbbell shoulder press is a classic deltoid-building exercise that is common in gyms around the world. Performing the move standing up as opposed to seated allows more weight to be used and taxes the core more than seated presses. The standing press is worthy of being the main movement in a muscle-building shoulder workout, but is also a great strength movement and accessory for the bench press."
    ),
    new Exersice(
      "Dumbbell floor press",
      "Chest",
      "upperbody",
      "../images/dumbbellFloorPress.png",
      2,
      "The dumbbell floor press limits the range of motion you would achieve with a regular dumbbell bench press, but still targets the chest, triceps, and anterior delts. This allows you to build strength in the top portion of the lift and work on strengthening the shoulder stabilizers."
    ),
    new Exersice(
      "Singlehand military press",
      "Shoulders",
      "upperbody",
      "../images/singleHanddumbbellPress.png",
      3,
      "The single-arm standing shoulder press is a popular exercise to build size and strength the shoulders and triceps. Most lifters find they can go heavier (per arm) on this movement than if they are pressing two dumbbells simultaneously, making it an effective strength movement as well as a muscle-building movement in higher reps."
    ),
    new Exersice(
      "Single arm dumbbell floor press",
      "Chest",
      "upperbody",
      "../images/singleArmDumbbellFloorPress.png",
      4,
      "The single-arm dumbbell floor press is a multijoint pressing exercise performed lying on the floor, either with the knees bent or straight. It has less range of motion than a regular dumbbell bench press, but still targets the chest, triceps, and anterior delts. By performing it with one arm, you can strengthen weakness on certain sides or simply use it as a way to challenge the core more during this exercise."
    ),
  ],
  [
    new Exersice(
      "Dumbbell row",
      "Middle Back",
      "upperbody",
      "../images/dumbbellRow.png",
      5,
      "The dumbbell bent-over row is a popular exercise to develop and strengthen the muscles of the upper and middle back, like the latissimus (lat), lower trapezius, and rear deltoids. It can work equally well in strength, muscle-building, or circuit-style fat-loss workouts"
    ),
    new Exersice(
      "Dumbbell row with elbow out",
      "Shoulders",
      "upperbody",
      "../images/dumbbellRowElbowOut.png",
      6,
      "Popular upper-body exercise that targets the muscles on the backside of the shoulder joint, specifically the medial and rear heads of the deltoid. Since pressing movements build the front and (to a lesser degree) side deltoid heads, this move is often done to promote balanced shoulder development."
    ),
    new Exersice(
      "Singlehand dumbbell row",
      "row",
      "upperbody",
      "../images/singleHandDumbbellRow.png",
      7,
      "The single-arm bench dumbbell row is a popular exercise for building the latissimus dorsi, or lat, muscles of the back. The bench is used for support during the rowing motion."
    ),
    new Exersice(
      "Renegade row",
      "Lats",
      "upperbody",
      "../images/dumbbellRenegadeRow.png",
      8,
      "The dumbbell renegade row combines rowing and core training into a single difficult movement. It's popular in time-efficient strength and muscle-building workouts, as well as in circuit-style training."
    ),
  ],
  [
    new Exersice(
      "Static lunge",
      "Quadriceps",
      "lowerbody",
      "../images/dumbbellLunge.png",
      9,
      "The dumbbell split squat is a popular lower-body exercise to build strength and muscle one leg at a time. It can be used to teach proper lunge form, but is also valuable on its own when trained in traditional strength-focused rep ranges, such as 5-8 reps per set, or for higher reps to build muscle or for conditioning"
    ),
    new Exersice(
      "Dynamic lunge",
      "Quadriceps",
      "lowerbody",
      "../images/dynamicDumbbellLunge.png",
      10,
      "The dumbbell walking lunge tests your ability to maintain balance while challenging the quads, glutes, and hamstrings as well as core muscles."
    ),
    new Exersice(
      "Bulgarian split squad",
      "Quadriceps",
      "lowerbody",
      "../images/bulgarianSplitSquad.png",
      11,
      "The dumbbell Bulgarian split squat is a single-leg exercise targeting the quads, glutes, and hamstrings."
    ),
  ],
  [
    new Exersice(
      "Stiff-legged dumbbell deadlift",
      "Hamstrings",
      "lowerbody",
      "../images/stiffLeggedDumbbellDeadlift.png",
      12,
      "The dumbbell stiff-legged deadlift targets the hamstrings, glutes, low and upper back, as well as the core. The purpose of the stiff-legged is to engage the hamstrings and low back to an even greater degree."
    ),
    new Exersice(
      "Dumbbell skier",
      "Lower Back",
      "lowerbody",
      "../images/dumbbellSkier.png",
      13,
      "As the name suggests, the dumbbell skier takes the motion of skiing and replaces the poles with dumbbells. The hip and torso motion are similar to a kettlebell swing, as are the muscles it targets, including the hamstrings, glutes, upper back, and grip. However, unlike the traditional kettlebell swing, the arms are outside of the knees."
    ),
    new Exersice(
      "Dumbbell Kickstand Deadlift",
      "lower back",
      "lowerbody",
      "../images/dumbbellKickstandDeadlift.png",
      14,
      "The dumbbell kickstand deadlift is a movement targeting the muscles of the hamstrings, glutes, and back. The kickstand position can help focus the stretch and contraction on each individual leg, similar to a single-leg Romanian deadlift, while presenting less of a balance challenge."
    ),
  ],
  [
    new Exersice(
      "Dumbbell front squat",
      "Quadriceps",
      "lowerbody",
      "../images/dumbbellFrontSquat.png",
      15,
      "The dumbbell front squat is a popular exercise for targeting the muscles of the lower body, including the quadriceps, glutes, and hamstrings. Holding dumbbells in the racked position also works the core and upper-back muscles to maintain posture while the lower body moves. If this movement hurts your knees, try performing it with a wider stance."
    ),
    new Exersice(
      "Dumbbell squat",
      "Quadriceps",
      "lowerbody",
      "../images/dumbbellSquat.png",
      16,
      "The dumbbell squat is a classic lower-body exercise that targets the quadriceps, hamstrings, and glutes."
    ),
    new Exersice(
      "Dumbbell sumo squat",
      "Quadriceps",
      "lowerbody",
      "../images/dumbbellSumoSquat.png",
      17,
      "The dumbbell sumo squat is a popular lower-body movement using a single dumbbell held in front of the legs. It is performed with a wider than shoulder-width stance, which increases the demand on the glutes, hamstrings, and adductors while still benefiting the quads, core, and upper body."
    ),
  ],
];
//------------------------------------------------------------------------------
function displayUpperBody() {
  let container = document.querySelector(".exersiceList");
  container.innerHTML = "";
  let currentExercises = exersices
    .map((item) => item[Math.floor(Math.random() * item.length)])
    .filter((item) => item.bodyGroup === "upperbody")
    .sort((a, b) => {
      return a.id - b.id;
    });
  currentExercises.forEach((item) => {
    item.render();
  });
  container.scrollIntoView({ behavior: "smooth" });
}

function displayLowerBody() {
  let container = document.querySelector(".exersiceList");
  container.innerHTML = "";
  let currentExercises = exersices
    .map((item) => item[Math.floor(Math.random() * item.length)])
    .filter((item) => item.bodyGroup === "lowerbody")
    .sort((a, b) => {
      return a.id - b.id;
    });

  currentExercises.forEach((item) => {
    item.render();
  });

  container.scrollIntoView({ behavior: "smooth" });
}

function displayFullBody() {
  let container = document.querySelector(".exersiceList");
  container.innerHTML = "";
  let currentExercises = exersices
    .map((item) => item[Math.floor(Math.random() * item.length)])
    .sort((a, b) => {
      return a.id - b.id;
    });

  currentExercises.forEach((item) => {
    item.render();
  });

  container.scrollIntoView({ behavior: "smooth" });
}

let chooseBtns = Array.from(document.querySelectorAll(".form__item h3"));
chooseBtns.forEach((btn) => {
  btn.onclick = () => {
    btn.nextElementSibling.checked = true;
    if (
      btn.nextElementSibling.checked == true &&
      btn.nextElementSibling.value == "upperbody"
    ) {
      displayUpperBody();
    }
    if (
      btn.nextElementSibling.checked == true &&
      btn.nextElementSibling.value == "lowerbody"
    ) {
      displayLowerBody();
    }
    if (
      btn.nextElementSibling.checked == true &&
      btn.nextElementSibling.value == "fullbody"
    ) {
      displayFullBody();
    }
  };
});

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    right: box.right + window.pageXOffset,
    bottom: box.bottom + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

let faqButton = document.getElementById("faqButton");

faqButton.addEventListener("click", () => {
  let elem = document.querySelector(".header");
  let message = document.querySelector(".section__FAQ");

  let coords = getCoords(elem);

  message.style.left = coords.left + "px";
  message.style.top = coords.bottom + "px";

  message.hidden = !message.hidden;
});
