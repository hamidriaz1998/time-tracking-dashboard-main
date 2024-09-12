let selectedFilter =
  document.querySelector(".selected-filter") ||
  document.querySelector(".filter");

function createCard(data) {
  let hrs;
  if (selectedFilter.textContent === "Daily") {
    hrs = data.timeframes.daily;
  } else if (selectedFilter.textContent === "Weekly") {
    hrs = data.timeframes.weekly;
  } else if (selectedFilter.textContent === "Monthly") {
    hrs = data.timeframes.monthly;
  }
  let card = document.createElement("div");
  card.className = `card relative rounded-2xl z-10 pt-4 overflow-hidden bg-primary-${data.color} lg:max-w-72`;
  card.id = data.title;
  card.innerHTML = `<img
    src="images/${data.icon}.svg"
      alt="${data.title}-icon"
      class="right-4 -top-1 absolute"
  />
  <div
      class="grid grid-rows-2 bg-neutral-dark_blue rounded-2xl z-20 mt-6 relative gap-4 p-4 min-[375px]:p-6 min-[375px]:gap-6 lg:gap-0 lg:p-5 "
  >
      <div class="text-white flex items-center justify-between">
          <h2 class="text-[18px] font-medium">${data.title}</h2>
          <img
              src="images/icon-ellipsis.svg"
              alt="More Options"
              class="w-5"
          />
      </div>
      <div
          class="text-neutral-pale_blue flex justify-between items-center gap-6 lg:flex-col lg:items-start"
      >
        <p class="font-normal text-2xl text-white lg:text-4xl" id="current">${hrs.current}hrs</p>
        <p id="previous" class="text-sm">Last Week - ${hrs.previous}hrs</p>
      </div>
  </div>`;
  document.querySelector(".dashboard").appendChild(card);
}

let data = fetch("./data.json")
  .then((request) => {
    if (!request.ok) {
      console.error("Error fetching data");
      return null;
    }
    return request.json();
  })
  .then((data) => {
    data.forEach((item) => {
      createCard(item);
    });
  });

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", (e) => {
    selectedFilter.classList.remove("selected-filter");
    selectedFilter = e.target;
    selectedFilter.classList.add("selected-filter");
  });
});
