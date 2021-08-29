document.getElementById("park-here").addEventListener("click", async (event) => {
  event.preventDefault();

  const loc_id = document.getElementById("location").dataset.loc;
  const message = document.getElementById("park-message")

  const response = await fetch(`/parking/${loc_id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({loc_id})
  })


  if(response.ok) {
    document.location.replace(`/parking/${loc_id}`)
    message.innerText = 'Car parked successfully!'
    message.style.color = "green"
    setTimeout(() => {
      message.innerText = ''
      message.style.color = "black"
    }, 3000)
  } else {
    message.innerText = 'You are already parked here!'
    message.style.color = "red"
    setTimeout(() => {
      message.innerText = ''
      message.style.color = "black"
    }, 3000)
  }
})

document.getElementById("car-list").addEventListener("click", async (event) => {
  if (event.target.id !== "del-btn") {
    return;
  }
  console.dir(event.target);
  const car_id = event.target.dataset.id;
  const loc_id = document.getElementById("location").dataset.loc;
  const message = document.getElementById("park-message")
  console.log("1")

  const response = await fetch(`/uparking/${loc_id}`, {
    method: "PUT",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({car_id})
  })

  if (response.ok) {
    document.location.replace(`/parking/${loc_id}`)
    message.innerText = 'Car successfully removed!'
    message.style.color = "green"
    setTimeout(() => {
      message.innerText = ''
      message.style.color = "black"
    }, 3000)
  } else {
    message.innerText = 'You cannot remove other users cars!'
    message.style.color = "red"
    setTimeout(() => {
      message.innerText = ''
      message.style.color = "black"
    }, 3000)
  }
})