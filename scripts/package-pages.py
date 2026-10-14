"""Empacota apenas os recursos públicos versionados do projeto original."""
from pathlib import Path
import shutil
ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / '.'
FILES = ['05 atribuições/index.html', '05 atribuições/script.js', '09-op-logicos/index.html', '09-op-logicos/script.js', '10 strings/index.html', '10 strings/script.js', '11-CONDICIONAIS/index.html', '11-CONDICIONAIS/script.js', '13 - Repetição - For e While/index.html', '13 - Repetição - For e While/script.js', '14- ARRAYS/index.html', 'Aulas DOM/Aula 01/index.html', 'Aulas DOM/aula 02 eventos dom/ex01.html', 'Aulas DOM/aula 02 eventos dom/index.html', 'OPERADORES/index.html', 'OPERADORES/script.js', 'console-aula02/index.html', 'console-aula02/script.js', 'index.html', 'script.js']
DEST = ROOT / "_site"
DEST.mkdir(exist_ok=True)
for name in FILES:
    target = DEST / name
    target.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(SOURCE / name, target)
assert (DEST / "index.html").is_file(), "Entrada index.html ausente"
(DEST / ".nojekyll").touch()
