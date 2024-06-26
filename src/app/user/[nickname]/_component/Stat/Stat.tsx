import React from "react";
import { useNicknameQuery } from "@/hooks/queries/useNicknameQuery";
import UserInfo from "./UserInfo";
import HyperStat from "./HyperStat";
import UserStat from "./UserStat";
import Ability from "./Ability";
import dayjs from "dayjs";
import InfoCard from "../common/InfoCard";

const Stat = ({ ocid, error }: { ocid: string; error?: any }) => {
  const day = dayjs().subtract(1, "day").format("YYYY-MM-DD");
  const { info, hyper, user, ability, pending } = useNicknameQuery(ocid, day);

  const statContent = [
    {
      title: "HYPER STAT",
      content: <HyperStat hyper={hyper} />,
      sizeStyle: "desktop:w-3/12 responsive_2 ",
      blockStyle:
        "w-full bg-white_gray_100 dark:bg-dark_bg_100 pt-0 p-4 rounded-xl shadow-md border border-userBorder dark:border-0",
    },
    {
      title: "STAT",
      content: <UserStat user={user} />,
      sizeStyle:
        "desktop:w-3/6 responsive_1 rounded-xl p-4 bg-white_gray_100 dark:bg-dark_bg_100 shadow-md border border-userBorder dark:border-0",
      blockStyle: "",
    },
    {
      title: "ABILITY",
      content: <Ability ability={ability} />,
      sizeStyle: "desktop:w-3/12 responsive_3",
      blockStyle:
        "w-full pt-0 p-4 rounded-xl bg-white_gray_100 dark:bg-dark_bg_100 shadow-md border border-userBorder dark:border-0",
    },
  ];

  if (error) return <div>{error.message}</div>;

  return (
    <div className="px-2">
      <div className="flex justify-center items-center w-3/6 m-auto tablet:w-full mobile:w-full">
        <div className="w-full bg-white_gray_100 dark:bg-dark_bg_100 pt-0 p-4 rounded-xl shadow-md border border-userBorder dark:border-0">
          <div className="text-lime-500 dark:text-title py-2">
            CHARACTER INFO
          </div>
          <UserInfo info={info} />
        </div>
      </div>
      <div className="flex flex-wrap mt-4 tablet:flex-col mobile:flex-col">
        {statContent.map((item) => (
          <InfoCard
            key={item.title}
            title={item.title}
            content={item.content}
            sizeStyle={item.sizeStyle}
            blockStyle={item.blockStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default Stat;
