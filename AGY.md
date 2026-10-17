# @ostro/validation — Antigravity AI Architecture & Knowledge Base

> **Package Name**: `@ostro/validation`
> **Version**: `1.1.0`
> **Role in Ecosystem**: Modular Core Framework Library

---

## 1. Package Purpose & Overview
Schema-based input validation engine with customizable rules, error bags, and localized error messages.

- **Primary Architectural Patterns**: Rule strategy pattern, dynamic error bag collection.
- **Key Exported Entities**: `ValidationManager`, `Validator`, `Rule`, `Rules (50+ built-ins)`

---

## 2. Dependencies & Interoperability
- **Direct Dependencies**:
  - `@ostro/support`: `^1.0.11`
  - `@ostro/contracts`: `^1.0.2`
  - `file-type`: `^16.5.1`
- **Framework Consumers**: Consumed across the OstroJS ecosystem via `@ostro/framework` and direct imports.

---

## 3. Directory & Source Layout
```text
origin/validation/
├── async.ts
├── attributes.ts
├── errors.ts
├── lang/ar.ts
├── lang/az.ts
├── lang/be.ts
├── lang/bg.ts
├── lang/bs.ts
├── lang/ca.ts
├── lang/cs.ts
├── lang/cy.ts
├── lang/da.ts
├── lang/de.ts
├── lang/el.ts
├── lang/en.ts
├── lang/es.ts
├── lang/et.ts
├── lang/eu.ts
├── lang/fa.ts
├── lang/fi.ts
└── ... (37 more files)
```

---

## 4. TypeScript Typing & Code Standards
1. **Access Modifiers**: All class properties and methods declare explicit visibility (`public`, `protected`, `private`).
2. **Inheritance & Overrides**: Classes overriding base class methods use the `override` keyword to safeguard contracts.
3. **Immutability**: Constant lookup tables and static registries use `readonly` and strict record types.
4. **No Implicit Any**: Public APIs avoid `any` in favor of generics (`<T = unknown>`) and typed contracts from `@ostro/contracts`.
5. **Contract Binding**: Core managers implement contracts from `@ostro/contracts/validation/*`.

---

## 5. Development & Verification Guide
- **Compile / Build**: `npm run build` (runs `npx tsc -p tsconfig.build.json`)
- **Run Tests**: `npm test` (executes Jest with 100% coverage target via `c8`)
- **Published Artifacts**: Target output compiled to `./build` with accompanying `.d.ts` declarations and source maps.

---
*Generated for Antigravity AI high-speed codebase comprehension with minimal token consumption.*
