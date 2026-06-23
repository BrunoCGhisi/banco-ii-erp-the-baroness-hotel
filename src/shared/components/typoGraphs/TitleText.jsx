import Typography from "@mui/material/Typography";

export default function TitleText({
                                      titleText,
                                      variant = "h4",
                                      sx = {},

                                  }) {
    return (

        <Typography variant={variant} sx={sx}>
            {titleText}
        </Typography>
    );
}