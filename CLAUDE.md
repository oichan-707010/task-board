# CLAUDE.md

このファイルは、このリポジトリで作業する Claude Code 向けのガイドです。

## プロジェクト概要

**task-board** — React + Vite 製のタスク管理ボードアプリケーション。

- `src/App.jsx` — タスクの追加・完了切り替え・削除を行うメインコンポーネント（タスクは localStorage の `task-board.tasks` に保存）
- `src/App.css` — ボード UI のスタイル
- `src/index.css` — 色トークン（ライト/ダーク）とベーススタイル

## 技術スタック

| 分類 | 使用技術 |
| --- | --- |
| UI ライブラリ | React 19（関数コンポーネント + Hooks） |
| ビルドツール / 開発サーバー | Vite 8（`@vitejs/plugin-react`） |
| 言語 | JavaScript（JSX、ES Modules）※ TypeScript は未使用 |
| スタイル | プレーン CSS（CSS 変数による色トークン、ダークモードは `prefers-color-scheme`） |
| 状態管理 | `useState` / `useEffect` のみ（外部ライブラリなし） |
| データ保存 | ブラウザの localStorage（バックエンドなし） |
| Lint | oxlint |
| CI / ホスティング | GitHub Actions → GitHub Pages（Node.js 24） |

## コンポーネントの命名規約

現在のコードに合わせて、以下の規約で書くこと。

- **コンポーネント名**: PascalCase（例: `App`, `TaskItem`）。`function` 宣言で定義し、`export default` する
- **ファイル名**: コンポーネント名と同じ PascalCase + `.jsx`（例: `App.jsx`）。スタイルは同名の `.css`（例: `App.css`）をコンポーネント内で import する
- **配置**: エントリは `src/main.jsx`、ルートは `src/App.jsx`。コンポーネントを分割する場合は `src/components/` に置く
- **イベントハンドラ・関数**: camelCase の「動詞 + 対象」（例: `addTask`, `toggleTask`, `deleteTask`, `loadTasks`）
- **state**: 名詞の camelCase で、セッターは `set` + 名前（例: `tasks` / `setTasks`）。真偽値は状態を表す短い名前（例: `done`）
- **定数**: UPPER_SNAKE_CASE でモジュールのトップレベルに置く（例: `STORAGE_KEY`）
- **localStorage のキー**: `task-board.` を接頭辞にする（例: `task-board.tasks`）
- **CSS クラス名**: kebab-case（例: `add-form`, `task-list`）。状態は修飾クラスを追加して表す（例: `task done`）
- **色**: CSS に直接書かず、`src/index.css` の CSS 変数（例: `--accent`, `--done-text`）を使う。ダークモード用の値も合わせて定義する

## 開発コマンド

- 依存関係のインストール: `npm install`
- 開発サーバー起動: `npm run dev`
- ビルド: `npm run build`
- Lint: `npm run lint`（oxlint）

## デプロイ先

https://oichan-707010.github.io/task-board/

- `main` へのプッシュで `.github/workflows/deploy.yml` が GitHub Pages に自動デプロイする
- `vite.config.js` の `base` は `/task-board/`（リポジトリ名を変えたら合わせて変更する）

## Git 運用ルール

### 基本方針: 変更のたびに GitHub へプッシュする

コードを変更したら、**作業の区切りごとに必ずコミットして GitHub にプッシュする**こと。
変更をローカルに溜め込まず、常にリモートと同期した状態を保つ。

### 手順

1. 変更内容を確認する: `git status` / `git diff`
2. 関連する変更だけをステージする: `git add <ファイル>`（`git add -A` で無関係なファイルを含めない）
3. コミットする: `git commit -m "<メッセージ>"`
4. プッシュする: `git push`（初回は `git push -u origin <ブランチ名>`）

### コミットメッセージ

- 1行目に変更内容を簡潔に書く（日本語可）
  - 例: `タスクのドラッグ&ドロップ移動を追加`
  - 例: `fix: 期限切れタスクの表示崩れを修正`
- 1つのコミットには1つの論理的な変更のみを含める

### 注意事項

- `.env`、APIキー、認証情報などの秘密情報は絶対にコミットしない（`.gitignore` に追加する）
- `node_modules/` やビルド成果物はコミットしない
- テストや Lint がある場合は、プッシュ前に実行して通ることを確認する
- `git push --force` は使用しない
- プッシュが失敗した場合（リモートが先行している等）は、`git pull --rebase` で取り込んでから再度プッシュする。コンフリクトが起きたら勝手に解決せずユーザーに確認する
