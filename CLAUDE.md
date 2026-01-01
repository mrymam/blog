# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astroを使用した個人ブログサイト。GitHub Pagesでホスティング。

## Commands

```bash
pnpm install    # 依存関係のインストール
pnpm dev        # 開発サーバーの起動
pnpm build      # ビルド
pnpm preview    # プレビュー
```

## Tech Stack

- Framework: Astro
- Package Manager: pnpm
- Node.js: v25.2.1
- Hosting: GitHub Pages
- CI/CD: GitHub Actions

## Deploy

`main`ブランチへのプッシュでGitHub Actionsが自動デプロイを実行。
