const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const model = mongoose.model;
const models = mongoose.models;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    college: {
        name: String,
        city: String
    },
    socialHandles: {
        Facebook: String,
        Instagram: String,
        YouTube: String,
        Twitter: String
    },
    description: String,
    experiences: [{
        companyName: String,
        city: String,
        country: String,
        jobProfile: String,
        duration: String
    }],
    interests: [String],
    topSkills: [Number],
    endorsements: [{
        name: String,
        jobProfile: String,
        companyName: String,
        skills: [String]
    }],
    competitions: [{
        competitionName: String,
        duration: String,
        competitionType: String,
        numberOfParticipants: Number,
        numberOfRounds: Number,
        numberOfJudges: Number,
        teamName: String
    }],
    highlights: [{
        roundName: String,
        competitionName: String,
        category: String,
        task: String,
        submissionFiles: [String],
        media: [{
            type: {
                type: String,
                enum: ['video', 'document', 'image']
            },
            fileName: String,
            description: String
        }],
        feedback: {
            author: String,
            role: String,
            comment: String,
            date: String,
            rating: String
        }
    }]
});


const User = models.User || model('User', UserSchema);

module.exports = User;