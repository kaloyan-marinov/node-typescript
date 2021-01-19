import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  /*
  If you comment out the next line and uncomment the line after that:
  - even without saving this file,
    you get "in-editor" linting with TypeScript
  - upon saving this file,
    you get linting with TypeScript
    (within the terminal session where `npm run dev` has been issued!)
    through `ts-node`
  */
  const num = add(1, 2);
  // const num = add(1, '2')

  res.send(`Hello, happy ${num} friends!`);
});

app.listen(5000, () => console.log("Server listening on port 5000 ..."));
