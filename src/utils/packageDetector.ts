// src/utils/packageDetector.ts

import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

export async function isPackageInstalled(): Promise<boolean> {
  const folders = vscode.workspace.workspaceFolders;
  if (!folders) {
    return false;
  }

  const pkgPath = path.join(folders[0].uri.fsPath, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    return false;
  }

  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies
  };

  return 'tailwind-animations' in deps
      || '@midudev/tailwind-animations' in deps;
}