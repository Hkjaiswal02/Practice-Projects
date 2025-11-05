import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { setSort, setSearch, deleteRow, setPage } from "../redux/tableSlice";
import Pagination from "./Pagination";
function DataTable() {
  const dispatch = useDispatch();
  const { rows, columns, sort, search, page, pageSize } = useSelector(
    (s) => s.table
  );

  const visibleCols = columns.filter((c) => c.visible);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    let data = rows;
    if (q) {
      data = data.filter((r) =>
        visibleCols.some((c) =>
          String(r[c.key] ?? "")
            .toLowerCase()
            .includes(q)
        )
      );
    }
    if (sort.key) {
      data = [...data].sort((a, b) => {
        const va = a[sort.key] ?? "";
        const vb = b[sort.key] ?? "";
        if (va < vb) return sort.dir === "asc" ? -1 : 1;
        if (va > vb) return sort.dir === "asc" ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [rows, visibleCols, sort, search]);

  const pageCount = Math.ceil(filtered.length / pageSize) || 1;
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleSort = (key) => {
    const dir = sort.key === key && sort.dir === "asc" ? "desc" : "asc";
    dispatch(setSort({ key, dir }));
  };

  return (
    <Paper>
      <TableContainer>
        <TextField
          placeholder="Search..."
          variant="outlined"
          size="small"
          sx={{ m: 2, width: 300 }}
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
        <Table>
          <TableHead>
            <TableRow>
              {visibleCols.map((col) => (
                <TableCell key={col.key}>
                  <TableSortLabel
                    active={sort.key === col.key}
                    direction={sort.key === col.key ? sort.dir : "asc"}
                    onClick={() => handleSort(col.key)}
                  >
                    {col.label}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pageData.map((row) => (
              <TableRow key={row.id}>
                {visibleCols.map((col) => (
                  <TableCell key={col.key}>{row[col.key]}</TableCell>
                ))}
                <TableCell>
                  <IconButton onClick={() => dispatch(deleteRow(row.id))}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination
        page={page}
        count={pageCount}
        onChange={(p) => dispatch(setPage(p))}
      />
    </Paper>
  );
}

export default DataTable;
