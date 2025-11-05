import Papa from "papaparse";

export function parseCSV(file) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results),
      error: (err) => reject(err),
    });
  });
}
export function exportCSV(rows, columns) {
  const visibleKeys = columns.filter((c) => c.visible).map((c) => c.key);
  const data = rows.map((r) => {
    const obj = {};
    visibleKeys.forEach((k) => (obj[k] = r[k] ?? ""));
    return obj;
  });
  const csv = Papa.unparse(data);
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  return blob;
}
