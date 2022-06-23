const intervals = {
    major: ['T','T','sT','T','T','T','sT'],
    minor: ['T','sT','T','T','sT','T','T'],
    values: { T: 2, sT: 1}
};

let allNotes = ['C', 'C#', 'D', 'D#','E','F','F#','G','G#','A','A#','B'];

function getScale ( tom, variation ) {
    
    // Order notes by tom
    let tomIndex = allNotes.indexOf(tom);
    
    // Define were to begin
    let allNotesEnd = [], allNotesStart = [];
    allNotes.forEach( (note, index) => {
        if ( index >= tomIndex ) {
            allNotesStart.push(note);
        } else {
            allNotesEnd.push(note);
        }
    });

    // Get notes ordered
    let notesOrdered = allNotesStart.concat(allNotesEnd);
    
    // Crossing the intervals template with allNotes
    let scale = [ tom ];

    // Don't know how to explaine the use this, so...
    let badAssIndex = 0;
    
    // Magic
    intervals[`${variation}`].forEach(( interval ) => {
        
        badAssIndex = badAssIndex + intervals.values[`${interval}`];
        
        notesOrdered[badAssIndex] = badAssIndex === notesOrdered.length ? tom : notesOrdered[badAssIndex];
        
        scale.push(notesOrdered[badAssIndex]);
        
    });

    return scale;
}
let tom = 'C';
let variation = 'major';

console.log( `${ tom } ${ variation } scale goes like this:`, getScale(tom, variation));