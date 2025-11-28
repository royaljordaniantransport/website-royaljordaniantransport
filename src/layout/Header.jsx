import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const links = [
    {
      _id: crypto.randomUUID(),
      link: "home",
      title: "Home",
    },
    {
      _id: crypto.randomUUID(),
      link: "about",
      title: "About",
    },
    {
      _id: crypto.randomUUID(),
      link: "services",
      title: "Services",
    },
    {
      _id: crypto.randomUUID(),
      link: "fleet",
      title: "Fleet",
    },
  ];

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="text-xl font-bold text-primary cursor-pointer">
            Royal Jordanian Transport
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((data) => (
              <button
                key={data._id}
                onClick={() => scrollToSection(data.link)}
                className="text-sm font-medium text-foreground hover:text-primary cursor-pointer"
              >
                {data.title}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              variant="default"
              size="sm"
              className={"cursor-pointer"}
            >
              Contact
            </Button>
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-primary">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full h-full p-0">
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {links.map((data) => (
                  <button
                    key={data._id}
                    onClick={() => scrollToSection(data.link)}
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {data.title}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="default"
                  size="lg"
                  className="mt-4 cursor-pointer"
                >
                  Contact
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
