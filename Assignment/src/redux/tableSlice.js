import { createSlice } from "@reduxjs/toolkit";
const initialData = [
  {
    id: 1,
    Name: "Alice",
    Email: "alice@example.com",
    Age: 25,
    Role: "Developer",
  },
  { id: 2, Name: "Bob", Email: "bob@example.com", Age: 29, Role: "Designer" },
  { id: 3, Name: "Cara", Email: "cara@example.com", Age: 22, Role: "Intern" },
];

const defaultColumns = [
  { key: "Name", label: "Name", visible: true },
  { key: "Email", label: "Email", visible: true },
  { key: "Age", label: "Age", visible: true },
  { key: "Role", label: "Role", visible: true },
];

const tableSlice = createSlice({
  name: "table",
  initialState: {
    rows: initialData,
    columns: defaultColumns,
    sort: { key: null, dir: "asc" },
    search: "",
    page: 1,
    pageSize: 10,
  },
  reducers: {
    setRows(state, action) {
      state.rows = action.payload;
    },
    addRow(state, action) {
      const id = state.rows.length
        ? Math.max(...state.rows.map((r) => r.id)) + 1
        : 1;
      state.rows.push({ id, ...action.payload });
    },
    updateRow(state, action) {
      const idx = state.rows.findIndex((r) => r.id === action.payload.id);
      if (idx !== -1) state.rows[idx] = action.payload;
    },
    deleteRow(state, action) {
      state.rows = state.rows.filter((r) => r.id !== action.payload);
    },
    setColumns(state, action) {
      state.columns = action.payload;
    },
    toggleColumnVisibility(state, action) {
      const c = state.columns.find((col) => col.key === action.payload);
      if (c) c.visible = !c.visible;
    },
    addCustomColumn(state, action) {
      state.columns.push({
        key: action.payload.key,
        label: action.payload.label,
        visible: true,
      });
      // also add default value to existing rows
      state.rows = state.rows.map((r) => ({
        ...r,
        [action.payload.key]: action.payload.default ?? "",
      }));
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
      state.page = 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
});

export const {
  setRows,
  addRow,
  updateRow,
  deleteRow,
  setColumns,
  toggleColumnVisibility,
  addCustomColumn,
  setSort,
  setSearch,
  setPage,
} = tableSlice.actions;

export default tableSlice.reducer;
