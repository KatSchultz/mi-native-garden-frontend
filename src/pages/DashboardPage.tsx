import React from "react";
import AppHeader from "../components/AppHeader";
import FeaturedPlant from "../components/FeaturedPlant";
import Intro from "../components/Intro/Intro";

export default function DashboardPage() {
  return (
    <>
      <AppHeader />
      <Intro />
      <FeaturedPlant />
    </>
  );
}
