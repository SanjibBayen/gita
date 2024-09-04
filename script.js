let chapter = 1;
// alert(chapter);
let verse = 1;

// Function to fetch verses based on chapter and verse numbers
function fetchVerse(chapterNumber, verseNumber) {
  fetch(`https://vedicscriptures.github.io/slok/${chapterNumber}/${verseNumber}/`)
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
fetchVerse(chapter, verse);

function fetchslok() {
  verse++;
  const url = `https://vedicscriptures.github.io/chapter/${chapter}/`;

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
