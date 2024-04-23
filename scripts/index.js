const citySelector = document.getElementById("city");
const barangaySelector = document.getElementById("barangay");

async function renderCities() {
  for (const city in citiesBarangaysData) {
    const option = document.createElement("option");
    option.text = city;
    option.value = city;
    const select = document.getElementById("city");
    select.appendChild(option);
  }
}

function handleCityChange(evt) {
  resetBarangayOptions();
  if (!evt.target.value) return;

  const barangays = citiesBarangaysData[evt.target.value] || [];

  for (const barangay of barangays) {
    const option = document.createElement("option");
    option.text = barangay;
    option.value = barangay;
    const select = document.getElementById("barangay");
    select.appendChild(option);
  }

  const firstOption = document.querySelector("#barangay option:first-child");
  firstOption.innerHTML = "Select Barangay";
}

function resetBarangayOptions() {
  const resetOption = '<option value="" selected>Select City First</option>';
  barangaySelector.innerHTML = resetOption;
}

renderCities();
citySelector.addEventListener("change", handleCityChange);
