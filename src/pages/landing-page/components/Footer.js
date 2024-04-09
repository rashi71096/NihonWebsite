import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NihonLogo3 from "./../../../images/NihinLogo3.png";
import NihonLogo2 from "./../../../images/NihinLogo2.png";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationIcon from "@mui/icons-material/LocationCity";
import TwitterIcon from "@mui/icons-material/X";
import NihonLogoMain from "../../../images/NihonLogoMain.png";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Email";
import { Email, Phone } from "@mui/icons-material";

const logoStyle = {
  width: "140px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <Link href="#">NNN&nbsp;</Link>
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      id="contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            minWidth: { xs: "100%", sm: "60%" },
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
            <Box
              sx={{
                ml: "-15px",
              }}
            >
              <img
                src={NihonLogoMain}
                style={{ ...logoStyle, height: 150, width: 150 }}
                alt="logo of nihon"
              />
            </Box>
            <Box
              sx={{
                ml: "-15px",
              }}
            >
              <Typography variant="h5" gutterBottom fontWeight={600}>
                Contact us
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 7,
                }}
              >
                <LocationIcon style={{ marginRight: 5 }} />
                <Typography color="text.secondary">
                  Smriti Nagar, Bhilai , CG, India
                </Typography>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 7,
                }}
              >
                <Phone style={{ marginRight: 5 }} />
                <Typography color="text.secondary">+91 98278 89143</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: 7,
                }}
              >
                <Email style={{ marginRight: 5 }} />
                <Typography color="text.secondary">
                  nihonnaukrinavigator@gmail.com
                </Typography>
              </div>
            </Box>
          </Box>
        </Box>
        {/* <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Typography variant="body2" fontWeight={600}>
            Short Links
          </Typography>
          <Link color="text.secondary" href="#">
            Features
          </Link>
          <Link color="text.secondary" href="#">
            Testimonials
          </Link>
          <Link color="text.secondary" href="#">
            Highlights
          </Link>
          <Link color="text.secondary" href="#">
            FAQs
          </Link>
        </Box> */}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          pt: { xs: 4, sm: 8 },
          width: "100%",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <div>
          <Link color="text.secondary" href="#">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="#">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: "text.secondary",
          }}
        >
          <IconButton
            color="inherit"
            href="#"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/company/nihonnaukrinavigator"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
