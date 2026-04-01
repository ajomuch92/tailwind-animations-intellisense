import * as vscode from 'vscode';

import { animations } from '../data/animations';

const CLASS_REGEX = /class(Name)?=["'][^"']*$/;

export class TailwindAnimationsCompletionProvider
  implements vscode.CompletionItemProvider {

  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.CompletionItem[] {
    const linePrefix = document.lineAt(position).text
      .substring(0, position.character);

    if (!CLASS_REGEX.test(linePrefix)) {
        return [];
    }

    return animations.map(anim => {
      const item = new vscode.CompletionItem(
        anim.name,
        vscode.CompletionItemKind.Value
      );
      item.detail = `tailwind-animations · ${anim.category}`;
      item.documentation = new vscode.MarkdownString(anim.description);
      item.insertText = anim.name;
      return item;
    });
  }
}