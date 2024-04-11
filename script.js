let chepter = 1;
let verse = 1;

// document.getElementById("1s4").addEventListener("click", fetchVerse);
// function fetchVerse(chapterNumber, verseNumber) {
//   chepter = chapterNumber;
//   verse = verseNumber;

for (let i = 1; i <= 18; i++) {
  fetch(`https://bhagavadgitaapi.in/chapter/${i}/`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById(
        `${i}s1`
      ).innerText = ` Chepter: ${data.chapter_number}`;
      document.getElementById(`${i}s2`).innerText = `${data.translation}`;
      document.getElementById(`${i}s3`).innerText = `${data.summary.en}`;
      // document.getElementById("s4").textContent = `${data.siva.et}`;
      document.getElementById(
        `${i}s4`
      ).innerText = `${data.verses_count} verses ->`;
    })
    .catch((error) => console.error("Error:", error));
}

const url = `https://bhagavadgitaapi.in/slok/${chepter}/${verse}/`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("sl1").innerText = ` ${data._id}`;
    document.getElementById("sl3").innerText = `${data.transliteration}`;
    document.getElementById("sl2").innerText = `${data.slok}`;
    document.getElementById("sl4").innerText = `${data.siva.et}`;
    document.getElementById("sl5").innerText = `${data.siva.ec}`;
  })
  .catch((error) => console.error("Error:", error));
// }

function fetchslok() {
  verse = verse + 1;

  const url = `https://bhagavadgitaapi.in/chapter/${chepter}/`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (verse > data.verses_count) {
        verse = 1;
        chepter = chepter + 1;
      }
      const newUrl = `https://bhagavadgitaapi.in/slok/${chepter}/${verse}/`;
      fetch(newUrl)
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("sl1").innerText = ` ${data._id}`;
          document.getElementById(
            "sl3"
          ).textContent = `${data.transliteration}`;
          document.getElementById("sl2").innerText = `${data.slok}`;
          document.getElementById("sl4").innerText = `${data.siva.et}`;
          document.getElementById("sl5").innerText = `${data.siva.ec}`;
        })
        .catch((error) => console.error("Error:", error));
    })
    .catch((error) => console.error("Error:", error));
}

function fetchslok2() {
  if (verse != 1) {
    verse = verse - 1;
  }

  const url3 = `https://bhagavadgitaapi.in/slok/${chepter}/${verse}/`;

  fetch(url3)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("sl1").innerText = ` ${data._id}`;
      document.getElementById("sl3").innerText = `${data.transliteration}`;
      document.getElementById("sl2").innerText = `${data.slok}`;
      document.getElementById("sl4").innerText = `${data.siva.et}`;
      document.getElementById("sl5").innerText = `${data.siva.ec}`;
    })
    .catch((error) => console.error("Error:", error));
}
