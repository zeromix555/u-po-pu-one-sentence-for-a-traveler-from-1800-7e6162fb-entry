// One Sentence for a Traveler from 1800 — make.fun entry.
// Writes one sentence, at most 200 characters, explaining the modern
// internet to a time traveler from the year 1800, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "All the roads of the world meet at one great post office, where every " +
  "letter, book and picture ever made waits on open shelves for any man " +
  "to read, day or night.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
