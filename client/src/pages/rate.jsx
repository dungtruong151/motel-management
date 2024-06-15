import React from "react";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import { blue, grey } from "@mui/material/colors";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

export default function Rate() {
  return (
    <Container
      sx={{
        width: "100%",
        height: "83vh",
        backgroundColor: "primary",
        position: "relative",
      }}
    >
      <p style={{ color: grey[400] }}>Rate</p>
      <div style={{ margin: "30px 0 20px 0" }}>
        <div style={{ float: "right" }}>
          <Button variant="contained" sx={{ borderRadius: "7px" }}>
            Add rate
          </Button>
          <Button
            variant="outlined"
            startIcon={<FilterAltOutlinedIcon />}
            sx={{
              margin: "0 10px",
              borderRadius: "7px",
              color: grey[700],
              borderColor: grey[700],
            }}
          >
            Filter
          </Button>
        </div>

        <Button
          variant="outlined"
          href=""
          sx={{
            borderRadius: "100px",
            backgroundColor: blue[50],
            color: blue[700],
            borderColor: blue[700],
            visibility: "hidden",
          }}
        >
          Ongoing
        </Button>
      </div>

      {/* <DataTable /> */}
    </Container>
  );
}
