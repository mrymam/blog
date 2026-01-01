# 開発環境

## 必要なツール

- Node.js v25.2.1
- pnpm

## セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバーの起動
pnpm dev

# ビルド
pnpm build

# プレビュー
pnpm preview
```

## デプロイ

GitHub Pagesへのデプロイは、GitHub Actionsを通じて自動的に行われます。
`main`ブランチにプッシュすると自動でビルド・デプロイが実行されます。
