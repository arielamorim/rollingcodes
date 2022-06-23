// Set default intervals to calculate scales
const intervals = {
    major: [ 'T', 'T', 'sT', 'T', 'T', 'T', 'sT' ],
    minor: [ 'T', 'sT', 'T', 'T', 'sT', 'T', 'T' ],
    pentamajor: [ 'T', 'T', 'TsT', 'T' ],
    pentaminor: [  'TsT', 'T', 'T', 'TsT' ],
    values: { T: 2, sT: 1, TsT: 3}
};

let allNotes = ['C', 'C#', 'D', 'D#','E','F','F#','G','G#','A','A#','B'];

async function getScale ( request, reply ) {
    
    const tom = request.params.tom;
    const variation = request.params.variation;

    // Order notes by tom
    let tomIndex = allNotes.indexOf(tom);
    
    // Define were to begin
    let allNotesEnd = [], allNotesStart = [];
    
    // Split notes array, and redefine where it starts
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
    
    // Magic rsrs
    // Basicly each scale has its own intervals, so lets calculate
    intervals[`${variation}`].forEach(( interval ) => {
        
        badAssIndex = badAssIndex + intervals.values[`${interval}`];
        
        notesOrdered[badAssIndex] = badAssIndex === notesOrdered.length ? tom : notesOrdered[badAssIndex];
        
        scale.push(notesOrdered[badAssIndex]);
        
    });

    // Receba
    reply.status(201).send({ 
        scale: tom,
        variation: variation,
        notes: scale
    });
}

export default getScale;
