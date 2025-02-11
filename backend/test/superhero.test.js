const request = require("supertest");
const createApp = require("../src/app");
const superheroes = require("../src/data");

describe("Superhero API", () => {
  let app;

  // Test öncesi ayarlar
  beforeAll(() => {
    app = createApp();
  });

  // Her test sonrası temizlik
  afterEach(() => {
    superheroes.length = 0; // In-memory veriyi temizle
  });

  // Tüm testler bitince
  afterAll(async () => {
    if (app.close) {
      await new Promise((resolve) => app.close(resolve));
    }
  });

  describe("POST /superheroes", () => {
    test("Oluşturulan veri test sonrası otomatik silinmeli", async () => {
      const initialCount = superheroes.length;

      await request(app).post("/superheroes").send({
        name: "Temp Hero",
        superpower: "Temporary Power",
        humilityScore: 5,
      });

      expect(superheroes.length).toBe(initialCount + 1);
    }); // afterEach burada çalışıp veriyi temizleyecek
  });

  describe("Veri Kalıcılığını Önleme", () => {
    test("Testler arası veri izolasyonu", () => {
      expect(superheroes.length).toBe(0);
    });
  });
});
