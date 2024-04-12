// Function to handle button click event
function buttonClickHandler(chapterId) {
  // Redirect to main.html with chapter id as query parameter
  window.location.href = `script.js?chapter=${chapterId}`;
}

// Fetch data for all chapters
for (let i = 1; i <= 18; i++) {
  fetch(`https://bhagavadgitaapi.in/chapter/${i}/`)
    .then((response) => response.json())
    .then((data) => {
      // Create the chapter element
      var div = document.createElement("div");
      div.className = "chepters";

      // Create the heading element
      var heading = document.createElement("div");
      heading.className = "heading";
      var h2 = document.createElement("h2");
      h2.className = "sloka";
      h2.id = `${i}s1`;
      h2.textContent = `Chapter: ${data.chapter_number}`;
      heading.appendChild(h2);

      // Create the chapter name and description elements
      var chname = document.createElement("div");
      chname.className = "chname";
      var h2_2 = document.createElement("h2");
      h2_2.className = "sloka";
      h2_2.id = `${i}s2`;
      h2_2.textContent = `${data.translation}`;
      var br1 = document.createElement("br");
      var h3 = document.createElement("h3");
      h3.className = "sloka1";
      h3.id = `${i}s3`;
      h3.textContent = `${data.summary.en}`;
      var br2 = document.createElement("br");
      chname.appendChild(h2_2);
      chname.appendChild(br1);
      chname.appendChild(h3);
      chname.appendChild(br2);

      // Create the button element
      var menu = document.createElement("div");
      menu.className = "menu";
      var button = document.createElement("button");
      button.onclick = () => buttonClickHandler(i); // Call buttonClickHandler with chapter id as parameter
      button.className = "btn";
      var a = document.createElement("a");
      a.href = "main.html"; // Replace with actual link
      a.className = "abc1";
      var h4 = document.createElement("h4");
      h4.className = "sloka";
      h4.id = `${i}s4`;
      h4.textContent = `${data.verses_count} verses`;
      a.appendChild(h4);
      button.appendChild(a);
      menu.appendChild(button);

      // Append all elements to the parent div
      div.appendChild(heading);
      div.appendChild(chname);
      div.appendChild(menu);
      document.querySelector(".main").appendChild(div);
    })
    .catch((error) => console.error("Error:", error));
}
