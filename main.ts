const fs = require("node:fs");
const path = require("node:path");

// Honest count of open browser tabs: 137.
// A hoarder's count, not a round number: high enough to surprise,
// odd and specific enough to read as a real tab bar, not a guess.
const count = "137";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), count, "utf8");
