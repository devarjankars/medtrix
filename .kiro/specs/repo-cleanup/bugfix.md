# Bugfix Requirements Document

## Introduction

The Git repository contains files and directories that should not be tracked: server-specific deployment artifacts (`iis-deploy/` folder and `deploy-iis.ps1`) were committed to the repo, and build output directories (`out/`, `.next/`) plus build archives (`out.zip`) that are listed in `.gitignore` may still be tracked because they were committed before the ignore rules were in place. This causes unnecessary bloat and exposes deployment configuration when pushing to remote.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN a developer runs `git status` or `git push`, THEN the system includes `iis-deploy/` (server deployment artifacts folder) in the tracked files and pushes it to the remote repository.

1.2 WHEN a developer runs `git status` or `git push`, THEN the system includes `deploy-iis.ps1` (IIS deployment script) in the tracked files and pushes it to the remote repository.

1.3 WHEN the `out/` folder exists locally and was previously committed, THEN the system continues to track changes to it despite `.gitignore` containing `/out/`, because once a file is tracked, `.gitignore` has no effect.

1.4 WHEN the `.next/` folder exists locally and was previously committed, THEN the system continues to track changes to it despite `.gitignore` containing `/.next/`.

1.5 WHEN `out.zip` exists locally and was previously committed, THEN the system continues to track it despite `.gitignore` containing `*.zip`.

1.6 WHEN `npm run build` is executed, THEN the generated `out/` folder gets picked up by git and staged for commit, even though it is a build artifact that should never be versioned.

### Expected Behavior (Correct)

2.1 WHEN a developer runs `git status` or `git push`, THEN the system SHALL NOT include `iis-deploy/` in tracked files, and it SHALL be listed in `.gitignore` so it is permanently ignored.

2.2 WHEN a developer runs `git status` or `git push`, THEN the system SHALL NOT include `deploy-iis.ps1` in tracked files, and it SHALL be listed in `.gitignore` so it is permanently ignored.

2.3 WHEN the `out/` folder exists locally, THEN the system SHALL treat it as untracked (ignored), consistent with the existing `/out/` rule in `.gitignore`.

2.4 WHEN the `.next/` folder exists locally, THEN the system SHALL treat it as untracked (ignored), consistent with the existing `/.next/` rule in `.gitignore`.

2.5 WHEN `out.zip` exists locally, THEN the system SHALL treat it as untracked (ignored), consistent with the existing `*.zip` rule in `.gitignore`.

2.6 WHEN `npm run build` is executed and produces an `out/` folder, THEN the system SHALL NOT stage or commit that folder.

### Unchanged Behavior (Regression Prevention)

3.1 WHEN source code files under `app/`, `components/`, `lib/`, and `Data/` are modified, THEN the system SHALL CONTINUE TO track and commit those changes normally.

3.2 WHEN configuration files such as `next.config.mjs`, `eslint.config.mjs`, `package.json`, and `package-lock.json` are modified, THEN the system SHALL CONTINUE TO track and commit those changes normally.

3.3 WHEN `.env.example` is modified, THEN the system SHALL CONTINUE TO track and commit that file (it is intentionally versioned as a template).

3.4 WHEN `.gitignore` itself is modified, THEN the system SHALL CONTINUE TO track and commit those changes normally.

3.5 WHEN `public/` assets are added or modified, THEN the system SHALL CONTINUE TO track and commit those changes normally.
