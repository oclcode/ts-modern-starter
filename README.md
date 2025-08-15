# ⚡ ts-modern-starter

<div align="center"><img src="./docs/images/ts-stack-logos.png" alt="Modern TypeScript Stack : TypeScript, ESLint, pnpm, Jest" /></div>

_A production-ready TypeScript starter template with ESLint v9 (Flat Config), Jest, and pnpm. Includes ES Modules support, strict typing, and pre-configured testing. Ideal for Node.js apps, libraries, and CLI tools._

[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-v9-4B32C3)](https://eslint.org/)
[![pnpm](https://img.shields.io/badge/pnpm-%3E%3D7.0-orange)](https://pnpm.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Jest](https://img.shields.io/badge/Jest-Tested-success)](https://jestjs.io/)
[![CI Pipeline](https://github.com/oclcode/ts-modern-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/oclcode/ts-modern-starter/actions/workflows/ci.yml)

---

## 📦 Features

- ✅ **TypeScript 5.0+** with strict mode
- ✅ **ESLint v9** (Flat Config) + Prettier + `@typescript-eslint`
- ✅ **Jest** with native ES Modules support via `ts-jest`
- ✅ **pnpm** for fast, disk-space efficient dependency management
- ✅ **GitHub Actions** CI/CD pipeline with type checking
- ✅ **@/ aliases** for clean imports (no more `../../`)
- ✅ Ready-to-use test structure with TypeScript
- ✅ Opinionated but configurable
- ✅ **Pure ES Modules** (no Babel required)
- ✅ Separate `tsconfig` for tests and source code

---

## 🚀 Getting Started

### 1. Use this template

Click the **"Use this template"** button on GitHub to create a new repository.

### 2. Install dependencies

```bash
pnpm install
```

### 3. Run type check

```bash
pnpm run build
```

### 4. Run tests

```bash
pnpm test
```

### 5. Start coding!

Edit `src/math.ts` and add your own logic.

---

## 🛠 Setup

### Development

| Command           | Description                 |
| ----------------- | --------------------------- |
| `pnpm build`      | Check types with TypeScript |
| `pnpm test`       | Run tests with Jest         |
| `pnpm test:watch` | Run tests in watch mode     |
| `pnpm lint`       | Run ESLint                  |
| `pnpm lint:fix`   | Fix ESLint issues           |
| `pnpm format`     | Format code with Prettier   |

---

## 🔧 Configuration

### TypeScript

- **Strict mode** enabled
- ES Modules support (`"module": "ESNext"`)
- Path aliases configured (`@/*` maps to `src/*`)
- Separate configurations:
  - `tsconfig.json` for source code
  - `tsconfig.test.json` for tests

### ESLint (Flat Config)

- **ESLint v9+** with `@typescript-eslint`
- Rules:
  - `no-restricted-syntax`: Encourages functional methods over `for...of`
  - `@typescript-eslint/no-explicit-any`: Bans `any` type
  - `@typescript-eslint/no-unused-vars`: Catches unused variables
  - Strict mode with `eslint:recommended`
- Separate rules for `src/` and `tests/` directories

### Jest

- Native ES Modules support (`useESM: true`)
- TypeScript support via `ts-jest`
- Pre-configured test match: `**/tests/**/*.test.ts`
- Coverage reports in `coverage/`
- Alias support (`@/*` maps to `src/*`)

### Prettier

- Semi-colons: `true`
- Double quotes: `true`
- Tab width: `2`

### @/ Aliases

No more `../../`! Use `@/` to import from `src/`:

```typescript
// Before
import { add } from "../../src/math.ts";
// After
import { add } from "@/math";
```

---

## 📝 Rules & Conventions

1. **No `for...of` loops**: Use `Array.prototype.forEach` or `Array.prototype.every` instead.
2. **ES Modules**: Use `import/export` syntax.
3. **Strict typing**: Avoid `any` and use proper TypeScript types.
4. **Test coverage**: Aim for 100% coverage in `src/`.
5. **No file extensions in imports**: ESLint is configured to enforce this.

```typescript
// ✅ Recommended
[1, 2, 3].forEach((item: number) => console.log(item));
// ❌ Avoid
for (const item of [1, 2, 3]) {
  console.log(item);
}
// ❌ Avoid `any`
let value: any;
```

---

## 🔄 CI/CD

GitHub Actions workflow (`.github/workflows/ci.yml`):

- Runs on every `push` and `pull_request`
- Installs dependencies with pnpm cache
- Runs **type checking**, tests, and linter

---

## 📂 Project Structure

```txt
ts-modern-starter/
├── src/                  # Source code
│   └── math.ts           # Example module
├── tests/                # Tests
│   ├── unit/             # Unit tests
│   │   └── math.test.ts  # Example test
│   └── integration/      # Integration tests
├── .github/              # GitHub configuration
│   └── workflows/         # CI/CD workflows
├── .eslintrc.js          # ESLint Flat Config
├── jest.config.js         # Jest configuration
├── tsconfig.json          # TypeScript config (source)
├── tsconfig.test.json     # TypeScript config (tests)
├── jsconfig.json          # VSCode aliases support
└── package.json
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to get started.

---

## 🧹 Code of Conduct

We are committed to fostering a welcoming and inclusive community. Please review our [Code of Conduct](CODE_OF_CONDUCT.md) to understand the standards of behavior expected from all participants in our community.

---

## 📄 License

This project is licensed under the MIT License - see the [License](LICENSE.md) file for details.
