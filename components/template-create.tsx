"use client";

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import { Stage } from "@/components/stage";
import messages from '@/components/messages';

export default function CreateYourOwnComponent() {
  const [language, setLanguage] = useState<string | undefined>(undefined);

  useEffect(() => {
      const lang = Cookies.get('language');
      setLanguage(lang);
      console.log(`language: ${lang}`);
    }, []);

  const message = messages[language] || messages['en'];

  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          {message.create_title}
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          {message.create_description}
        </p>
      </div>
      <div>
        <Stage title={message.create_step_1} number={1}>
          <p className="max-w-lg">
            {message.create_step_1_description}
            <a
              href="https://namecheap.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {message.create_step_1_description_2}
            </a>
            {message.create_step_1_description_3}
          </p>
        </Stage>
        <Stage title={message.create_step_2} number={2} last>
          <p className="max-w-lg">{message.create_step_2_description}</p>
          <p className="mt-4 max-w-lg">
          {message.create_step_2_description_2}
            <a
              href="https://github.com/mozzius/community-handles"
              className="underline"
            >
              {message.create_step_2_description_3}
            </a>
            {message.create_step_2_description}
          </p>
          <p className="mt-8 max-w-lg text-sm text-muted-foreground">
          {message.create_step_2_description_5}
            <a
              href="https://billing.stripe.com/p/login/6oEbJccQOh2Rdji4gg"
              className="underline"
            >
              {message.create_step_2_description_6}
            </a>
          </p>
        </Stage>
      </div>
    </main>
  );
}