import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text } from "@forge/react";
import { DatePicker } from "@forge/react";
import StarIcon from "@atlaskit/icon/glyph/star";
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
  RadioGroup,
  Heading,
  RequiredAsterisk,
  ErrorMessage,
  Button,
  FormSection,
  FormFooter,
  Divider,
  Modal,
  ModalBody,
  ModalTransition,
  ModalTitle,
  ModalFooter,
  ModalHeader,
  Form,
  useForm,
  Textfield,
} from "@forge/react";
import { invoke, view } from "@forge/bridge";

const App = () => {
  useEffect(() => {
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
                    <Button onClick={openModal}>Volunteer</Button>
                  </Inline>
                </Stack>
              </Stack>
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
