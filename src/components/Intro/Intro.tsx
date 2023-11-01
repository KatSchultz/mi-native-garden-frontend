import { Text, Title } from "@mantine/core";
import React from "react";

const Intro = () => {
  return (
    <>
      <Title order={2}>Why Natives?</Title>
      <Text size="md">
        Non-native plants were stressing me out. Beautiful plants fresh from the
        greenhouse would die a slow death in my garden. They were often too
        thirsty for my watering habits, or they didn't like my soil.
      </Text>
      <Title order={2}>Work with what you Have</Title>
      <Text size="md">
        Native plants are already adapted to your local conditions. Once
        established, they often thrive on the water provided by rain. Native
        birds and bugs have evolved alongside native plants, and some even
        depend on these plants as food sources.
      </Text>
    </>
  );
};

export default Intro;
