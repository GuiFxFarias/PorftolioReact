import * as fs from "fs";

export let txt = "";

txt = fs.readFileSync("textHome.txt");

txt = txt.toString();
