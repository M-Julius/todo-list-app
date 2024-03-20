import React from 'react';
import { Typography } from "@mui/material";

const DataNotFound = ({title = 'Data not founds!'}) => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <img
        src={
          "https://cdni.iconscout.com/illustration/premium/thumb/no-address-found-4064364-3363925.png"
        }
        alt="No data found"
        style={{ display: "block", margin: "auto", maxWidth: "100%" }}
      />

      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
    </div>
  );
};

export default DataNotFound;