"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { useCopy } from "@/lib/language-provider";
import { Reveal } from "@/components/shared/reveal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Marquee } from "@/components/shared/marquee";
import { cn } from "@/lib/utils";

export function LeadForm() {
  const t = useCopy();

  const schema = z.object({
    name: z.string().min(2, t.lead.errName),
    email: z.string().email(t.lead.errEmail),
    phone: z.string().min(6, t.lead.errPhone),
    goal: z.string().min(1),
  });
  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", goal: t.lead.goals[0] },
  });

  const selectedGoal = watch("goal");
  const [done, setDone] = useState(false);

  const onSubmit = async (values: FormValues) => {
    // Simulated submit — no backend in this prototype.
    await new Promise((r) => setTimeout(r, 900));
    toast.success(t.lead.successTitle, { description: t.lead.successBody });
    setDone(true);
    reset({ name: "", email: "", phone: "", goal: t.lead.goals[0] });
    void values;
  };

  return (
    <section id="trial" className="relative overflow-hidden border-b border-line py-20 md:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_0%,rgba(255,92,0,0.12),transparent)]" />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Pitch */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <p className="kicker mb-5">{t.lead.kicker}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display display-md uppercase text-balance">
                {t.lead.title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {t.lead.body}
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="border border-line bg-surface p-7 md:p-10"
            >
              <div className="grid gap-6">
                <Field
                  id="name"
                  label={t.lead.name}
                  error={errors.name?.message}
                >
                  <Input
                    id="name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                </Field>

                <div className="grid gap-6 sm:grid-cols-2">
                  <Field id="email" label={t.lead.email} error={errors.email?.message}>
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      {...register("email")}
                    />
                  </Field>
                  <Field id="phone" label={t.lead.phone} error={errors.phone?.message}>
                    <Input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-invalid={!!errors.phone}
                      {...register("phone")}
                    />
                  </Field>
                </div>

                <fieldset>
                  <legend className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                    {t.lead.goal}
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {t.lead.goals.map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setValue("goal", g)}
                        aria-pressed={selectedGoal === g}
                        className={cn(
                          "border px-3.5 py-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors",
                          selectedGoal === g
                            ? "border-flame bg-flame text-ink"
                            : "border-line text-muted hover:text-bone"
                        )}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? t.lead.submitting : t.lead.submit}
                  {!isSubmitting && <ArrowRight className="size-4" />}
                </Button>

                {done && (
                  <p className="text-center font-mono text-[0.65rem] uppercase tracking-[0.15em] text-flame">
                    {t.lead.successTitle}
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 border-y border-line py-3">
        <Marquee
          items={["No Contracts", "First Day Free", "Cancel Anytime", "Real Results"]}
          duration={32}
          className="font-mono text-xs uppercase tracking-[0.25em] text-muted"
        />
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <span role="alert" className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-flame-soft">
          {error}
        </span>
      )}
    </div>
  );
}
