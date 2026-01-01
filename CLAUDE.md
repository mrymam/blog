# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astroを使用した個人ブログサイト。astro-paperテンプレートベース。GitHub Pagesでホスティング。

## Commands

```bash
pnpm install        # 依存関係のインストール
pnpm dev            # 開発サーバーの起動 (localhost:4321)
pnpm build          # ビルド
pnpm preview        # プレビュー
pnpm format         # Prettierでコード整形
pnpm format:check   # コード整形チェック
pnpm lint           # ESLintでリント
pnpm sync           # Astro型生成
```

## Tech Stack

- Framework: Astro v5
- Template: astro-paper
- Styling: TailwindCSS v4
- Type Checking: TypeScript
- Linting: ESLint
- Formatting: Prettier
- Search: Pagefind
- Package Manager: pnpm
- Hosting: GitHub Pages
- CI/CD: GitHub Actions

## Project Structure

```
src/
  ├── components/   # UIコンポーネント
  ├── data/blog/    # ブログ記事 (Markdown)
  ├── layouts/      # レイアウト
  ├── pages/        # ページルーティング
  ├── styles/       # スタイル
  └── utils/        # ユーティリティ
public/             # 静的アセット
```

## Naming Conventions

### ブログ記事

`src/data/blog/` 配下のファイルは以下の命名規則に従う:

```
{YYYYMMDD}{XX}_name.md
```

- `{YYYYMMDD}`: 日付
- `{XX}`: 2桁のインデックス（00, 01, ...）

例: `2026010100_my-first-post.md`

## Deploy

`main`ブランチへのプッシュでGitHub Actionsが自動デプロイを実行。
