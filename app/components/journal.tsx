import { Box, Typography } from "@mui/material";

export default function Journal() {
  return (
    <Box className="my-5">
      <Typography variant="h5">
        <b>2018</b>
        <br />
      </Typography>
      <Typography variant="h6">
        <b>06/14/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`Nobody said this was easy`}<br />
        {`Nobody said that it would be this hard`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>06/15/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`It's hard for me to feel proud of all the things I have accomplished`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>06/16/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`I don't want to keep hiding who I am`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>06/24/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`It's so difficult to continue when all I can imagine is the worst possible outcome.`}<br />
        {`How much longer until I make it to the other side?`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>06/26/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`I will never ask for what I want; I will never get what I need`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>07/03/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`Do you know what it feels like knowing that none of your dreams will ever come true?`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>07/21/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`I'm learning to be comfortable with being alone`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>07/25/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`It may be surprising, but not everything is as scary as it seems`}<br />
      </Typography>
      <br />
      <Typography variant="h6">
        <b>08/26/18</b>
        <br />
      </Typography>
      <Typography variant="body1">
        {`Why can't I just be brave?`}<br />
      </Typography>
      <br />
      <Typography variant="h5">More to come, stay tuned!</Typography>
    </Box>
  );
}
