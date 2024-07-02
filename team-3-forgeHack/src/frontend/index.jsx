import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text } from "@forge/react";
import { DatePicker } from "@forge/react";
import StarIcon from "@atlaskit/icon/glyph/star";
import { Badge } from "@forge/react";
import {
  ProgressTracker,
  LoadingButton,
  Stack,
  Box,
  Label,
  TextArea,
  xcss,
  Image,
  Inline,
  ProgressBar,
  Spinner,
  Heading,
  RequiredAsterisk,
  ErrorMessage,
  Button,
  FormSection,
  FormFooter,
  Divider,
  Toggle,
  HelperMessage,
  RadioGroup,
  Range,
  Select,
  ButtonGroup,
  UserGroup,
  User,
  Modal,
  ModalBody,
  ModalTransition,
  ModalTitle,
  ModalFooter,
  ModalHeader,
  Strong,
  Form,
  useForm,
  Textfield,
} from "@forge/react";
import { invoke, view } from "@forge/bridge";
import { ValidationMessage } from "@forge/react";

const App = () => {
  useEffect(() => {
    // invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  const data = [
    {
      name: "American India Foundation",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "The American India Foundation (AIF) is dedicated to accelerating social and economic change in India through education, livelihoods, public health, and leadership development programs.",
      review: "Reviews commend AIF for its significant impact on improving lives across India, particularly through scalable and sustainable initiatives.",
      overall: "However, some feedback notes challenges in program scalability and resource allocation, despite overall positive recognition for its contributions to social development in India.",
      rating: "⭐⭐⭐⭐⭐  "
    }, {
      name: "British Asian Trust",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "The British Asian Trust focuses on poverty reduction and improving lives in South Asia through education, livelihoods, mental health, and anti-trafficking initiatives.",
      review: "It employs innovative funding models and collaborates with local partners to achieve its goals. Reviews highlight the Trust's impactful projects and strategic partnerships, though there are calls for enhanced transparency and community engagement.",
      overall: "Overall, it is respected for its commitment to sustainable development in the region.",
      rating: "⭐⭐⭐⭐⭐   "
    }, {
      name: "CarrerVillage.org",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "CareerVillage.org crowdsources career advice to help students make informed career choices by connecting them with professionals.",
      review: "Users praise its accessibility and personalized guidance, noting positive impacts on career planning and confidence.",
      overall: "Feedback suggests a desire for more diverse industry professionals and consistent volunteer engagement, but overall, CareerVillage.org is highly regarded for its innovative and effective career guidance approach.",
      rating: "⭐⭐⭐⭐⭐  "
    }, {
      name: "Code.org",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "Code.org is a nonprofit organization dedicated to global expansion of computer science education through free coding courses and resources.",
      review: "It empowers students with digital skills and supports educators with professional development.",
      overall: "Positive reviews highlight Code.org's user-friendly curriculum and engagement, though occasional technical issues and pacing challenges are noted, overall emphasizing its impactful role in accessible and engaging computer science education worldwide.",
      rating: "⭐⭐⭐⭐⭐  "
    }, {
      name: "Education Outcomes Fund",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "The Education Outcomes Fund (EOF) aims to enhance global education outcomes through innovative financing that incentivizes effective interventions.",
      review: "It collaborates with governments, donors, and organizations to fund projects that demonstrate measurable improvements in learning outcomes.",
      overall: "While stakeholders praise EOF's innovative funding model and potential impact, challenges in scaling projects and ensuring sustainability remain areas of concern.",
      rating: "⭐⭐⭐⭐⭐  "
    }, {
      name: "Room to Read",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "Room to Read is dedicated to promoting literacy and gender equality across Asia and Africa through library construction, book provision, and support for girls' education.",
      review: "It emphasizes local partnerships and community engagement for lasting impact.",
      overall: "Reviews highlight its positive influence on literacy rates and girls' empowerment, but note challenges in scaling programs and maintaining outcomes in varied socio-economic settings.",
      rating: "⭐⭐⭐⭐⭐  "
    }, {
      name: "Raspberry Pi Foundation",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "The Raspberry Pi Foundation, based in the UK, advances global computer science education with affordable and versatile Raspberry Pi computers, bolstering educators with training and resources.",
      review: "It receives positive reviews for empowering learning in programming and electronics, though occasional technical issues exist, managed well by community support.",
      overall: "Overall, the Foundation is esteemed for its substantial influence on worldwide computer education, providing accessible tools despite occasional technical hurdles.",
      rating: "⭐⭐⭐⭐⭐  "
    }, {
      name: "ruangguru",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description: "Ruangguru is an Indonesian edtech firm providing online learning tools for K-12 students, emphasizing accessibility and affordability.",
      review: "Users generally praise its comprehensive content and interactive learning features, which positively impact academic performance.",
      overall: "However, concerns about app stability and customer service quality occasionally surface, despite its overall positive reputation for innovative educational solutions in Indonesia.",
      rating: "⭐⭐⭐⭐⭐   "
    }
  ];

  return (
    <Stack alignInline="center" alignBlock="center" space="space.300">
      <Box xcss={xcss({ marginBottom: "space.150" })}>
        <Heading as="h1">Foundation Fundraiser !!</Heading>
      </Box>

      <Inline>
        Hours <Badge appearance="primary">{"12hrs"}</Badge>
        <Box xcss={xcss({ marginLeft: "space.150" })}></Box>
        Donations <Badge appearance="primary">{"$250"}</Badge>
      </Inline>

      <Stack alignInline="center" alignBlock="center" space="space.200">
        <ProgressTrackerExample />
        {data.map((fund) => (
          <FundButton
            name={fund.name}
            image={fund.logo}
            description={fund.description}
            review={fund.review}
            overall={fund.overall}
            key={fund.name}
            rating={fund.rating}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const DonationForm = ({ name, onClose }) => {
  const { getFieldId, register, handleSubmit } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {
    setIsSubmitting(true);
    handleSubmit((data) => {
      console.log(data);
    });
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(true);
    }, 2000);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2">Foundation name: {name}</Heading>
      <Stack space="space.200">
        <Box>
          <Label labelFor={getFieldId("name")}>
            Name <RequiredAsterisk />
          </Label>
          <Textfield
            {...register("name", {
              required: true,
            })}
          />
        </Box>
        <Box>
          <Label labelFor={getFieldId("money")}>
            Amount of Money <RequiredAsterisk />
          </Label>
          <Textfield
            {...register("money", {
              required: true,
              pattern: {
                value: /^[0-9]*$/,
              },
            })}
          />
          <HelperMessage>Please put valid number.</HelperMessage>
        </Box>
        <Box>
          <Label labelFor={getFieldId("card")}>
            Card number <RequiredAsterisk />
          </Label>
          <Textfield
            {...register("card", {
              required: true,
              pattern: {
                value: /^[0-9]*$/,
              },
              minLength: {
                value: 16,
              },
              maxLength: {
                value: 16,
              },
            })}
          />
          <HelperMessage>
            Valid number card must be exactly 16 characters long.
          </HelperMessage>
        </Box>
        <Box>
          <Label labelFor={getFieldId("security")}>
            CVC <RequiredAsterisk />
          </Label>
          <Textfield
            {...register("security", {
              required: true,
              pattern: {
                value: /^[0-9]*$/,
              },
              minLength: {
                value: 3,
              },
              maxLength: {
                value: 3,
              },
            })}
          />
          <HelperMessage>
            Security number must be exactly 3 characters long.
          </HelperMessage>
        </Box>
        <FormFooter>
          {isSubmitted ? (
            <>
              <Button appearance="subtle" onClick={onClose}>
                Close
              </Button>
              <Button
                appearance="primary"
                xcss={xcss({
                  backgroundColor: "color.border.success",
                })}
              >
                Success!
              </Button>
            </>
          ) : (
            <>
              {isSubmitting ? (
                <>
                  <LoadingButton appearance="primary" isLoading>
                    Loading button
                  </LoadingButton>
                </>
              ) : (
                <>
                  <Button appearance="subtle" onClick={onClose}>
                    Close
                  </Button>
                  <Button appearance="primary" type="submit">
                    Submit
                  </Button>
                </>
              )}
            </>
          )}
        </FormFooter>
      </Stack>
    </Form>
  );
};

const FundButton = ({ name, image, description, review, overall, rating }) => {
  const [clicked, setClicked] = useState(false);
  const [donated, setDonated] = useState(false);
  const openDonated = () => setDonated(true);
  const closeDonated = () => setDonated(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { handleSubmit, getFieldId, register } = useForm();
  const [disabledDates, setDisabledDates] = useState([
    "2024-07-07",
    "2024-07-08",
    "2024-07-09",
    "2024-07-16",
    "2024-07-17",
    "2024-07-18",
  ]);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setDisabledDates((prevDates) => [...prevDates, data.datepicker]);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(true);
    }, 2000);
  };

  return (
    <>
      <Button
        onClick={() => setClicked((prev) => !prev)}
        shouldFitContainer
        appearance="primary"
        iconBefore="star"
        xcss={xcss({ marginBottom: "space.200" })}
      >
        {name}
      </Button>
      {clicked && (
        <Box
          xcss={xcss({
            padding: "space.200",
            backgroundColor: "color.background.accent.gray.subtlest"
          })}
        >
          <ModalTransition>
            {donated && (
              <Modal onClose={closeDonated}>
                <ModalHeader>
                  <ModalTitle>Payment Details</ModalTitle>
                </ModalHeader>
                <ModalBody>
                  <DonationForm name={name} onClose={closeDonated} />
                </ModalBody>
                <ModalFooter></ModalFooter>
              </Modal>
            )}
          </ModalTransition>
          <Stack space="space.100">
            <Heading as="h1">Summary ✨</Heading>
            <Inline>
              <Stack alignInline="start">
                <Image size="large" src={image} />
              </Stack>
              <Stack space="space.50">
                <Text>{description}</Text>
                <Text>{review}</Text>
                <Text>{overall}</Text>
              </Stack>
            </Inline>
              <Heading as="h3">What Atlassians Think 👀</Heading>
            <Inline space="space.200">
              <Stack>
                <Heading as="h3">{rating}</Heading>
              </Stack>
              <Stack alignInline="center" grow="fill">
                <Text>Such a cool initiative from {name}! They're making a meaningful impact in community through their innovative approach and dedication to education</Text>
              </Stack>
            </Inline>
            <Heading as="h3">Top Contributor 💥</Heading>
            <Inline xcss={{marginBottom: 'space.200'}}>
              <Stack>
                <User accountId="5a1234bc8d12345e3f1g11hi" />
              </Stack>
              <Stack alignInline="center" grow="fill" space="space.400">
                <Text>Wow, The {name} is doing fantastic work! Their dedication to making a positive impact across community is truly inspiring. Keep up the great work!</Text>  
              </Stack>
            </Inline>

            <Inline spread="space-between"> 
         
                <UserGroup>
                  <User accountId="5a1234bc8d12345e3f1g11hi" />
                  <User accountId="2a98a42dbc7ab42e12ee360d" />
                  <User accountId="5d8732lq8jg85a0e3f1g90as" />
                  <User accountId="2h98a10dbl5ab93e62hja23z" />
                  <User accountId="7b20f0bc2d05325e3f1g43ty" />
                  <User accountId="2p72s42dbc7ab42e90gf252d" />
                  <User accountId="2l01x78mf4pqw42e84fg40ad" />
                </UserGroup>   
                <Inline space="space.200">
                  <Button onClick={openDonated}>Donate</Button>
                  <Button onClick={openModal}>Volunteer</Button>
                </Inline>
            </Inline>
        
          </Stack>
        </Box>
      )}

      <ModalTransition>
        {isOpen && (
          <Modal onClose={closeModal}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader>
                <ModalTitle>Chose a date to volunteer! 🌈</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <Label labelFor={getFieldId("datepicker")}>
                  <RequiredAsterisk />
                  Choose Dates
                </Label>
                <DatePicker
                  defaultValue="2024-07-03"
                  disabled={disabledDates}
                  {...register("datepicker", { required: true })}
                />
              </ModalBody>
              <ModalFooter>
                <Button appearance="subtle" onClick={closeModal}>
                  Close
                </Button>
                {isSubmitted ? (
                  <Button
                    // appearance="primary"
                    xcss={xcss({
                      backgroundColor: "color.border.success",
                    })}
                  >
                    Success!
                  </Button>
                ) : (
                  <>
                    {isSubmitting ? (
                      <LoadingButton appearance="primary" isLoading>
                        Loading button
                      </LoadingButton>
                    ) : (
                      <Button appearance="primary" type="submit">
                        Submit
                      </Button>
                    )}
                  </>
                )}
              </ModalFooter>
            </Form>
          </Modal>
        )}
      </ModalTransition>
    </>
  );
};

const ProgressTrackerExample = () => {
  return (
    <ProgressTracker
      xcss={{ paddingBottom: "space.200" }}
      items={[
        {
          id: "1",
          label: "Bronze Badge 🥉",
          percentageComplete: 100,
          status: "visited",
        },
        {
          id: "2",
          label: "Silver Badge 🥈",
          percentageComplete: 100,
          status: "visited",
        },
        {
          id: "3",
          label: "Gold Badge 🥇",
          percentageComplete: 0,
          status: "current",
        },
        {
          id: "4",
          label: "Platinum Badge 💠",
          percentageComplete: 0,
          status: "unvisited",
        },
        {
          id: "5",
          label: "Diamond Badge 💎",
          percentageComplete: 0,
          status: "unvisited",
        },
      ]}
    />
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
