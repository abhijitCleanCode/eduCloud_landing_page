import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="border-t bg-background py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top section */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              aria-label="EduCloud home"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="flex items-center justify-center size-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                EC
              </span>
              <span className="text-lg">
                Edu<span className="text-primary">Cloud</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              EduCloud is an all-in-one school management platform designed to
              simplify academics, attendance, exams, and finance.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Attendance
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Exams & Grades
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                Email:{" "}
                <a
                  href="mailto:educloud@gmail.com"
                  className="hover:text-primary"
                >
                  educloud@gmail.com
                </a>
              </li>
              <li>Phone: +91 70869 15326</li>
              <li>India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-6 text-sm md:flex-row">
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} EduCloud. All rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
