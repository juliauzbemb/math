import Daemon from "../daemon.js";

const received = new Daemon("testDaemon");

test("testing Daemon setting attack value", () => {
  received.attackValue = 2;
  expect(received.attackValue).toBe(72);
});

test("testing Daemon setting stoned attack", () => {
  received.stoned = 2;
  expect(received.stoned).toBe(67);
});
