#!/usr/bin/env python3
"""Merge worker JSONL results into the Investors sheet as new columns, by Company ID.

Reads all research/investors/workers/worker-*.jsonl, then writes a new workbook
with four added columns on the Investors sheet:
  Ankaufsprofil (recherchiert) | Investor-Website | Quelle | Recherche-Status
Only rows in the target set get filled; the rest stay blank.
"""
import json, glob, os, sys
import openpyxl

SRC = '/root/.claude/uploads/ca96adda-b743-5c4f-9e92-3404803593a5/59067e43-Properties_and_Investors_1.xlsx'
OUT = sys.argv[1] if len(sys.argv) > 1 else 'research/investors/Properties_and_Investors_ANKAUFSPROFIL.xlsx'
WORKDIR = 'research/investors/workers'

# 1) collect worker results by company_id (last write wins)
results = {}
n_lines = 0
for fp in sorted(glob.glob(os.path.join(WORKDIR, 'worker-*.jsonl'))):
    for line in open(fp, encoding='utf-8'):
        line = line.strip()
        if not line:
            continue
        try:
            rec = json.loads(line)
        except Exception as e:
            print(f'  ! skip bad json in {fp}: {e}', file=sys.stderr)
            continue
        cid = str(rec.get('company_id', '')).strip()
        if not cid:
            continue
        results[cid] = rec
        n_lines += 1
print(f'Loaded {n_lines} records, {len(results)} unique company_ids')

# 2) load workbook (full, not read-only, to write)
wb = openpyxl.load_workbook(SRC)
ws = wb['Investors']
hdr = [c.value for c in ws[1]]
cid_col = hdr.index('Company ID') + 1

new_cols = ['Ankaufsprofil (recherchiert)', 'Investor-Website', 'Quelle', 'Recherche-Status']
base = ws.max_column
for i, name in enumerate(new_cols):
    ws.cell(row=1, column=base + 1 + i, value=name)
c_prof, c_web, c_src, c_stat = (base + 1, base + 2, base + 3, base + 4)

filled = 0
for r in range(2, ws.max_row + 1):
    cid = ws.cell(row=r, column=cid_col).value
    if cid is None:
        continue
    rec = results.get(str(cid).strip())
    if not rec:
        continue
    ws.cell(row=r, column=c_prof, value=rec.get('ankaufsprofil', ''))
    ws.cell(row=r, column=c_web, value=rec.get('website', ''))
    ws.cell(row=r, column=c_src, value=rec.get('quelle', ''))
    ws.cell(row=r, column=c_stat, value=rec.get('status', ''))
    filled += 1

os.makedirs(os.path.dirname(OUT), exist_ok=True)
wb.save(OUT)
print(f'Filled {filled} investor rows. Wrote {OUT}')
