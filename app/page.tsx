"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchCatFact = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://catfact.ninja/fact");
      setFact(response.data.fact);
    } catch (error) {
      setFact("Lorem Ipsum Cats");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-xl">
  

        <Card className="w-full text-center">
          <CardContent className="p-6">
            {fact ? (
              <p className="text-base leading-relaxed text-muted-foreground">
                {fact}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                Press the button to get a cat fact.
              </p>
            )}
          </CardContent>
        </Card>

        <Button
          onClick={fetchCatFact}
          disabled={loading}
          className="self-center sm:self-start"
        >
          {loading ? "Fetching..." : fact ? "Display Another Fact" : "Get Cat Fact"}
        </Button>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p className="text-xl mt-2 text-center">Made by Tanish Majumdar</p>
      </footer>
    </div>
  );
}
