# Password Hashing

A small TypeScript demo of hashing and verifying passwords with [bcrypt](https://www.npmjs.com/package/bcrypt).

> **Note:** There is no such thing as "decrypting" a bcrypt password. Bcrypt is a
> **one-way hash** — a stored hash can never be turned back into the original
> password. The only valid operation is *verification*: hash a candidate password
> and check whether it matches the stored hash. This is why real systems let you
> *reset* a password but never *retrieve* it.

## Tech stack

| | |
|---|---|
| Runtime | Node.js |
| Language | TypeScript (ES modules) |
| Hashing | bcrypt 6 |
| Runner | tsx, fetched by `npx` on first run |

## Getting started

### Requirements

- [Node.js](https://nodejs.org/) 18 or newer
- npm

### Install

```bash
git clone <repo-url>
cd password-hashing
npm install
```

### Run the demo

```bash
npm run runOnce
```

This compares the sample password in `index.ts` against the sample hash and
prints the result:

```
Password Match: true
```

To see a new hash being generated, uncomment the two `encryptPassword` lines in
`run()`. The hash is different on every run because bcrypt uses a random salt,
but each one still verifies against the same password.

## How it works

`index.ts` exposes two functions:

| Function | Purpose |
|---|---|
| `encryptPassword(password)` | Hashes a plaintext password with bcrypt and returns the hash. |
| `comparePassword(password, hash)` | Returns `true` if the password matches the hash, otherwise `false`. |

A bcrypt hash embeds the salt and cost factor, so only the hash needs to be
stored — never the plaintext password. The cost factor is set by `SALT` in
`index.ts` (10 rounds).

## Dependencies

- `bcrypt` — password hashing library
- `@types/bcrypt` — TypeScript type definitions

## Notes

The password and hash in `index.ts` are sample values for the demo. Do not
hardcode real passwords or hashes in source code.
