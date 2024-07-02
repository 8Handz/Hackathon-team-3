import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text } from "@forge/react";
import ForgeUI, { render, AvatarStack, Avatar } from "@forge/ui";
import { Box } from "@forge/react";
import { invoke } from "@forge/bridge";
import { Label, Textfield, TextArea } from "@forge/react";
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
  const [data, setData] = useState(null);

  useEffect(() => {
    invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  return (
    <>
      <Box  />
      <AvatarStack>
        <Avatar accountId="5a1234bc8d12345e3f1g11hi" />
        <Avatar accountId="2a98a42dbc7ab42e12ee360d" />
        <Avatar accountId="5d8732lq8jg85a0e3f1g90as" />
        <Avatar accountId="2h98a10dbl5ab93e62hja23z" />
        <Avatar accountId="7b20f0bc2d05325e3f1g43ty" />
        <Avatar accountId="2p72s42dbc7ab42e90gf252d" />
        <Avatar accountId="2l01x78mf4pqw42e84fg40ad" />
      </AvatarStack>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
