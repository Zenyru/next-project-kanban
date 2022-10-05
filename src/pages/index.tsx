import type { NextPage } from "next";
import SideNavBar from "../components/SideNavBar";
import Options from "../components/Options";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import TopNavBar from "../components/TopNavBar";
import Profiles from "../components/Profiles";
import Tabs from "../components/Tabs";
import Feed from "../components/Feed";

const Home: NextPage = () => {
  return (
    <div className="flex">
      <SideNavBar />
      <Options />
      <div className="flex flex-col flex-grow h-[32px]">
        <TopNavBar />
        <Profiles />
        <Tabs />
        <Feed />
      </div>
    </div>
  );
};

export default Home;
