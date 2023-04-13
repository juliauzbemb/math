import Magician from "../magician.js";

const received = new Magician("testMagician");

test("testing Magician setting attack value", () => {
  received.attackValue = 2;
  expect(received.attackValue).toBe(90);
});

test("testing Magician setting stoned attack", () => {
  received.stoned = 2;
  expect(received.stoned).toBe(85);
});
