const form = document.getElementById("job-form");
const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");
const statusSelect = document.getElementById("status");
const jobList = document.getElementById("job-list");

let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

function saveJobs() {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}

function renderJobs() {
  jobList.innerHTML = "";

  jobs.forEach((job, index) => {
    const li = document.createElement("li");
    li.textContent = `${job.company} - ${job.role} (${job.status})`;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      jobs.splice(index, 1);
      saveJobs();
      renderJobs();
    });

    li.appendChild(deleteBtn);
    jobList.appendChild(li);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const job = {
    company: companyInput.value,
    role: roleInput.value,
    status: statusSelect.value,
  };

  if (!job.company || !job.role) return;

  jobs.push(job);
  saveJobs();
  renderJobs();

  companyInput.value = "";
  roleInput.value = "";
  statusSelect.value = "Applied";
});

renderJobs();
