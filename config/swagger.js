import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Event Registration API",
            version: "1.0.0",
            description: "API for managing events and registrations",
        },
        servers: [
            {
                url: "http://localhost:5000/api",
            },
            {
                url: "https://event-registrations-rjl2.onrender.com/api",
            },
        ],
    },
    apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;