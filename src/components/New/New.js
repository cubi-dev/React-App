import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./News.css";
import { Container } from "@mui/system";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function News() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "100%" }}>
      <AppBar position="static">
        <Tabs
          style={{ backgroundColor: "#fff", color: "#000" }}
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            style={{ backgroundColor: "#000", color: "#fff" }}
            label="Apple"
            {...a11yProps(0)}
          />
          <Tab
            style={{ backgroundColor: "#000", color: "#fff" }}
            label="Apple"
            {...a11yProps(1)}
          />
          <Tab
            style={{ backgroundColor: "#000", color: "#fff" }}
            label="Apple"
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Container className="news__container">
            <div
              className="news__container-title"
              style={{ textAlign: "center", fontFamily: "Phudu , cursive" }}
            >
              <h2>AirPod</h2>
            </div>

            <div
              className="news__question-content"
              style={{ fontFamily: "Bitter, serif" }}
            >
              <h3>
                AirPods are wireless Bluetooth earbuds designed by Apple Inc.
              </h3>
            </div>

            <div className="news__body">
              They were first announced on September 7, 2016, alongside the
              iPhone 7. Within two years, they became Apple's most popular
              accessory.[4][5] The most recent model, AirPods (3rd generation),
              are a replacement to the 1st and 2nd generation models, although
              the 2nd generation is still sold on Apple's website. These models
              are Apple's entry-level wireless headphones, sold alongside the
              AirPods Pro and AirPods Max. In addition to playing audio, the
              AirPods contain a microphone that filters out background noise as
              well as built-in accelerometers and optical sensors capable of
              detecting taps and pinches (e.g. double-tap or pinch to pause
              audio) and placement within the ear, which enables automatic
              pausing of audio when they are taken out.[6] On March 20, 2019,
              Apple released the second-generation AirPods, which feature the H1
              chip, longer talk time, and hands-free "Hey Siri" support. An
              optional wireless charging case which costs extra was added in the
              offerings. On October 26, 2021, Apple released the
              third-generation AirPods, which feature an external redesign with
              shorter stems similar to AirPods Pro, spatial audio, IPX4 water
              resistance, longer battery life, and MagSafe charging capability.
              <img
                style={{ width: "100%" }}
                src="https://tse4.mm.bing.net/th?id=OIP.BzcUiIFDWrvw0D06twKB0AHaGV&pid=Api&P=0"
              ></img>
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h5>
                  1st generation Apple announced the first generation AirPods on
                  September 7, 2016, at an Apple Special Event alongside the
                  iPhone 7 and Apple Watch Series 2. Apple originally planned to
                  release the AirPods in late October,[7] but delayed the
                  release date.[8] On December 13, 2016, Apple began taking
                  online orders for AirPods. They were available at Apple
                  Stores, Apple Authorized Resellers, and select carriers on
                  December 20, 2016.[9][10]
                </h5>
              </div>
              AirPods contain a proprietary Apple W1 SoC processor which helps
              optimize battery use as well as the Bluetooth 4.2 and audio
              connections. The advanced connectivity functions of the W1
              requires devices running iOS 10, macOS Sierra, watchOS 3, or
              later.[1] They can also function as standard Bluetooth headphones
              when connected to any device that supports Bluetooth 4.0 or
              higher, including Windows laptops and Android
              devices.[11][12][13][14]
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h5>And</h5>
              </div>
              Production of the first-generation AirPods was discontinued on March 20, 2019, after the second generation was released.[20]
            </div>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Container className="news__container">
            <div
              className="news__container-title"
              style={{ textAlign: "center", fontFamily: "Phudu , cursive" }}
            >
              <h2>AirPod</h2>
            </div>

            <div
              className="news__question-content"
              style={{ fontFamily: "Bitter, serif" }}
            >
              <h3>
                AirPods are wireless Bluetooth earbuds designed by Apple Inc.
              </h3>
            </div>

            <div className="news__body">
              They were first announced on September 7, 2016, alongside the
              iPhone 7. Within two years, they became Apple's most popular
              accessory.[4][5] The most recent model, AirPods (3rd generation),
              are a replacement to the 1st and 2nd generation models, although
              the 2nd generation is still sold on Apple's website. These models
              are Apple's entry-level wireless headphones, sold alongside the
              AirPods Pro and AirPods Max. In addition to playing audio, the
              AirPods contain a microphone that filters out background noise as
              well as built-in accelerometers and optical sensors capable of
              detecting taps and pinches (e.g. double-tap or pinch to pause
              audio) and placement within the ear, which enables automatic
              pausing of audio when they are taken out.[6] On March 20, 2019,
              Apple released the second-generation AirPods, which feature the H1
              chip, longer talk time, and hands-free "Hey Siri" support. An
              optional wireless charging case which costs extra was added in the
              offerings. On October 26, 2021, Apple released the
              third-generation AirPods, which feature an external redesign with
              shorter stems similar to AirPods Pro, spatial audio, IPX4 water
              resistance, longer battery life, and MagSafe charging capability.
              <img
                style={{ width: "100%" }}
                src="https://tse4.mm.bing.net/th?id=OIP.BzcUiIFDWrvw0D06twKB0AHaGV&pid=Api&P=0"
              ></img>
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h5>
                  1st generation Apple announced the first generation AirPods on
                  September 7, 2016, at an Apple Special Event alongside the
                  iPhone 7 and Apple Watch Series 2. Apple originally planned to
                  release the AirPods in late October,[7] but delayed the
                  release date.[8] On December 13, 2016, Apple began taking
                  online orders for AirPods. They were available at Apple
                  Stores, Apple Authorized Resellers, and select carriers on
                  December 20, 2016.[9][10]
                </h5>
              </div>
              AirPods contain a proprietary Apple W1 SoC processor which helps
              optimize battery use as well as the Bluetooth 4.2 and audio
              connections. The advanced connectivity functions of the W1
              requires devices running iOS 10, macOS Sierra, watchOS 3, or
              later.[1] They can also function as standard Bluetooth headphones
              when connected to any device that supports Bluetooth 4.0 or
              higher, including Windows laptops and Android
              devices.[11][12][13][14]
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h5>And</h5>
              </div>
              Production of the first-generation AirPods was discontinued on March 20, 2019, after the second generation was released.[20]
            </div>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Container className="news__container">
            <div
              className="news__container-title"
              style={{ textAlign: "center", fontFamily: "Phudu , cursive" }}
            >
              <h2>AirPod</h2>
            </div>

            <div
              className="news__question-content"
              style={{ fontFamily: "Bitter, serif" }}
            >
              <h3>
                AirPods are wireless Bluetooth earbuds designed by Apple Inc.
              </h3>
            </div>

            <div className="news__body">
              They were first announced on September 7, 2016, alongside the
              iPhone 7. Within two years, they became Apple's most popular
              accessory.[4][5] The most recent model, AirPods (3rd generation),
              are a replacement to the 1st and 2nd generation models, although
              the 2nd generation is still sold on Apple's website. These models
              are Apple's entry-level wireless headphones, sold alongside the
              AirPods Pro and AirPods Max. In addition to playing audio, the
              AirPods contain a microphone that filters out background noise as
              well as built-in accelerometers and optical sensors capable of
              detecting taps and pinches (e.g. double-tap or pinch to pause
              audio) and placement within the ear, which enables automatic
              pausing of audio when they are taken out.[6] On March 20, 2019,
              Apple released the second-generation AirPods, which feature the H1
              chip, longer talk time, and hands-free "Hey Siri" support. An
              optional wireless charging case which costs extra was added in the
              offerings. On October 26, 2021, Apple released the
              third-generation AirPods, which feature an external redesign with
              shorter stems similar to AirPods Pro, spatial audio, IPX4 water
              resistance, longer battery life, and MagSafe charging capability.
              <img
                style={{ width: "100%" }}
                src="https://tse4.mm.bing.net/th?id=OIP.BzcUiIFDWrvw0D06twKB0AHaGV&pid=Api&P=0"
              ></img>
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h5>
                  1st generation Apple announced the first generation AirPods on
                  September 7, 2016, at an Apple Special Event alongside the
                  iPhone 7 and Apple Watch Series 2. Apple originally planned to
                  release the AirPods in late October,[7] but delayed the
                  release date.[8] On December 13, 2016, Apple began taking
                  online orders for AirPods. They were available at Apple
                  Stores, Apple Authorized Resellers, and select carriers on
                  December 20, 2016.[9][10]
                </h5>
              </div>
              AirPods contain a proprietary Apple W1 SoC processor which helps
              optimize battery use as well as the Bluetooth 4.2 and audio
              connections. The advanced connectivity functions of the W1
              requires devices running iOS 10, macOS Sierra, watchOS 3, or
              later.[1] They can also function as standard Bluetooth headphones
              when connected to any device that supports Bluetooth 4.0 or
              higher, including Windows laptops and Android
              devices.[11][12][13][14]
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h5>And</h5>
              </div>
              Production of the first-generation AirPods was discontinued on March 20, 2019, after the second generation was released.[20]
            </div>
          </Container>
        </TabPanel>
        {/* <TabPanel value={value} index={1} dir={theme.direction}>
          <Container className="news__container">
            <div
              className="news__container-title"
              style={{ textAlign: "center", fontFamily: "Phudu , cursive" }}
            >
              <h2>
                Real Madrid 0-1 Barcelona: Eder Militao own goal decides
                ill-tempered Copa del Rey semi-final first leg
              </h2>
            </div>

            <div
              className="news__question-content"
              style={{ fontFamily: "Bitter, serif" }}
            >
              <h5>
                Barcelona won without Robert Lewandowski, Pedri and Ousmane
                Dembele due to injury; Second leg on April 5 with the winners to
                face Athletic Bilbao or Osasuna in the final
              </h5>
            </div>

            <div className="news__body">
              A tenacious Barcelona frustrated Real Madrid to secure a 1-0 win
              over their bitter rivals in an ill-tempered Copa del Rey
              semi-final first leg at the Bernabeu on Thursday.
              <img
                style={{ width: "100%" }}
                src="https://e0.365dm.com/23/03/1600x900/skysports-eder-militao-real-madrid_6075891.jpg?20230302223940"
              ></img>
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h5>
                  The visitors defended superbly after Madrid centre-back Eder
                  Militao scored an own goal in the first half, managing to
                  overcome the loss of key players Robert Lewandowski, Pedri and
                  Ousmane Dembele, who all missed the game due to injuries.
                </h5>
              </div>
              It was a much-needed win for Barca after arriving in the Spanish
              capital under pressure, having been knocked out of the Europa
              League by Manchester United and then losing at lowly Almeria to
              halt a seven-game winning streak in LaLiga.
            </div>
          </Container>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Container className="news__container">
            <div
              className="news__container-title"
              style={{ textAlign: "center", fontFamily: "Phudu , cursive" }}
            >
              <h2>
                Mikel Arteta: Arsenal must improve 'massively' to compete with
                top teams in Europe after Sporting setback
              </h2>
            </div>

            <div
              className="news__question-content"
              style={{ fontFamily: "Bitter, serif" }}
            >
              <h5>
                Arsenal have conceded four goals in two games after shipping two
                apiece against Bournemouth and Sporting Lisbon; Mikel Arteta
                insisted his side must improve 'massively' in order to prevent
                defensive frailties creeping into their game; the Gunners face
                Fulham live on Sky Sports on Sunday
              </h5>
            </div>

            <div className="news__body">
              <img
                style={{ width: "100%" }}
                src="https://cdnmedia.baotintuc.vn/Upload/EqV5H9rWgvy9oNikwkHLXA/files/10032023Arsenal.jpg"
              ></img>
              Mikel Arteta says his Arsenal side gave 'too many balls away'
              which saw the Gunners finish with a 2-2 draw against Sporting
              Lisbon in the first leg of the Europa League last-16 tie
              <div
                className="news__question-content"
                style={{ fontFamily: "Bitter, serif" }}
              >
                <h4>
                  Mikel Arteta urged his much-changed Arsenal side to improve
                  'massively' after they needed to fight back to earn a scrappy
                  2-2 draw with Sporting Lisbon in the first leg of their Europa
                  League last-16 tie on Thursday.
                </h4>
              </div>
              The Gunners, who made six changes on the night, went ahead in the
              22nd minute through William Saliba but were pegged back by Goncalo
              Inacio's equaliser 12 minutes later, before Paulinho pounced to
              make it 2-1.
            </div>
          </Container>
        </TabPanel> */}
      </SwipeableViews>
    </Box>
  );
}
