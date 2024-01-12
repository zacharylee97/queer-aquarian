import { Box, Drawer, Link } from "@mui/material";
import { MobileMenuProps } from "../interfaces/mobile-menu-props";

export default function MobileDrawer({
  open,
  setDrawerState,
}: MobileMenuProps) {
  return (
    <Drawer
      sx={{
        [`& .MuiDrawer-paper`]: {
          backgroundColor: "black",
          marginTop: { xs: "5rem", sm: "6rem" },
        },
      }}
      anchor="left"
      open={open}
      onClose={() => setDrawerState(false)}
    >
      <Box sx={{ marginTop: "1rem" }}>
        <Link href="/" className="mobile-link">
          home
        </Link>
        <Link href="/horoscope" className="mobile-link">
          horoscope
        </Link>
        <Link href="/food-and-travel" className="mobile-link">
          food & travel
        </Link>
        <Link href="/journal" className="mobile-link">
          journal
        </Link>
        <Link href="/clobs" className="mobile-link">
          clobs
        </Link>
        <Link href="/poems" className="mobile-link">
          poems
        </Link>
      </Box>
    </Drawer>
  );
}
