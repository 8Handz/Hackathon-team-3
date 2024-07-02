import React, { useEffect, useState } from "react";
import ForgeReconciler, { Text } from "@forge/react";
import { requestConfluence } from '@forge/bridge';
// import ForgeUI, { render, AvatarStack, Avatar } from "@forge/ui";
import { Box } from "@forge/react";
import { invoke } from "@forge/bridge";
import { Label, Textfield, TextArea, User, UserGroup } from "@forge/react";
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

const fetchPageContent = async () => {
  const res = await requestConfluence('/wiki/api/v2/pages/2097194?body-format=storage');
  console.log(res);
  const data = await res.json();
  console.log(data);
  console.log(data.body.storage.value);
  return data.body.storage.value;
}

const App = () => {
  const [data, setData] = useState(null);
  const [pageData, setPageData] = useState(null);

  // fetchPageContent().then(setPageData).then(console.log(pageData));

  useEffect(() => {
    fetchPageContent().then(setPageData);
    invoke("getText", { example: "my-invoke-variable" }).then(setData);
  }, []);

  return (
    <>
      {/* <Box   /> */}
      <Text>Hello</Text>
      <UserGroup>
        <User accountId="5a1234bc8d12345e3f1g11hi" />
        <User accountId="2a98a42dbc7ab42e12ee360d" />
        <User accountId="5d8732lq8jg85a0e3f1g90as" />
        <User accountId="2h98a10dbl5ab93e62hja23z" />
        <User accountId="7b20f0bc2d05325e3f1g43ty" />
        <User accountId="2p72s42dbc7ab42e90gf252d" />
        <User accountId="2l01x78mf4pqw42e84fg40ad" />
      </UserGroup>
      <Text>{pageData || 'loading.....'}</Text>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
