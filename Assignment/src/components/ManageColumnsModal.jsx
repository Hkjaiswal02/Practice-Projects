import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import {
  toggleColumnVisibility,
  addCustomColumn,
  setColumns,
} from "../redux/tableSlice";

function ManageColumnsModal({ open, onClose }) {
  const dispatch = useDispatch();
  const columns = useSelector((s) => s.table.columns);
  const [key, setKey] = useState("");
  const [label, setLabel] = useState("");

  const handleAdd = () => {
    if (!key || !label) return;
    dispatch(addCustomColumn({ key, label }));
    setKey("");
    setLabel("");
  };

  const handleSave = () => {
    // persist already handled in App via localStorage, but we can also force-set
    dispatch(setColumns(columns));
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Manage Columns</DialogTitle>
      <DialogContent>
        <Stack spacing={1} sx={{ mt: 1 }}>
          {columns.map((col) => (
            <FormControlLabel
              key={col.key}
              control={
                <Checkbox
                  checked={col.visible}
                  onChange={() => dispatch(toggleColumnVisibility(col.key))}
                />
              }
              label={col.label + ` (${col.key})`}
            />
          ))}

          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <TextField
              label="Key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              size="small"
            />
            <TextField
              label="Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              size="small"
            />
            <Button onClick={handleAdd}>Add</Button>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ManageColumnsModal;
