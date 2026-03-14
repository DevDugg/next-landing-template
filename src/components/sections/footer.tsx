import Container from "@/components/layout/container";
import { Separator } from "@/components/ui/separator";
import Newsletter from "@/components/sections/newsletter";
import { footer } from "@/data/footer";
import { general } from "@/config/general";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 pt-16 pb-8" role="contentinfo">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-2 text-lg font-bold text-foreground">{general.appName}</p>
            <p className="mb-4 text-sm text-muted-foreground">{general.appDescription}</p>
          </div>

          {footer.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-3 text-sm font-semibold text-foreground">{column.title}</p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="mb-8">
          <p className="mb-4 text-center text-sm font-medium text-foreground">
            Stay up to date
          </p>
          <Newsletter />
        </div>

        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} {general.appName}. {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
