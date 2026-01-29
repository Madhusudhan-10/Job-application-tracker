const form = document.getElementById("job-form");
const companyInput = document.getElementById("company");
const roleInput = document.getElementById("role");
const statusSelect = document.getElementById("status");
const jobList = document.getElementById("job-list");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const company = companyInput.value;
  const role = roleInput.value;
  const status = statusSelect.value;

  if (company === "" || role === "") return;

  const li = document.createElement("li");
  li.textContent = `${company} - ${role} (${status})`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.marginLeft = "10px";

  deleteBtn.addEventListener("click", function () {
    jobList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  jobList.appendChild(li);

  companyInput.value = "";
  roleInput.value = "";
  statusSelect.value = "Applied";
});
