import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export const BasicRating: React.FC<{ initialRating: number }> = ({ initialRating }) => {
    const [value, setValue] = React.useState<number | null>(initialRating);

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
