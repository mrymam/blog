# Blog

Astroを使用した個人ブログサイトです。[astro-paper](https://github.com/satnaing/astro-paper)テンプレートをベースにしています。

## 概要

- **フレームワーク**: [Astro](https://astro.build/) v5
- **テンプレート**: [astro-paper](https://github.com/satnaing/astro-paper)
- **スタイリング**: TailwindCSS v4
- **ホスティング**: GitHub Pages
- **デプロイ**: GitHub Actions

## 開発環境

開発環境のセットアップについては [dev/README.md](dev/README.md) を参照してください。

### クイックスタート

```bash
pnpm install    # 依存関係のインストール
pnpm dev        # 開発サーバー起動 (http://localhost:4321)
```

### その他のコマンド

```bash
pnpm build          # 本番ビルド
pnpm preview        # ビルド結果のプレビュー
pnpm format         # コード整形
pnpm lint           # リント
```

## AIと自動化の活用

- Claude Codeを使用した開発支援
- GitHub Actionsによる自動デプロイ

## セキュリティ

- 機密情報は環境変数で管理
- `.env`ファイルはコミットしない
- 依存パッケージは定期的に更新
