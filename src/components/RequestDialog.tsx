"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ReactNode, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Color, Model } from "@/products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
type DataType = {
  model?: string;
  color?: string;
  count?: number;
  name?: string;
  contact?: string;
};
export default function RequestDialog({
  children,
  defaultValues,
}: {
  children: ReactNode;
  defaultValues?: DataType;
}) {
  const [data, setData] = useState<DataType | undefined>(defaultValues);
  const { toast } = useToast();
  useEffect(() => {
    setData(defaultValues);
  }, [defaultValues]);
  const [open, setOpen] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/submit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        toast({ title: "Die Anfrage wurde erfolgreich gesendet." });
        // Optionally, reset the form or handle the result
      } else {
        toast({ variant: "destructive", title: "Fehler, bitte versuchen Sie es später erneut." });
      }
    } catch (error) {
      toast({ variant: "destructive", title: "Fehler, bitte versuchen Sie es später erneut." });
    }
    setData({ name: "", contact: "" });
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Anfrage absenden</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <Select
                  value={data?.model}
                  defaultValue={data?.model}
                  onValueChange={(value: string) =>
                    setData({ ...data, model: value })
                  }
                >
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Modell:" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(Model).map((model) => {
                      return (
                        <SelectItem
                          value={Model[model as keyof typeof Model]}
                          key={model}
                        >
                          {Model[model as keyof typeof Model]}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <Select
                  value={data?.color}
                  defaultValue={data?.color}
                  onValueChange={(value: string) =>
                    setData({ ...data, color: value })
                  }
                >
                  <SelectTrigger className="flex-1">
                    <SelectValue placeholder="Farbe:" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(Color).map((color) => {
                      return (
                        <SelectItem
                          value={Color[color as keyof typeof Color]}
                          key={color}
                        >
                          {Color[color as keyof typeof Color]}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              <Input
                placeholder="Menge:"
                type="number"
                step="1"
                min={1}
                value={defaultValues?.count}
                onChange={(e) =>
                  setData({ ...data, count: Number(e.target.value) })
                }
              />
              <Input
                placeholder="Name"
                required
                value={defaultValues?.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
              <Input
                placeholder="Kontaktdaten (WhatsApp, Telefonnummer, E-Mail):"
                required
                value={defaultValues?.contact}
                onChange={(e) => setData({ ...data, contact: e.target.value })}
              />
              <Button
                type="submit"
                className="bg-orange-400 rounded-xl p-3 px-6 font-semibold hover:bg-orange-600 duration-200"
              >
                Anfrage absenden
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
