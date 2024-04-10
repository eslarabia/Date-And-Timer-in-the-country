let span = document.querySelectorAll("span");
let Timing = document.querySelector(".parent");
let paragraph = document.querySelector("p");

let btnThree = document.querySelector(".three");
let btnTwo = document.querySelector(".two");
let btnOne = document.querySelector(".one");

let country = document.querySelector(".Country div");
let countryImg = document.querySelector(".Country img");

span[1].style.display = "none";
span[2].style.display = "none";

// Timer in Egypt

let myFunc = function () {
  let date = new Date();

  let hour = date.getHours(); // 0 - 23
  let minutes = date.getMinutes(); // 0 - 59
  let second = date.getSeconds(); // 0 - 59
  let flag = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour -= 12;
    flag = "PM";
  }

  (hour < 10) ? hour = "0" + hour : false;
  (minutes < 10) ? minutes = "0" + minutes : false;
  (second < 10) ? second = "0" + second : false;

  span[0].innerHTML = `${hour} : ${minutes} : ${second}  ${flag}`;

  setTimeout(function () {
    myFunc();
  }, 1000);
};

myFunc();

// Date

let parent = dayjs(Timing.dataset.data).format("dddd, MMM M / D / YYYY");
paragraph.innerHTML = parent;

// Timer in Saudi arabia

btnThree.addEventListener("click", function () {
  span[0].style.display = "none";
  span[1].style.display = "block";
  span[2].style.display = "none";

  let myFunc = function () {
    let date = new Date();

    let hour = date.getHours() + 1; // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let flag = "AM";

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour -= 12;
      flag = "PM";
    }

    (hour < 10) ? hour = "0" + hour : false;
    (minutes < 10) ? minutes = "0" + minutes : false;
    (second < 10) ? second = "0" + second : false;

    span[1].innerHTML = `${hour} : ${minutes} : ${second}  ${flag}`;

    setTimeout(function () {
      myFunc();
    }, 1000);
  };

  myFunc();

  country.innerHTML = "Timer In Saudi Arabia";
  countryImg["src"] = "R.jpeg";
});

// Timer in Egypt

btnOne.addEventListener("click", function () {
  span[0].style.display = "block";
  span[1].style.display = "none";
  span[2].style.display = "none";

  let myFunc = function () {
    let date = new Date();

    let hour = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let flag = "AM";

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour -= 12;
      flag = "PM";
    }

    (hour < 10) ? hour = "0" + hour : false;
    (minutes < 10) ? minutes = "0" + minutes : false;
    (second < 10) ? second = "0" + second : false;

    span[0].innerHTML = `${hour} : ${minutes} : ${second}  ${flag}`;

    setTimeout(function () {
      myFunc();
    }, 1000);
  };

  myFunc();

  country.innerHTML = "Timer In Egypt";
  countryImg["src"] = "علم-مصر.jpg";
});

// Timer in Palestine

btnTwo.addEventListener("click", function () {
  span[0].style.display = "none";
  span[1].style.display = "none";
  span[2].style.display = "block";

  let myFunc = function () {
    let date = new Date();

    let hour = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let flag = "AM";

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour -= 12;
      flag = "PM";
    }

    (hour < 10) ? hour = "0" + hour : false;
    (minutes < 10) ? minutes = "0" + minutes : false;
    (second < 10) ? second = "0" + second : false;

    span[2].innerHTML = `${hour} : ${minutes} : ${second}  ${flag}`;

    setTimeout(function () {
      myFunc();
    }, 1000);
  };

  myFunc();

  country.innerHTML = "Timer In Palestine";
  countryImg["src"] = "shutterstock_1975087202-2048x1080.jpg";
});

let timer = document.querySelector(".timer");

span[0].addEventListener("click", function () {
  timer.classList.add("active");
  span[0].style.display = "none";
  span[2].style.display = "none";
  span[1].style.display = "none";

  span[3].style.display = "block";
  span[4].style.display = "none";
  span[5].style.display = "none";

  let myFunc = function () {
    let date = new Date();

    let hour = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let flag = "AM";

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour -= 12;
      flag = "PM";
    }

    (hour < 10) ? hour = "0" + hour : false;
    (minutes < 10) ? minutes = "0" + minutes : false;
    (second < 10) ? second = "0" + second : false;

    span[3].innerHTML = `${hour} : ${minutes} : ${second}  ${flag}`;

    setTimeout(function () {
      myFunc();
    }, 1000);
  };

  myFunc();

  timer.addEventListener("click", function () {
    timer.classList.remove("active");
    span[0].style.display = "block";
    span[2].style.display = "none";
    span[1].style.display = "none";
  });
});

span[2].addEventListener("click", function () {
  timer.classList.add("active");
  span[2].style.display = "none";
  span[0].style.display = "none";
  span[1].style.display = "none";

  span[3].style.display = "none";
  span[4].style.display = "block";
  span[5].style.display = "none";

  let myFunc = function () {
    let date = new Date();

    let hour = date.getHours(); // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let flag = "AM";

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour -= 12;
      flag = "PM";
    }

    (hour < 10) ? hour = "0" + hour : false;
    (minutes < 10) ? minutes = "0" + minutes : false;
    (second < 10) ? second = "0" + second : false;

    span[4].innerHTML = `${hour} : ${minutes} : ${second}  ${flag}`;

    setTimeout(function () {
      myFunc();
    }, 1000);
  };

  myFunc();

  timer.addEventListener("click", function () {
    timer.classList.remove("active");
    span[2].style.display = "block";
    span[0].style.display = "none";
    span[1].style.display = "none";
  });
});

span[1].addEventListener("click", function () {
  timer.classList.add("active");
  span[2].style.display = "none";
  span[0].style.display = "none";
  span[1].style.display = "none";

  span[5].style.display = "block";
  span[3].style.display = "none";
  span[4].style.display = "none";

  let myFunc = function () {
    let date = new Date();

    let hour = date.getHours() + 1; // 0 - 23
    let minutes = date.getMinutes(); // 0 - 59
    let second = date.getSeconds(); // 0 - 59
    let flag = "AM";

    if (hour == 0) {
      hour = 12;
    }

    if (hour > 12) {
      hour -= 12;
      flag = "PM";
    }

    (hour < 10) ? hour = "0" + hour : false;
    (minutes < 10) ? minutes = "0" + minutes : false;
    (second < 10) ? second = "0" + second : false;

    span[5].innerHTML = `${hour} : ${minutes} : ${second}  ${flag}`;


    setTimeout(function () {
      myFunc();
    }, 1000);
  };

  myFunc();

  timer.addEventListener("click", function () {
    timer.classList.remove("active");
    span[2].style.display = "none";
    span[1].style.display = "block";
    span[0].style.display = "none";
  });
});