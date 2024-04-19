import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import AudioPlayer from "./AudioPlayer";
import { createTheme, ThemeProvider } from "@mui/material";

const Records = ({ data }) => {
  const theme = createTheme({
    palette: {
      text: {
        primary: "#E4F9F5",
      },
      action: {
        active: "#E4F9F5",
      },
    },
  });
  const baseBackgroundColor = "rgba(50, 50, 50, 0.5)";
  const columns = useMemo(
    () => [
      {
        accessorKey: "doc_name",
        header: "Doctor",
        size: 150,
      },
      {
        accessorKey: "pat_name",
        header: "Patient",
        size: 150,
      },
      {
        accessorKey: "date", //normal accessorKey
        header: "Date",
        size: 200,
      },
      {
        accessorKey: "age",
        header: "Age",
        size: 150,
      },
      {
        accessorKey: "audio",
        header: "Audio file",
        size: 150,
        Cell: ({ row }) => <AudioPlayer audioUrl={row.original.audio} />,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    muiTablePaperProps: {
      elevation: 0,

      sx: {
        borderRadius: "20px",
      },
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: baseBackgroundColor,
    }),
  });

  return (
    <ThemeProvider theme={theme}>
      <MaterialReactTable table={table} />
    </ThemeProvider>
  );
};

export default Records;
