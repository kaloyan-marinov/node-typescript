# Introduction

_PLEASE BEAR IN MIND_: The content of this section _CANNOT_ be followed in a verbatim manner after the `end-of-introduction` tag.

---

```
$ npm install

$ ./node_modules/typescript/bin/tsc --version
Version 4.1.3
```

---

`app.ts` is valid TypeScript; to compile it, issue

```
$ ./node_modules/typescript/bin/tsc app.ts
```

which is going to generate an `app.js`. (By default, the transpilation process uses ES5 as its target, so `app.js` will end up using `var` instead of `const`. However, it is possible to create a config file where one can change that target if desired.)

---

If you want to constantly watch a file, you can issue

```
$ ./node_modules/typescript/bin/tsc app.ts -w
```

This isn't really the ideal way to do things.

# Setup

1. You want to set up a config file:

```
$ ./node_modules/typescript/bin/tsc --init
```

which is going to generate a `tsconfig.json` file.

2. Modify that config file as you see fit.

3. In the terminal session, you can now run

```
$ node_modules/typescript/bin/tsc
```

which is going to look at the `rootDir` (with TypeScript files; specified in the config file), and is then going to create a `distDir` (also specified in the config file) with JavaScript files.

# The workflow during development

Issuing

```
$ npm run dev
```

causes `nodemon` to start _and_ to watch the TypeScript file.

While it is running, you can verify that the HTTP-server process is running by issuing the following command in a separate terminal session:

```
$ curl -v localhost:3000
```

# The workflow when development is ready

Once you are ready to _compile_ - or _build_ - you can just issue

```
$ npm run build
```

which is going to create a `dist` folder with `app.js` (that contains our _compiled_ JavaScript).

And then, if you want to run the HTTP server, you issue:

```
$ npm start
```

While it is running, you can verify that the HTTP-server process is running, in the same way as described in the previous section.
