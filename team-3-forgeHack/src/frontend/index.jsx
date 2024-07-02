import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text } from "@forge/react";
import {
  ProgressTracker,
  Stack,
  Box,
  Label,
  Textfield,
  TextArea,
  xcss,
  Image,
  Inline,
  ProgressBar,
  Spinner,
  RadioGroup,
  Heading,
  RequiredAsterisk,
  ErrorMessage,
  Button,
  Form,
  FormSection,
  FormFooter,
  useForm,
  Divider,
} from "@forge/react";
import { invoke, view } from "@forge/bridge";

const App = () => {
  useEffect(() => {
    // Grab data of buttons in json object
    // invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  const data = [
    {
      name: "AIF",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description:
        "American India Foundation (AIF) brings 20-years of experience catalyzing social and economic change in India to improve the lives of India's underprivileged with a special focus on women, children, and youth.",
    },
    {
      name: "British Asian Trust",
      logo: "https://media.giphy.com/media/jUwpNzg9IcyrK/source.gif",
      description:
        "American India Foundation (AIF) brings 20-years of experience catalyzing social and economic change in India to improve the lives of India's underprivileged with a special focus on women, children, and youth.",
    },
  ];

  return (
    <Stack alignInline="center" alignBlock="center" space="space.300">
      <Box xcss={xcss({ marginBottom: "space.150" })}>
        <Heading as="h1">Foundation Fundraiser !!</Heading>
      </Box>

      <Stack alignInline="center" alignBlock="center" space="space.200">
        <ProgressTrackerExample />
        {data.map((fund) => (
          <FundButton
            name={fund.name}
            image={fund.logo}
            description={fund.description}
            key={fund.name}
          />
        ))}
      </Stack>
    </Stack>
  );
};

const FundButton = ({ name, image, description }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Button
        onClick={() => setClicked((prev) => !prev)}
        shouldFitContainer
        appearance="primary"
        xcss={xcss({ marginBottom: "space.200" })}
      >
        {name}
      </Button>
      {clicked && (
        <Box
          xcss={xcss({
            padding: "space.200",
            backgroundColor: "color.background.accent.gray.subtlest",
          })}
        >
          <Stack space="space.200">
            <Heading as="h1">Summary ✨</Heading>
            <Inline>
              <Stack alignInline="start" grow="hug">
                <Image size="large" src={image} />
              </Stack>
              <Stack space="space.150">
                <Text>{description}</Text>
                <ProgressBarSuccessExample />
                <Stack grow="fill">
                  <Inline alignInline="end" space="space.200">
                    <Button>Donate</Button>
                    <Button>Volunteer</Button>
                  </Inline>
                </Stack>
              </Stack>
            </Inline>
          </Stack>
        </Box>
      )}
    </>
  );
};

const ProgressBarSuccessExample = () => {
  return (
    <ProgressBar
      xcss={{ marginBottom: "space.200" }}
      appearance="success"
      ariaLabel="Done: 10 of 10 issues"
      value={0.7}
    />
  );
};

const ProgressTrackerExample = () => {
  return (
    <ProgressTracker
      xcss={{ paddingBottom: "space.200" }}
      items={[
        {
          id: "1",
          label: "Disabled step",
          percentageComplete: 100,
          status: "disabled",
        },
        {
          id: "2",
          label: "Create a space",
          percentageComplete: 100,
          status: "visited",
        },
        {
          id: "3",
          label: "Upload a photo",
          percentageComplete: 0,
          status: "current",
        },
        {
          id: "4",
          label: "Your details",
          percentageComplete: 0,
          status: "unvisited",
        },
        {
          id: "5",
          label: "Invite users",
          percentageComplete: 0,
          status: "unvisited",
        },
        {
          id: "6",
          label: "Confirm",
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
