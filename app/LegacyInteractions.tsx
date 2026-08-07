"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    chTab?: (target: string) => void;
    hFunc?: (type: string) => void;
    mMenu?: (type: string) => void;
    modalOp?: (image: string) => void;
  }
}

export function LegacyInteractions() {
  useEffect(() => {
    window.hFunc = (type) => {
      const submenu = document.getElementById("hmSub");
      if (submenu) submenu.style.display = type === "in" ? "block" : "none";
    };

    window.mMenu = (type) => {
      const menu = document.getElementById("menu");
      if (menu) menu.style.right = type === "on" ? "0" : "-350px";
    };

    window.chTab = (target) => {
      const details = document.getElementById("pdaDetails");
      const images = document.getElementById("pdaImages");
      if (details) details.style.display = "none";
      if (images) images.style.display = "none";
      const selected = document.getElementById(target);
      if (selected) selected.style.display = "block";
    };

    window.modalOp = (image) => {
      const modal = document.getElementById("modalArea");
      const modalImage = document.getElementById(
        "modalImage",
      ) as HTMLImageElement | null;
      if (modalImage) modalImage.src = image.replace(/^uploads\//, "/source/uploads/");
      if (modal) modal.style.display = "flex";
    };
  }, []);

  return null;
}
