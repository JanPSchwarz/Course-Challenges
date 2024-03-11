import { createServer } from "node:http";
import Chance from "chance";

// export const server = …

const chance = new Chance();

export const server = createServer((request, response) => {
  const randomName = chance.name();
  const randomAge = chance.age();
  const randomProfession = chance.profession();
  response.statusCode = 200;
  response.end(
    `Hello my name is ${randomName} and i'm ${randomAge} years old. I am a ${randomProfession}!`
  );
});
