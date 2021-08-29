document.getElementById("park-here").addEventListener("click", async (event) => {
  event.preventDefault();

  const loc_id = document.getElementById("location").dataset.loc;

  const response = await fetch(`/parking/${loc_id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({loc_id})
  })



  if(response.ok) {
    document.location.replace(`/parking/${loc_id}`)
  }
})