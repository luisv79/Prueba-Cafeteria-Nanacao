const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD", () => {
    it("GET /cafes debe devolver un status 200 y un array con al menos 1 objeto", async () => {
        const response = await request(server).get('/cafes');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
        });

        it("DELETE /cafes/:id debe devolver un status 404 si el id no existe", async () => {
            const jwt = "token";
            const idInexistente = 5
            const response = await request(server).delete(`/cafes/${idInexistente}`)
            .set("Authorization", jwt)
            .send();
            expect(response.status).toBe(404);
            });

            it("POST /cafes debe agregar un nuevo café y devolver un status 201", async () => {
                const id = Math.floor(Math.random() * 999);
                const cafe = { id, nombre: "Cafe Moka" };
                const response = await request(server).post('/cafes').send(cafe);
                expect(response.status).toBe(201);
                });

                it("PUT /cafes/:id debe devolver un status 400 si los ids no coinciden", async () => {
                    const cafeActualizado = { id: 3, nombre: 'Café Americano' }; // Payload con un id diferente al de la ruta
                    const response = await request(server).put('/cafes/2').send(cafeActualizado);
                    expect(response.status).toBe(400);
                    });
                
        
    });
    

   
