const request = require("supertest");
const app = require("../app/app.js");

describe("/non-existent-or-misspelt-endpoint", () => {
  test("Returns 'Status: 404' and custom error message if endpoint is not found", () => {
    return request(app)
      .get("/invalid-path")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not found - this path does not exist");
      });
  });
});

describe("GET /api/data", () => {
  test("Returns 'Status: 200' for successful request", () => {
    return request(app).get("/api/data").expect(200);
  });
  test("Returns exam data contained in an array", () => {
    return request(app)
      .get("/api/data")
      .expect(200)
      .then(({ body: { examData } }) => {
        expect(typeof examData).toBe("object");
        expect(Array.isArray(examData)).toBe(true);
      });
  });
  test("Each exam object contains the relevant keys", () => {
    return request(app)
      .get("/api/data")
      .expect(200)
      .then(({ body: { examData } }) => {
        examData.forEach((exam) => {
          expect(exam).toHaveProperty("id");
          expect(exam).toHaveProperty("Title");
          expect(exam).toHaveProperty("Description");
          expect(exam).toHaveProperty("Candidateid");
          expect(exam).toHaveProperty("CandidateName");
          expect(exam).toHaveProperty("Date");
          expect(exam).toHaveProperty("LocationName");
          expect(exam).toHaveProperty("Latitude");
          expect(exam).toHaveProperty("Longitude");
        });
      });
  });
});
