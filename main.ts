import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, setup then turn: the lap-sit isn't love, it's sabotage.
const JOKE =
  "My cat only sits on my lap when I'm about to stand up — he's not affectionate, he's a parking brake.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
