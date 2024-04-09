import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import EdgesensorHighRoundedIcon from "@mui/icons-material/EdgesensorHighRounded";
import ViewQuiltRoundedIcon from "@mui/icons-material/ViewQuiltRounded";
import carouselImg from "./../../../images/carousel-image-1.jpg";
import guidance from "../../../images/guidance.jpg";
import assistance from "../../../images/assistance.jpg";

const items = [
  {
    icon: <ViewQuiltRoundedIcon />,
    title: "Training",
    description: "Comprehensive training on Japanese language and culture",
    imageLight: `url(${carouselImg})`,
    imageDark: 'url("/static/images/templates/templates-images/dash-dark.png")',
  },
  {
    icon: <EdgesensorHighRoundedIcon />,
    title: "Guidance",
    description: "Expert guidance on the job search process",
    imageLight: `url(${guidance})`,
    imageDark:
      'url("/static/images/templates/templates-images/mobile-dark.png")',
  },
  {
    icon: <DevicesRoundedIcon />,
    title: "Assistance",
    description: "Assistance with visa applications and relocation",
    imageLight: `url(${assistance})`,
    imageDark:
      'url("/static/images/templates/templates-images/devices-dark.png")',
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid>
        <div item xs={6} md={6}>
          <Typography component="h2" variant="h4" color="text.primary">
            About Nihon Naukri Navigator
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: { xs: 2, sm: 4 } }}
          >
            Nihon Naukri Navigator (NNN) is a recruitment-based company that
            specializes in placing Indian engineers in Japan. Our name, reflects
            our experience of Japan (Nihon), our expertise in finding jobs
            (Naukri), and the founders' personal experience of navigating their
            lives from India to Japan (Navigator). Our founders have lived in
            Japan for a significant period and understand the gap between the
            two countries. They have also experienced firsthand the challenges
            and rewards of moving to a new country and starting a new career.
            This unique perspective allows them to provide our clients with the
            best possible support and guidance. We believe that every engineer
            has the potential to succeed, regardless of their background or
            experience. Our mission is to help Indian engineers achieve their
            dreams of working in Japan. We do this by providing them with the
            resources and support they need to be successful, including:
          </Typography>
        </div>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
              useFlexGap
              sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
            >
              {items.map(({ icon, title, description }, index) => (
                <Card
                  key={index}
                  variant="outlined"
                  component={Button}
                  onClick={() => handleItemClick(index)}
                  sx={{
                    p: 3,
                    height: "fit-content",
                    width: "100%",
                    background: "none",
                    backgroundColor:
                      selectedItemIndex === index
                        ? "action.selected"
                        : undefined,
                    borderColor: (theme) => {
                      if (theme.palette.mode === "light") {
                        return selectedItemIndex === index
                          ? "primary.light"
                          : "grey.200";
                      }
                      return selectedItemIndex === index
                        ? "primary.dark"
                        : "grey.800";
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      textAlign: "left",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { md: "center" },
                      gap: 2.5,
                    }}
                  >
                    <Box
                      sx={{
                        color: (theme) => {
                          if (theme.palette.mode === "light") {
                            return selectedItemIndex === index
                              ? "primary.main"
                              : "grey.300";
                          }
                          return selectedItemIndex === index
                            ? "primary.main"
                            : "grey.700";
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ textTransform: "none" }}>
                      <Typography
                        color="text.primary"
                        variant="body2"
                        fontWeight="bold"
                      >
                        {title}
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ my: 0.5 }}
                      >
                        {description}
                      </Typography>
                      <Link
                        color="primary"
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                          display: "inline-flex",
                          alignItems: "center",
                          "& > svg": { transition: "0.2s" },
                          "&:hover > svg": { transform: "translateX(2px)" },
                        }}
                        onClick={(event) => {
                          event.stopPropagation();
                        }}
                      >
                        <span>Explore</span>
                        <ChevronRightRoundedIcon
                          fontSize="small"
                          sx={{ mt: "1px", ml: "2px" }}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
          >
            <Card
              variant="outlined"
              sx={{
                height: "100%",
                width: "100%",
                display: { xs: "none", sm: "flex" },
                pointerEvents: "none",
              }}
            >
              <Box
                sx={{
                  m: "auto",
                  width: "100%",
                  height: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundImage: (theme) =>
                    theme.palette.mode === "light"
                      ? items[selectedItemIndex].imageLight
                      : items[selectedItemIndex].imageDark,
                }}
              />
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
