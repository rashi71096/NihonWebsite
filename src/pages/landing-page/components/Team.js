import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import { CardMedia } from "@mui/material";
import AshifImage from "../../../images/Ashif.jpg";
import TilakImage from "../../../images/Tilak.jpg";
import RahulGarg from "../../../images/RahulGarg.jpg";
import Kazunari from "../../../images/kazunari.jpg";
import Omprakash from "../../../images/omprakash.jpg";

const teamDetails = [
  {
    pic: Omprakash,
    name: "Dr Om Prakash Sahu",
    occupation: "Co-Founder",
    testimonial:
      "Dr. Om Prakash Sahu, Co-founder of Nihon Naukri Navigator, He is a distinguished figure in education, industrial design, and entrepreneurship. With a Ph.D. in Industrial Design and a Post-Ph.D. in Intelligent Systems from Ritsumeikan University, Japan, Dr. Sahu has made significant contributions to both academia and industry. He served as a Senior Scientist at Mitsubishi Electric in Osaka, Japan, integrating technology with practical design. Presently, he's a Professor and Dean at a prominent engineering college in Raipur, guiding students globally. Dr. Sahu has also founded two companies in education and industrial production, showcasing his entrepreneurial skills. Additionally, he is a motivational speaker, inspiring students, entrepreneurs, and professionals with his diverse experiences. Dr. Sahu is not just an educator and entrepreneur but a visionary, impacting various fields and creating new learning and development opportunities.",
  },
  {
    pic: AshifImage,
    name: "Dr Ashif Equbal",
    occupation: "Co-Founder",
    testimonial:
      "Ashif is a dedicated co-founder of Nihon Naukri Navigator, currently based in the scenic landscapes of Kyoto, Japan. His academic journey commenced with a Bachelor's degree in Mechanical Engineering, achieved at a prestigious institution in Punjab, India. This was followed by a transformational journey at the esteemed Indian Institute of Technology, Hyderabad, culminating in a coveted Ph.D. in metallurgy from Kyoto University, Japan. Professionally, he hold the role of a Mechanical Design Engineer at a world-class CNC manufacturing company, an experience that has honed his appreciation for technological innovation and the art of cross-cultural collaboration. Nihon Naukri Navigator reflects his passion for building bridges and nurturing connections. He dedicated to empowering Indian talents to access enriching job opportunities in Japan while fostering robust relationships between the two nations",
  },
  {
    pic: RahulGarg,
    name: "Rahul Garg",
    occupation: "Co-Founder",
    testimonial:
      "Rahul is a dynamic entrepreneur with a strong educational foundation. He graduated from the prestigious Indian Institute of Technology Hyderabad, where he not only developed strong technical skills but also delved into the world of entrepreneurship. His thirst for knowledge and international exposure led him to the University of Tokyo, where he pursued his post-graduation. During his academic journey, Rahul had the privilege of representing student organizations like in both India and Japan. These experiences allowed him to build an extensive network across educational institutions in both countries. He also had the unique opportunity to represent international organizations like ISACE-UTokyo, JSCE Int'l group, fib YMG Japan, further expanding his global perspective. Rahul's driving ambition now is to bridge the gap betwe Nihon Naukri Navigator's mission. Rahul's driving ambition now is to bridge the gap betwe Nihon Naukri Navigator's mission.",
  },
  {
    pic: TilakImage,
    name: "Dr. Tilak Bhattacharjee",
    occupation: "Japanese Language Lead",
    testimonial:
      "Dr. Tilak Bhattacharjee completed his Bachelor of Technology (B. Tech) degree in Metallurgical and Materials Engineering from the National Institute of Technology, Tiruchirappalli, India and received gold medal for getting the highest cumulative grade point average (CGPA) in B. Tech. Then he went to Japan where initially he pursued his masters and doctoral degree in Materials Science and Engineering from University of Tsukuba under the National Institute for Materials Science (NIMS) graduate assistantship scholarship given by NIMS, Tsukuba, Japan. After that he worked as a post-doctoral researcher at the Department of Materials Science and Engineering, Kyoto University, Japan. During his stay in Japan he was able to learn the beautiful Japanese language and successfully passed the JLPT (Japanese language proficiency test) N1 level which is the most difficult level. He presently teaches Japanese online and also has a YouTube channel name 'Nihongo Gyan' for Japanese learning.",
  },
  {
    pic: Kazunari,
    name: "Kazunari Domitsu",
    occupation: "Volunteer Advisor",
    testimonial:
      "Meet our esteemed startup advisor, a seasoned know-how researcher whose success in life, work, and family is unparalleled. With a foundation shaped by senior craftsmen, he excels in tailoring subjects to compelling content and holds mastery in decoding old documents. As a lifelong learning instructor specializing in old documents, he brings invaluable insights to our startup. Beyond instruction, he contributes to language program development, proficient in English, Chinese, Korean, Hindi, and Urdu. Holding national qualifications as a management consultant, he strategically tackled a three-year energy-saving learning method, minimizing impact on his primary duties. Commencing his career with NHK in 1994, he reached new heights, acquiring the registered management consultant designation in 2014. As our startup advisor, he blends expertise, resilience,and commitment to excellence, adding immeasurable value to our entrepreneurial journey.",
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container
      id="team"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          Our Team
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Meet our expert team members
        </Typography>
      </Box>
      <Grid
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
        container
        spacing={2}
      >
        {teamDetails.map((testimonial, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                p: 1,
              }}
            >
              <CardMedia
                // style={{ border: "1px solid red" }}
                component="img"
                height="194"
                image={testimonial.pic}
                alt={testimonial.name}
              />
              <CardContent
                style={{
                  textAlign: "justify",
                  border: "1px solid transparent",
                }}
              >
                <Typography variant="h5">{testimonial.name}</Typography>
              </CardContent>
              <CardContent
                style={{
                  textAlign: "justify",
                  border: "1px solid transparent",
                  marginTop: 0,
                }}
              >
                <Typography>{testimonial.testimonial}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
