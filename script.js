const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toggleScreen = () => {
  wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toggleScreen);
backBtn.addEventListener("click", toggleScreen);

const addTaskBnt = document.querySelector(".add-task-btn");
const addTaskForm = document.querySelector(".add-task");
const blackBackdrop = document.querySelector(".black-backdrop");

const toggleAddTaskForm = () => {
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
    img: "user-1.jpg",
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
    category: "Coding",
    completed: false,
  },
  {
    id: 5,
    task: "Do a 20-minute workout",
    category: "Fitness",
    completed: false,
  },
  {
    id: 6,
    task: " Take a 30-minute walk",
    category: "Health",
    completed: false,
  },
  {
    id: 7,
    task: "Watch an educational video online",
    category: "Educational",
    completed: false,
  },
  {
    id: 8,
    task: "Review monthly budget",
    category: "Finance",
    completed: false,
  },
  {
    id: 9,
    task: "Buy groceries for the week",
    category: "Shopping",
    completed: false,
  },
  {
    id: 10,
    task: "Write in a journal",
    category: "Personal",
    completed: false,
  },
  {
    id: 11,
    task: "Try a new healthy recipe",
    category: "Health",
    completed: false,
  },
  {
    id: 12,
    task: "Attend a yoga class",
    category: "Fitness",
    completed: false,
  },
  {
    id: 13,
    task: "Buy new clothes ",
    category: "Shopping",
    completed: false,
  },
  {
    id: 14,
    task: "Set up automatic bill payments",
    category: "Finance",
    completed: false,
  },
  {
    id: 15,
    task: "Read an article about a new topic",
    category: "Personal",
    completed: false,
  },
];

let selectCategory = categories[0];

const categoriesContainer = document.querySelector(".categories");
const categoryTitle = document.querySelector(".category-title");
const categoryTasks = document.querySelector(".category-tasks");
const categoryImg = document.querySelector("#category-img");

const calculateTotal = () => {
  const categoryTasks = tasks.filter(
    (task) => task.category.toLowerCase() === selectCategory.title.toLowerCase()
  );
  categoryTasks.innerHTML = "${categoryTasks.length} tasks";
};

const renderCategories = () => {
  categoriesContainer.innerHtml = "";
  categories.forEach((category) => {
    // get all the tasks of current category
    const categoryTasks = tasks.filter(
      (task) =>
        task.category.toLowerCase() === selectCategory.title.toLowerCase()
    );

    // create a div to render category
    const div = document.createElement("div");
    div.classList.add("category");
    div.addEventListener("click", () => {
      wrapper.classList.add("show-category");
      selectCategory = category;
      categoryTitle.innerHTML = categoryTitle;
      categoryImg.src = "image/${category.img}";
    });
    div.innerHTML = `
                        <div class="left"> 
                        <img src="images/${category.img}"
                          alt="${category.title}" />
                          <div class="content">
                            <h2>"${category.title}"</h2>
                            <p>"${categoryTasks.length}" Tasks</p>
                          </div>
                          </div>
                                <div class="options">
                                  <div class="toggle-btn">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                  </div>
                                </div>
                                `;

    categoriesContainer.appendChild(div);
  });
};

renderCategories();
