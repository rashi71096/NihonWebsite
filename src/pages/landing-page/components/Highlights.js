import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AutoFixHighRoundedIcon from "@mui/icons-material/AutoFixHighRounded";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import SettingsSuggestRoundedIcon from "@mui/icons-material/SettingsSuggestRounded";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

const items = [
  {
    icon: <SettingsSuggestRoundedIcon />,
    title: "Job Matching",
    description:
      "Our company offers a comprehensive job matching service, connecting job seekers with the perfect employment opportunities. We focus on matching the right job to the right candidate. We streamline the job search process, making it efficient and tailored to each individual's needs.",
  },
  {
    icon: <ConstructionRoundedIcon />,
    title: "Company Briefing Session",
    description:
      "We understand that making an informed decision about your future employer is crucial. Our company briefing sessions provide candidates with valuable insights into potential employers. We organize sessions where companies present their culture, values, work environment, and growth prospects. This service empowers job seekers to make well-informed decisions about their career choices.",
  },
  {
    icon: <ThumbUpAltRoundedIcon />,
    title: "Resume Making support",
    description:
      "An impressive resume is essential for landing your dream job. We will assist job seekers create impactful and customized resumes as per the industry’s needs.",
  },
  {
    icon: <AutoFixHighRoundedIcon />,
    title: "Japanese Language Support",
    description:
      "We offer Japanese language support to job seekers who want to work in Japan. We make arrangements to provide guidance and resources to help candidates improve their language proficiency, boosting their chances of success in their job search and workplace.",
  },
  {
    icon: <SupportAgentRoundedIcon />,
    title: "Networking",
    description:
      "Building a professional network is essential for career growth. Our company facilitates networking opportunities, connecting job seekers with industry professionals, mentors, and potential employers. We help you to build your network in Japan by arranging networking events, and online communities to help individuals expand their professional contacts and learn from experienced professionals in their field.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "#06090a",
      }}
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography component="h2" variant="h4">
            Services
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            Services Built Specifically For You
          </Typography>
        </Box>
        <Grid
          container
          spacing={2.5}
          style={{
            textAlign: "justify",
            // alignItems: "center",
            justifyContent: "center",
          }}
        >
          {items.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: "100%",
                  border: "1px solid",
                  borderColor: "grey.800",
                  background: "transparent",
                  backgroundColor: "grey.900",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
