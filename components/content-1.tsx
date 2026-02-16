import Image from "next/image";

export default function ContentSection() {
  return (
    <section id="about" className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">
          One platform to manage your entire school.
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-muted">
              <Image
                src="/assets/content.png"
                alt="Educloud dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative space-y-4">
            <p className="text-muted-foreground">
              Educloud is built to handle the real, everyday operations of a
              school — attendance, exams, fees, classes, and communication — all
              in one place.
            </p>

            <p className="text-muted-foreground">
              Instead of juggling registers, spreadsheets, and WhatsApp groups,
              schools can manage everything securely from a single dashboard.
            </p>

            <div className="pt-6">
              <blockquote className="border-l-4 pl-4">
                <p>
                  Educloud reduced our administrative workload drastically.
                  Attendance, exams, and fee tracking are now faster and
                  error-free.
                </p>

                <div className="mt-6 space-y-2">
                  <cite className="block font-medium">
                    Abhijit Singh, School Administrator
                  </cite>
                  <span className="text-sm text-muted-foreground">
                    Private School, India
                  </span>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
