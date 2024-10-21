"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import { SiteHeader } from "@/components/site-header";
import { MainNav } from "@/components/main-nav";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";

interface Props {
  children: React.ReactNode;
  params: { domain: string };
}

export default function DomainLayout({ children, params }: Props) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = Cookies.get("language") || "en";
    setLanguage(savedLanguage);
  }, []);

  const languageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    Cookies.set("language", newLanguage);
    window.location.reload();
  };

  // If you want add a new language, you need to add it to the select options and add language to messages.tsx file.
  return (
    <>
      <SiteHeader items={siteConfig.mainNav}>
        <div className="flex justify-between items-center w-full">
          <MainNav title={params.domain} items={siteConfig.mainNav} />
          <div className="flex justify-end p-4">
            <select value={language} onChange={languageChange}>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
        </div>
      </SiteHeader>
      <div className="flex flex-1 flex-col">{children}</div>
    </>
  );
}
