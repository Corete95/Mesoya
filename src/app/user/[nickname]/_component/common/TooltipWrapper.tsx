import React, { useState } from "react";
import { Tooltip } from "@nextui-org/react";
import { HyperStatPreset } from "@/types/apis/hyper";

const TooltipWrapper = ({ item }: { item: HyperStatPreset }) => {
  const [isOpen, setIsOpen] = useState(false);

  return item.stat_increase ? (
    <Tooltip
      showArrow={true}
      placement="bottom"
      closeDelay={0}
      content={item.stat_increase}
      isOpen={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
    >
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="flex justify-between text-14px leading-loose hover:bg-white_gray_100 dark:hover:bg-dark_bg_100"
      >
        <span>{item.stat_type}</span>
        <span>Lv.{item.stat_level}</span>
      </div>
    </Tooltip>
  ) : (
    <div className="flex justify-between text-14px leading-loose">
      <span>{item.stat_type}</span>
      <span>Lv.{item.stat_level}</span>
    </div>
  );
};
export default TooltipWrapper;
