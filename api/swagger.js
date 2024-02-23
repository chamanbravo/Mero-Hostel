import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: "localhost:5000",
};

const outputFile = "./swagger-output.json";
const routes = ["./router/auth-router.js",'./router/hostelDetails-router.js','./router/update-router.js'];

swaggerAutogen()(outputFile, routes, doc);
