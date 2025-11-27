import fs from "fs";
import { rimraf } from "rimraf";

const folderName = "./testFolder";
const fileName = `${folderName}/example.txt`;

async function main() {
  try {
    // creeaza directorul
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName);
      console.log("Directory created:", folderName);
    }

    // creeaza un fisier in director
    fs.writeFileSync(fileName, "Auto generated file");
    console.log("File created:", fileName);

    // sterge directorul folosind rimraf 
    await rimraf(folderName);
    console.log("Directory deleted:", folderName);

  } catch (err) {
    console.error("Error:", err);
  }
}

main();
