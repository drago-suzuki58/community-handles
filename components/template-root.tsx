"use client";

import { AppBskyActorDefs } from "@atproto/api"
import { Check, X } from "lucide-react";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Profile } from "@/components/profile";
import { Stage } from "@/components/stage";
import messages from '@/components/messages';

interface RootProps {
  domain: string;
  handle: string | undefined;
  newHandle?: string;
  profile?: AppBskyActorDefs.ProfileView;
  error1?: string;
  error2?: string;
}

export default function RootComponent({
  domain,
  handle,
  newHandle,
  profile,
  error1,
  error2,
}: RootProps) {
  const [language, setLanguage] = useState<string | undefined>(undefined);

  useEffect(() => {
    const lang = Cookies.get('language');
    setLanguage(lang);
    console.log(`language: ${lang}`);
  }, []);

  const message = messages[language as keyof typeof messages] || messages['en'];

  return (
    <div>
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          {message.title(domain)}
          <br className="hidden sm:inline" />
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        {message.description(domain)}
        </p>
      </div>
      <div>
        <Stage title={message.enter_handle} number={1}>
          <form>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex w-full max-w-sm items-center space-x-2">
                {newHandle && (
                  <input type="hidden" name="new-handle" value="" />
                )}
                <Input
                  type="text"
                  name="handle"
                  placeholder="example.bsky.social"
                  defaultValue={handle}
                  required
                />
                <Button type="submit">{message.submit}</Button>
              </div>
              <p className="text-sm text-muted-foreground">
              {message.enter_handle_description}
              </p>
              {error1 && (
                <p className="flex flex-row items-center gap-2 text-sm text-red-500">
                  <X className="size-4" /> {message.handle_not_found}
                </p>
              )}
              {profile && (
                <>
                  <p className="text-muted-forground mt-4 flex flex-row items-center gap-2 text-sm">
                    <Check className="size-4 text-green-500" /> {message.account_found}
                  </p>
                  <Profile profile={profile} className="mt-4" />
                </>
              )}
            </div>
          </form>
        </Stage>
        <Stage title={message.choose_new_handle} number={2} disabled={!profile}>
          <form>
            <input type="hidden" name="handle" value={handle} />
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="text"
                  name="new-handle"
                  placeholder={`example.${domain}`}
                  defaultValue={newHandle}
                />
                <Button type="submit">{message.submit}</Button>
              </div>
              <p className="text-sm text-muted-foreground">
              {message.enter_domain_handle(domain)}
              </p>
              {error2 && (
                <p className="text-sm text-red-500">
                  {(() => {
                    switch (error2) {
                      case "handle taken":
                        return message.error_handle_taken;
                      case "invalid handle":
                      case "slur":
                        return message.error_slur;
                      case "reserved":
                        return message.error_reserved;
                      default:
                        return message.error_default;
                    }
                  })()}
                </p>
              )}
            </div>
          </form>
        </Stage>
        <Stage
          title={message.change_handle_tutorial}
          number={3}
          disabled={!newHandle || !!error2}
          last
        >
          <p className="max-w-lg text-sm">
            {message.change_handle_tutorial_description(newHandle)}
          </p>
          <p className="mt-6 max-w-lg text-sm">
            {message.like_project_1}
            <a href="https://github.com/sponsors/mozzius" className="underline">
              {message.like_project_2}
            </a>
            {message.like_project_3}
          </p>
        </Stage>
      </div>
    </div>
  );
}