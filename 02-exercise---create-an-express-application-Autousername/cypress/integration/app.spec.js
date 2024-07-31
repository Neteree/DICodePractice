describe("Express app", () => {
  it("GET /movies should respond with three items", () => {
    cy.request("http://localhost:3000/movies").then((response) => {
      expect(response.body.length).to.equal(3);
    });
  });
});
