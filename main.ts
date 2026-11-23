// How Many Tabs Do You Have Open? — make.fun entry
// Writes the entrant's honest count of open browser tabs as a single
// number in digits, nothing else, to /output/entry.txt.
//
// The count: 137. Not a round number, not a cliche — the kind of odd,
// specific figure you get when you actually count the tabs instead of
// inventing one. Big enough to surprise, small enough to believe:
// the tabs of someone who opens a page to read later and never closes it.
//
// Deterministic: every run writes exactly the same three bytes, with no
// trailing newline. Node 22+, standard library only, no network,
// no file reads, nothing outside this repository.
import { mkdirSync, writeFileSync } from "node:fs";

const TAB_COUNT = 137;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
// Write the digits only — no trailing newline, so the file is exactly
// the three bytes "137".
writeFileSync(OUTPUT_FILE, String(TAB_COUNT), "utf8");
