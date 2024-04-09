import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import MobileStepper from "@mui/material/MobileStepper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/system";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import carouselImg from "./../../../images/carousel-image-1.jpg";
import carouselImg2 from "./../../../images/carousel-image-2.jpg";
import carouselImg3 from "./../../../images/carousel-image-3.jpg";
import carouselImg4 from "./../../../images/carousel-image-4.jpg";

export default function Hero() {
  const theme = useTheme();
  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const images = [
    {
      label: "Japanese Industries",
      imgPath: carouselImg2,
    },
    {
      label: "Our tutor",
      imgPath: carouselImg4,
    },
    {
      label: "Japanese culture 1",
      imgPath: carouselImg3,
    },
    {
      label: "Ja[anaese culture 2",
      imgPath: carouselImg4,
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 10, sm: 14 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.5rem, 10vw, 4rem)",
            }}
          >
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}
            >
              Nihon Naukri Navigator
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Discover boundless career prospects in Japan and embark on an
            exhilarating journey to uncover distinctive and captivating
            professional pathways. Open doors to a realm of unparalleled
            opportunities with NNN, navigating through Japan's corporate terrain
            with finesse and paving the way for triumph in your career. Embrace
            the keys to professional success and advancement, carving your path
            towards achievement and personal growth in Japan's dynamic corporate
            arena!
          </Typography>
        </Stack>
        <MobileStepper
          style={{ marginTop: 20 }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
        <AutoPlaySwipeableViews
          style={{ marginTop: -70 }}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={(theme) => ({
                    mt: { xs: 8, sm: 10 },
                    height: { xs: 200, sm: 700 },
                    alignSelf: "center",
                    backgroundSize: "cover",
                    display: "block",
                    overflow: "hidden",
                    width: "95%",
                    borderRadius: "10px",
                    outline: "1px solid",
                    outlineColor:
                      theme.palette.mode === "light"
                        ? alpha("#BFCCD9", 0.5)
                        : alpha("#9CCCFC", 0.1),
                    boxShadow:
                      theme.palette.mode === "light"
                        ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                        : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
                  })}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {""}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              {""}
            </Button>
          }
        />
      </Container>
    </Box>
  );
}
