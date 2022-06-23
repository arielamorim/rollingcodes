// Set default intervals to calculate scales
const intervals = {
    major: [ 'T', 'T', 'sT', 'T', 'T', 'T', 'sT' ],
    minor: [ 'T', 'sT', 'T', 'T', 'sT', 'T', 'T' ],
    pentamajor: [ 'T', 'T', 'TsT', 'T' ],
    pentaminor: [  'TsT', 'T', 'T', 'TsT' ],
    values: { T: 2, sT: 1, TsT: 3}
};

// 1, 3, 4, 5 e 7

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

// Params
let tom = 'A';
let variation = 'minor';

console.log( `${ tom } ${ variation } scale goes like this:`, getScale(tom, variation));