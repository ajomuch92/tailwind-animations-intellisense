import * as vscode from 'vscode';

import { TailwindAnimationsCompletionProvider } from './providers/completionProvider';
import { isPackageInstalled } from './utils/packageDetector';

const SUPPORTED_LANGUAGES = [
  'html', 'javascriptreact', 'typescriptreact',
  'vue', 'astro', 'svelte'
];

export async function activate(context: vscode.ExtensionContext) {
  const installed = await isPackageInstalled();
  if (!installed) {
	return;
  }

  const provider = new TailwindAnimationsCompletionProvider();

  const disposables = SUPPORTED_LANGUAGES.map(lang =>
    vscode.languages.registerCompletionItemProvider(
      { language: lang, scheme: 'file' },
      provider,
      '"', "'", ' '   // trigger characters
    )
  );

  context.subscriptions.push(...disposables);
}

export function deactivate() {}