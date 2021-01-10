const notes = document.querySelectorAll(".lecture-bookmark-v2--bookmark-container--yCEMR");

// Extract notes
var i;
const notesObject = {};
var time, noteData, section, lecture, text;
for (i = 0; i < notes.length; i++) {
  noteData = notes[i].innerText;
  time = noteData.split('\n')[0];
  section = noteData.split('\n')[1];
  lecture = noteData.split('\n')[2];
  text = noteData.split(`${time}\n${section}\n${lecture}\n\n`)[1];
  if (notesObject[section] == undefined){
    notesObject[section] = {};
  }
  if (notesObject[section][lecture] == undefined) {
    notesObject[section][lecture] = [];
  }
  notesObject[section][lecture].push([time, text]);
}

// Export notes
var output = "";
var note;
for ( let section in notesObject) {
  output += `\n\n# ${section}\n`;
  for ( let lecture in notesObject[section]) {
    output += `\n## ${lecture}\n`;
    for ( let note of notesObject[section][lecture]) {
      output += `**(${note[0]}):** ${note[1]}\n\n`
    }
  }
}
document.querySelector("body").innerText = output;
