// script.js

document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".wrapper");
  const categoryScreen = document.querySelector(".category-screen");
  const backBtn = document.querySelector(".back-btn");
  const addTaskBtn = document.querySelector(".add-task-btn");
  const addTaskForm = document.querySelector(".add-task");
  const cancelBtn = document.querySelector(".cancel-btn");
  const blackBackdrop = document.querySelector(".black-backdrop");
  const addBtn = document.querySelector(".add-btn");
  const taskInput = document.getElementById("task-input");
  const categorySelect = document.getElementById("category-select");
  const tasksWrapper = document.querySelector(".tasks");
  const totalTaskDisplay = document.querySelector(".totalTask");
  const categoryTasks = document.querySelector(".category-tasks");

  let taskCount = 1;

  // Toggle task form
  addTaskBtn.addEventListener("click", () => {
    addTaskBtn.classList.toggle("active");
    addTaskForm.classList.toggle("active");
    blackBackdrop.classList.toggle("active");
  });

  // Cancel task form
  cancelBtn.addEventListener("click", () => {
    addTaskBtn.classList.remove("active");
    addTaskForm.classList.remove("active");
    blackBackdrop.classList.remove("active");
    taskInput.value = "";
  });

  // Add new task
  addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const newTask = document.createElement("div");
    newTask.classList.add("task-wrapper");
    newTask.innerHTML = `
          <label class="task">
              <input type="checkbox">
              <span class="checkmark"><i class='bx bx-check'></i></span>
              <p>${taskText}</p>
          </label>
          <div class="delete"><i class='bx bx-trash'></i></div>
      `;
    tasksWrapper.appendChild(newTask);

    taskCount++;
    updateTaskCounts();

    // Clear form
    taskInput.value = "";
    addTaskBtn.classList.remove("active");
    addTaskForm.classList.remove("active");
    blackBackdrop.classList.remove("active");
  });

  // Delete a task
  tasksWrapper.addEventListener("click", (e) => {
    if (e.target.closest(".delete")) {
      e.target.closest(".task-wrapper").remove();
      taskCount = Math.max(0, taskCount - 1);
      updateTaskCounts();
    }
  });

  // Back button to show category screen
  backBtn.addEventListener("click", () => {
    wrapper.classList.remove("show-category");
  });

  // Update task count display
  function updateTaskCounts() {
    totalTaskDisplay.textContent = taskCount;
    categoryTasks.textContent = `${taskCount} Tasks`;
  }

  // Demo: Show task screen on page load
  setTimeout(() => {
    wrapper.classList.add("show-category");
  }, 500);
});
