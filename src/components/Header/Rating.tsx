import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import {FC, useState} from "react";

interface IProps{
    initialRating: number
}
export const BasicRating:FC<IProps> = ({ initialRating }) => {
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
