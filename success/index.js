const nameText = document.getElementById("name");

function handleDocumentLoad() {
  const urlParams = new URLSearchParams(window.location.search);
  const firstName = urlParams.get("first-name");
  const lastName = urlParams.get("last-name");

  if (urlParams.size === 0) window.location.href = "/";
  nameText.innerText = firstName + " " + lastName;
}

handleDocumentLoad();
