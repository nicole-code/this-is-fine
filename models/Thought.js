const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thoughtRecordSchema = new Schema ({

    entryName: {type: String, required: true},
    emoji: {type: String, required: true},
    situation: {type: String, required: false},
    emotion: {type: String, required: false},
    automaticThoughts: {type: String, required: false},
    evidenceSupport: {type: String, required: false},
    evidenceAgainst: {type: String, required: false},
    balanceThought: {type: String, required: false},
    feelNow: {type: String, required: false}, 
    user: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
  timestamps: true,
});

module.exports = mongoose.model("ThoughtRecord", thoughtRecordSchema);

