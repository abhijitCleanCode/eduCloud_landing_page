import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

const features = [
  {
    title: "Smart Attendance Tracking",
    description:
      "Track student and teacher attendance in real time, generate reports instantly, and avoid manual registers.",
    image: "/assets/attendance.png",
  },
  {
    title: "Class & Subject Control",
    description:
      "Manage classes, sections, subject allocation, and timetables from one centralized dashboard.",
    image: "/assets/subject.png",
  },
  {
    title: "Exams & Grades Made Easy",
    description:
      "Schedule exams, upload grades, and generate report cards without spreadsheets or paperwork.",
    image: "/assets/exam.png",
  },
  {
    title: "Student & Teacher Profiles",
    description:
      "Maintain detailed profiles, ID cards, academic history, and performance records securely.",
    image: "/assets/id.png",
  },
  {
    title: "School Finance Simplified",
    description:
      "Handle fee collection, expenses, teacher payments, and financial reports with full transparency.",
    image: "/assets/accounts.png",
  },
  {
    title: "Notice Board & Announcements",
    description:
      "Share notices, circulars, and important announcements with students and teachers instantly.",
    image: "/assets/notice.png",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="bg-white  py-16 md:py-32 dark:bg-transparent"
    >
      <div className="@container mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4">
            Everything you need to manage daily school operations — from
            attendance and exams to finances and communication — all in one
            system.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 text-center sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {features.map((feature) => (
            <Card key={feature.title} className="group shadow-zinc-950/5">
              <CardHeader className="pb-3 text-center">
                <div className="relative mx-auto mb-4 h-42 w-full overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <h3 className="mt-2 font-medium">{feature.title}</h3>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
