const wrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".menu-btn");
const backBtn = document.querySelector(".back-btn");


const toggleScreen = () => {
  wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBnt = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm =() => {
  addTaskForm.classList.toggle("active");
  blackBackdrop.classList.toggle("active");
  addTaskBnt.classList.toggle("active");

};
 
addTaskBnt.addEventListener("click", toggleAddTaskForm);
blackBackdrop.addEventListener("click", toggleAddTaskForm);


// lets add categories and tasks with js

let categories = [
  {
    title: "Personal",
    img: "user.jpg",
  },
  {
    title: "Work",
    img: "briefcase.jpg",
  },
  {
    title: "Shopping",
    img: "shopping-bag.jpg",
  },
  {
    title: "Health",
    img: "health.jpg",
  },
  {
    title: "Fitness",
    img: "fitness.jpg",
  },
  {
    title: "Education",
    img: "education.jpg",
  },
  {
    title: "Finance",
    img: "finance.jpg",
  },
  
];
 
let tasks = [
  {
    id: 1,
    task: "Go to market",
    category: "Shopping",
    completed: false,
  },
  {
    id: 2,
    task: "Read chapter of a book",
    category: "Personal",
    completed: false,
  },
  {
    id: 3,
    task: "Prepare presentation for meeting",
    category: "Work",
    completed: false,
  },
  {
    id: 4,
    task: "Complete coding challenge",
    category: "Personal",
    completed: false,
  },
  {
    id: 5,
    task: "Do a 20-",
    category: "Personal",
    completed: false,
  },
  {
    id: 6,
    task: "Read chapter of a book",
    category: "Personal",
    completed: false,
  },
];


