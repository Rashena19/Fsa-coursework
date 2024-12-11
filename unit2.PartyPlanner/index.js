const COHORT = "2409-GHP-ET-WEB-PT";
const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/' + COHORT;

// === State ===

const state = {
  events: [],
};

/** Updates state with events from API (pulling events from API) */
async function getEvent() {
  try {
    const promise = await fetch(API_URL);
    const response = await promise.json();
    if (!response.success) {
      throw response.error;
    }
    state.artists = response.data;
  } catch (error) {
    alert("Unable to load Events");
  }
}

/** Asks the API to create a new artist based on the given `Events` */
async function addEvent(newEvent) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEvent),
    });
    if (!response.ok) {
      throw new Error(
        "Unable to add Event due to Http error: " + response.status
      );
    }
  } catch (error) {
    alert(error.message);
  }
}
/** Asks the API to delete the given event */
async function deleteEvent(event) {
  try {
    const response = await fetch(API_URL + "/" + events.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error(
        "Unable to delete event due to Http error: " + response.status
      );
    }
    render();
  } catch (error) {
    alert(error.message);
  }
}

// === Render ===

/** Renders event from state */
function renderEvent() {
  const eventList = document.querySelector("events");

  if (!state.events.length) {
    eventList.innerHTML = "<li>No events.</li>";
    return;
  }

  const eventCards = state.events.map((event) => {
    const card = document.createElement("li");
    //H1 for Artist Name
    const h1 = document.createElement("h1");
    h1.textContent = newEvent.name;

    //H2 for event Description
    const h2 = document.createElement("h2");
    h2.textContent = newEvent.description;

    //h3 Event Date 
    const eventDate = newDate(event.date).toLocaleString();


    //Button to Delete the Artist
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.display = "block";
    deleteButton.addEventListener("click", async () => {
      await deleteEvent(event);
    });

    card.append(h1, h2, eventDate, deleteButton);
    return card;
  });

  eventList.replaceChildren(...eventCards);
}
/** Syncs state with the API and rerender */
async function render() {
  await getEvent();
  renderEvent();
}

// === Script ===

render();

// Add listener to form
const form = document.getElementById("addEvent");
const eventDate = new Date(form.eventDate.value).toISOString();
form.addEventListener("submit", async (event) => {
  event.preventDefault();


  const event = {
    name: form.eventName.value,
    description: form.description.value,
    date: eventDate,
    location: form.location.value
  };

  await addEvent(event);
  render();
});