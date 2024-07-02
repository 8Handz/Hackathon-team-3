import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text } from "@forge/react";
import { ProgressTracker } from "@forge/react";
import { Stack } from "@forge/react";
import { Box } from "@forge/react";
import { invoke } from "@forge/bridge";
import { Label, Textfield, TextArea, xcss } from "@forge/react";
import { view } from "@forge/bridge";
import { Spinner } from "@forge/react";
import {
  RadioGroup,
  Heading,
  RequiredAsterisk,
  ErrorMessage,
  Button,
  Form,
  FormSection,
  FormFooter,
  useForm,
} from "@forge/react";

const App = () => {
  // const [data, setData] = useState(null);
  // const [clicked, setClicked] = useState(false);

  useEffect(() => {
    // Grab data of buttons in json object
    // invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  const data = [
    {
      name: "AIF",
      logo: "image",
    },
    {
      name: "British Asian Trust",
      logo: "image",
    },
  ];

  return (
    <>
      {/* <Button
        onClick={() => setClicked((prev) => !prev)}
        shouldFitContainer
        appearance="primary"
      >
        America India Foundation
      </Button> */}

      <Stack alignInline="center" alignBlock="center">
        <Box xcss={xcss({ marginBottom: "space.150" })}>
          <Heading as="h1">Foundation Fundraiser !!</Heading>
        </Box>

        <Stack alignInline="center" alignBlock="center" space="space.100">
          <ProgressTrackerExample />
          {/* <Stack grow="fill" space="space.200"> */}
          {data.map((fund) => (
            <FundButton name={fund.name} />
          ))}
        </Stack>
      </Stack>
    </>
  );
};

const FundButton = ({ name }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Button
        onClick={() => setClicked((prev) => !prev)}
        shouldFitContainer
        appearance="primary"
      >
        {name}
      </Button>
      {clicked && <SummaryStack />}
    </>
  );
};

const SummaryStack = () => {
  return (
    <>
      <Box
        xcss={xcss({
          backgroundColor: "color.background.discovery",
        })}
      >
        <Stack>
          <Text>
            skjdnfskjdnfksnfksdnfklsdnfksnflksdnflksnflksnflksndflkssdfkjsnfjknskfjnsdkjfnsdjfnsdkjnfksjdnfjksnfkjsnfnsdfjsdnfksdnfksjfkjsf
            sdfjnsdkjfskjdnfkjsdnfkjsdnfkjsnfjksdnfksdnfsdkf
            sdfkjsnfkjsdnfkjsnfkjsnfkjsn
          </Text>
        </Stack>
      </Box>
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
