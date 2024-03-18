"use client";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import React, { useState } from "react";
import { cn } from "@/utils/cn";

function Seminav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid gap-2">
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Services"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Pricing"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Our Audits"
        ></MenuItem>
        <MenuItem setActive={setActive} active={active} item="Tools"></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Resources"
        ></MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Refer-Earn-Secure"
        ></MenuItem>
      </Menu>
    </div>
  );
}

export default Seminav;
