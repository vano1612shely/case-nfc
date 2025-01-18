"use client";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export default function RequestBlock({ className }: { className?: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const { toast } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, contact: contact }),
      });

      if (response.ok) {
        const result = await response.json();
        toast({ title: "Die Anfrage wurde erfolgreich gesendet." });
        // Optionally, reset the form or handle the result
      } else {
        toast({ variant: "destructive", title:
              "Fehler, bitte versuchen Sie es später erneut." });
      }
    } catch (error) {
      toast({ variant: "destructive", title:
            "Fehler, bitte versuchen Sie es später erneut." });
    }
    setContact("");
    setName("");
  };
  return (
    <div className={clsx("py-10 md:py-20 px-5 md:px-40 bg-primary", className)}>
      <h1 className="font-semibold text-4xl lg:text-5xl leading-[50px] mb-10 text-center md:text-left text-white">
        Anfrage absenden
      </h1>
      <form
        className="flex justify-between gap-10 flex-wrap"
        onSubmit={handleSubmit}
      >
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="flex-1 rounded-xl p-5 text-lg h-14 min-w-[200px]"
          type="text"
          placeholder="Name:"
        />
        <Input
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
          className="flex-1 rounded-xl p-5 text-lg h-14 min-w-[200px]"
          type="text"
          placeholder="E-Mail oder WhatsApp:"
        />
        <Button
          type="submit"
          className="flex-1 rounded-xl bg-orange-400 hover:bg-orange-600 text-lg h-14 min-w-[200px]"
        >
          Anfrage absenden
        </Button>
      </form>
    </div>
  );
}
