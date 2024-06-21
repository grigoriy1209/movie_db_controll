import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {FC, useState} from "react";

export const BasicRating:FC<{ initialRating: number }> = ({ initialRating }) => {
    const [value, setValue] = useState<number | null>(initialRating);

    return (
        <Box sx={{ '& > legend': { mt: 2 } }}>
            <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
        </Box>
    )};
