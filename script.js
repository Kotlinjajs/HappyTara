const notes = [
  { color: '#fff9b1', text: 'سلام تارا، تولدت مبارک<br>امیدوارم موقع خوندن این متن در بهترین حالت باشی<br>و روز تولدت جزو بهترین روز های زندگیت باشه <br><b>دوستت دارم، تولدت مبارک</b>' },
  { color: '#def7a1', text: 'شرمنده که چیز های خارقلاده ای اینجا نیست، دوست داشتم بهتر باشه<br>امیدوارم خوشت بیاد<br><br>دوست داشتم کنارت باشم و بهت تبریک بگم، بهرحال نشد، شاید بعدا' },
  { color: '#ffc000', text: '<b>دوستت دارم<br>شکر برای وجودت<br>تو یک معجزه هستی<br></b>♡♡♡' },
  // Add more notes here...
];

let currentNoteIndex = 0;

function nextNote() {
  const note = document.getElementById('note');
  note.classList.add('clicked');

  setTimeout(() => {
    currentNoteIndex = (currentNoteIndex + 1) % notes.length;
    note.style.backgroundColor = notes[currentNoteIndex].color;
    note.innerHTML = notes[currentNoteIndex].text;
    note.classList.remove('clicked');
  }, 100);
}

// Set initial note
const note = document.getElementById('note');
note.style.backgroundColor = notes[currentNoteIndex].color;
note.innerHTML = notes[currentNoteIndex].text;
