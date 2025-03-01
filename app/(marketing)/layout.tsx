import { MobileNav } from "@/components/mobile-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  return (
    <div className="jun-layout">
      <SiteHeader />
      <div className="jun-edgeSidebar jun-edgeSidebar-drawer">
        <div className="jun-edgeContent">
          <MobileNav />
        </div>
      </div>
      <main className="flex-1 jun-content">{children}</main>
      <SiteFooter />
      <div className="pointer-events-none absolute inset-0 h-24 w-full before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[80%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:opacity-20 before:[filter:blur(calc(4*1rem))]" />
    </div>
  );
}
