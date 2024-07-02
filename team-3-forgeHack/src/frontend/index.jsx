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
  Strong
  Form,
  useForm,
  Textfield
} from "@forge/react";
import { invoke, view } from "@forge/bridge";
import { ValidationMessage } from '@forge/react';

const App = () => {
  useEffect(() => {
    // invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  const data = [
    {
      name: "American India Foundation",
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

const DonationForm = ({name, onClose}) => {
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
                value: /^[0-9]*$/
                }
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
                value: /^[0-9]*$/
                },
                minLength: {
                  value: 16
                },
                maxLength: {
                  value: 16
                }
              })}
            />  
            <HelperMessage>Valid number card must be exactly 16 characters long.</HelperMessage> 
          </Box>
          <Box>
            <Label labelFor={getFieldId("security")}>
              CVC <RequiredAsterisk />
            </Label>
            <Textfield
              {...register("security", {
                required: true,
                pattern: {
                value: /^[0-9]*$/
                },
                minLength: {
                  value: 3,
                },
                maxLength: {
                  value: 3
                }
              })}
            />  
            <HelperMessage>Security number must be exactly 3 characters long.</HelperMessage> 
          </Box>
      <FormFooter>
          {isSubmitted ? (
            <>
            <Button appearance="subtle" onClick={onClose}>Close</Button>
            <Button
              appearance="primary"
              xcss={xcss({
                backgroundColor: "color.border.success",
              })}
            >
              Success!
            </Button>
            </>) : (
            <>
              {isSubmitting ? (
                <>
                <LoadingButton appearance="primary" isLoading>
                  Loading button
                </LoadingButton>
                </>
              ) : (
                <>
                <Button appearance="subtle" onClick={onClose}>Close</Button>
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

const FundButton = ({ name, image, description }) => {
  const [clicked, setClicked] = useState(false);
  const [donated, setDonated] = useState(false);
  const { getFieldId, register, handleSubmit } = useForm();
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
            backgroundColor: "color.background.accent.gray.subtlest",
          })}
        >
          <ModalTransition>
            {donated && (
              <Modal onClose={closeDonated}>
              <ModalHeader>
                <ModalTitle>Payment Details</ModalTitle>
              </ModalHeader>
              <ModalBody>
                <DonationForm name={name} onClose={closeDonated}/>
              </ModalBody>
              <ModalFooter>

              </ModalFooter>
            </Modal>
            )}
          </ModalTransition>
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
                    <Button onClick={openDonated}>Donate</Button>
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
