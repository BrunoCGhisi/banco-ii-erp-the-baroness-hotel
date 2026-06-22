import Typography from "@mui/material/Typography";

export default function TitleText({
                                      titleText,
                                      variant = "h4",
                                  }) {
    return (
        <Typography variant={variant}>
            {titleText}
        </Typography>
    );
}