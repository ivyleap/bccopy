# Decision: bccopy デモ実装は CCAGI 非経由を許容

- 日付: 2026-05-25
- 起票: urata@ivyleap.co.jp
- 関連: ~/.claude/CLAUDE.md rule 1 (CCAGI 経由作業)

## 内容

BC Partners (bc-p.jp) 刷新のデモ用雛形として bccopy リポジトリにトップページを実装する。スコープは Next.js 16 + React 19 + Tailwind 4 + motion/react の単一 LP ＋ Vercel プレビュー公開のみ。

## 例外承認

ユーザー明示承認のもと、本タスクに限り Claude Code が Edit/Write を用いて直接実装することを許容する。理由はデモ用かつスコープが限定的であり、CCAGI Agent Pipeline の起動コストに見合わないため。

## 適用範囲

- 対象: bccopy リポジトリのトップページ実装と Vercel デプロイ
- 期限: 本セッション内
- 本番案件化する場合は別途 CCAGI 経由に切替える
