//  Select Elements
const eventForm = document.getElementById("eventForm");
const eventList = document.getElementById("eventList");
const clearBtn = document.getElementById("clearBtn");
const keyName = document.getElementById("keyName");

// Handle Form Submission (Add Event)
eventForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop page refresh

  // Get values
  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;

  // Create a new element
  const eventDiv = document.createElement("div");
  eventDiv.className = "event-item";
  eventDiv.innerHTML = `
        <strong>${title}</strong> - <small>${category}</small><br>
        Date: ${date}
    `;

  // Remove "Empty" message if it's the first event
  if (eventList.querySelector(".empty-msg")) {
    eventList.innerHTML = "";
  }

  // Add to list
  eventList.appendChild(eventDiv);

  // Clear form
  eventForm.reset();
});

// Clear All Events
clearBtn.addEventListener("click", () => {
  eventList.innerHTML =
    '<p class="empty-msg">No events yet. Add your first event!</p>';
});

//  DOM Manipulation Demo Logic
const htmlOut = document.getElementById("htmlOut");
const textOut = document.getElementById("textOut");
const contentOut = document.getElementById("contentOut");

const sampleStr = "<strong>Bold Text</strong> with spaces   ";

htmlOut.innerHTML = `innerHTML: ${sampleStr} (Renders tags)`;
textOut.innerText = `innerText: ${sampleStr} (Ignores tags/extra space)`;
contentOut.textContent = `textContent: ${sampleStr} (Shows raw content/spaces)`;

//  Keydown Interaction
document.addEventListener("keydown", (event) => {
  keyName.innerText = event.key;
});
