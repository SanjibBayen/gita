// Fetch data
let chapter = 1;
// alert(chapter);
let verse = 1;
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
      ).innerText = `${data.verses_count} verses`;
    })

    .catch((error) => console.error("Error:", error));
}

// function reverse() {
//   alert("hi");
//   document.getElementById("m").style.display = "flex";
//   document.getElementById("n").style.display = "flex";
//   document.getElementById("s").style.display = "none";
// }

// Function to fetch verses based on chapter and verse numbers

function fetchVerse(chapterNumber, verseNumber) {
  chapter = chapterNumber;
  verse = verseNumber;
  document.getElementById("m").style.display = "none";
  //   document.getElementById("n").style.display = "none";
  document.getElementById("s").style.display = "flex";
  console.log(chapter, verse);
  fetch(`https://bhagavadgitaapi.in/slok/${chapterNumber}/${verseNumber}/`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("sl1").innerText = `${data._id}`;
      document.getElementById("sl2").innerText = `${data.slok}`;
      document.getElementById("sl3").innerText = `${data.transliteration}`;
      document.getElementById("sl4").innerText = `${data.siva.et}`;
      document.getElementById("sl5").innerText = `${data.siva.ec}`;
    })
    .catch((error) => console.error("Error:", error));
}

// Initial fetch for first chapter and verse
document.getElementById("btn").addEventListener("click", function () {
  fetchVerse(chapter, verse);
});

function fetchslok() {
  verse++;
  const url = `https://bhagavadgitaapi.in/chapter/${chapter}/`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (verse > data.verses_count) {
        verse = 1;
        chapter = chapter + 1;
      }
      fetchVerse(chapter, verse);
    })
    .catch((error) => console.error("Error:", error));
}

function fetchslok2() {
  if (verse > 1) {
    verse--;
    fetchVerse(chapter, verse);
  }
}

function chap() {
  document.getElementById("m").style.display = "flex";
}
