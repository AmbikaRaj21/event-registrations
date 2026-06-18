import mongoose from "mongoose"

const registrationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
        },

        eventId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Event",
            required: true,
        },
    },

    {
        timestamps: true,
    }
);

const Registration = mongoose.model("Registration", registrationSchema)

export default Registration;