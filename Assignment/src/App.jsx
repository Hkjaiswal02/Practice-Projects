import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import DownloadIcon from "@mui/icons-material/Download";
import { parseCSV, exportCSV } from "./utils/csvUtils";
import { setRows, setColumns } from "./redux/tableSlice";
import DataTable from "./components/DataTable";
import ManageColumnsModal from "./components/ManageColumnsModal";

function App() {
  const dispatch = useDispatch();
  const columns = useSelector((s) => s.table.columns);
  const rows = useSelector((s) => s.table.rows);
  const [openCols, setOpenCols] = useState(false);

  useEffect(() => {
    // load columns from localStorage
    const saved = localStorage.getItem("columns_v1");
    if (saved) dispatch(setColumns(JSON.parse(saved)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("columns_v1", JSON.stringify(columns));
  }, [columns]);

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const res = await parseCSV(file);
      if (!res || !res.data) return alert("Invalid CSV");
      // Ensure every row has an id
      const parsed = res.data.map((r, i) => ({ id: Date.now() + i, ...r }));
      dispatch(setRows(parsed));
    } catch (err) {
      console.error(err);
      alert("Failed to parse CSV");
    }
  };

  const handleExport = () => {
    const blob = exportCSV(rows, columns);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "export.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Dynamic Data Table Manager</Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={() => setOpenCols(true)}>Manage Columns</Button>
          <Button component="label" startIcon={<UploadFileIcon />}>
            Import CSV
            <input
              hidden
              type="file"
              accept=".csv,text/csv"
              onChange={handleImport}
            />
          </Button>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            onClick={handleExport}
          >
            Export CSV
          </Button>
        </Stack>
      </Stack>

      <Box sx={{ mt: 3 }}>
        <DataTable />
      </Box>

      <ManageColumnsModal open={openCols} onClose={() => setOpenCols(false)} />
    </Container>
  );
}

export default App;
