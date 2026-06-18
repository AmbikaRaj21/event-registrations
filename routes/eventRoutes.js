import express from "express"
import Event from "../models/event.js"
import Registration from "../models/registration.js"

const router = express.Router();

/**
 * @swagger
 * /events:
 *   post:
 *     summary: Create a new event
 *     tags: [Events]
 *     responses:
 *       201:
 *         description: Event created successfully
 */

// events post

router.post("/events", async (req, res) => {
    try {
        const { title, date, location } = req.body;

        if (!title || !date || !location) {
            return res.status(400).json({
                message: "All fields are required",
            });
        }

        const newEvent = new Event({
            title,
            date,
            location,
        });

        await newEvent.save();


        res.status(201).json({
            message: "Event created successfully",
            event: newEvent,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

/**
 * @swagger
 * /events:
 *   get:
 *     summary: Get all events
 *     tags: [Events]
 *     responses:
 *       200:
 *         description: List of all events
 */

// events get

router.get("/events", async (req, res) => {
    try {
        const { location, date } = req.query

        const filter = {};

        if (location) {
            filter.location = location
        }

        if (date) {
            filter.date = new Date(date)
        }

        const events = await Event.find(filter);

        res.status(200).json(events);
    } 
    catch (error) {
        res.status(500).json({
        message: error.message,
        });
    }
});

/**
 * @swagger
 * /events/{id}/register:
 *   post:
 *     summary: Register a user for an event
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Registration successful
 */

// registration put

router.post("/events/:id/register", async (req, res) => {
    try {
        const eventId = req.params.id

        const { name, email } = req.body

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required",
            });
        }

        const event = await Event.findById(eventId)

        if(!event) {
            return res.status(404).json({
                message: "Event not found",
            });
        }

        // duplicate registration check
        const existingRegistration = await Registration.findOne({
            email,
            eventId,
        });

        if(existingRegistration) {
            return res.status(400).json({
                message: "User already registered for this event",
            });
        }

        const registration = new Registration({
            name, 
            email,
            eventId,
        });

        await registration.save();

        res.status(201).json({
            message: "Registration successful",
            registration,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

/**
 * @swagger
 * /events/{id}/registrations:
 *   get:
 *     summary: Get registrations for a specific event
 *     tags: [Registrations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of registrations
 */

// registrations get

router.get("/events/:id/registrations", async (req, res) => {
    try {
        const eventId = req.params.id

        const event = await Event.findById(eventId)

        if(!event) {
            return res.status(404).json({
                message: "Event not found",
            });
        }

        const registrations = await Registration.find({
            eventId,
        });

        res.status(200).json(registrations)
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
});

export default router;