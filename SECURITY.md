# Security Policy

## Supported Versions

Since this is a personal website, only the latest version deployed from the main branch is supported.

| Version | Supported          |
| ------- | ------------------ |
| Main Branch (Latest)   | :white_check_mark: |
| Older commits | :x:                |

## Security Updates

### March 2026 - React Version Status
- **Using React 18.3.1** - Latest stable version compatible with Create React App
- React 19 caused compatibility issues and was rolled back
- Project uses static site generation (no React Server Components)
- **Not vulnerable to RSC-related CVEs** (CVE-2025-55184, CVE-2025-55183, React2Shell)
  - These vulnerabilities only affect Next.js App Router and server-side RSC implementations
  - This project uses client-side React with static generation

## Reporting a Vulnerability

I take the security of this website seriously. If you have discovered a security vulnerability, please do not discuss it in the public issue tracker.

### Private Reporting (Recommended)

Please use the **[Private Vulnerability Reporting](../../security/advisories/new)** feature on this repository. This allows you to report the issue privately without exposing the vulnerability to the public.

1. Click the **Security** tab in this repository.
2. Click **"Report a vulnerability"**.

I try to acknowledge reports within 48 hours.

### What to expect

* I will investigate the issue.
* I will let you know when the issue has been patched.
* I will not disclose the issue publicly until it is resolved.
