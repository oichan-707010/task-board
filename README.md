# task-board

React + Vite で作ったシンプルなタスクボードアプリです。

## 機能

- テキスト入力でタスクを追加
- チェックボックスで完了・未完了を切り替え
- タスクの削除
- 完了済みタスクはグレー（取り消し線付き）で表示
- タスクはブラウザの localStorage に保存され、リロードしても消えない

## 使い方

```sh
npm install
npm run dev
```

## 公開（GitHub Pages）

`main` ブランチへプッシュすると、GitHub Actions（`.github/workflows/deploy.yml`）が自動でビルドし、GitHub Pages に公開します。

- 公開URL: https://oichan-707010.github.io/task-board/
- 初回のみ、リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定してください。
