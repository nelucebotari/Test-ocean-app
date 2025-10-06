import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Menu, HelpCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-page-background flex flex-col">
      {/* Header */}
      <header className="p-4 md:p-6">
        <div className="max-w-7xl flex items-center gap-4 mx-0 flex-row justify-between">
          <div className="flex items-center gap-3 md:gap-4 flex-wrap">
            {/* Logo */}
            <div className="bg-surface rounded-full px-4 py-2 flex items-center">
              <Image src="/ocean-credit-logo.svg" alt="Ocean Credit" width={150} height={28} priority />
            </div>

            {/* Powered by Volt badge */}
            <div className="bg-surface rounded-full px-4 py-2 flex items-center gap-2 text-sm">
              <span className="text-text-muted">Powered by</span>
              <span className="font-bold">
                <span className="text-brand-volt-orange">V</span>
                <span className="text-brand-volt-blue">o</span>
                <span className="text-brand-volt-red">l</span>
                <span className="text-brand-volt-blue">t</span>
              </span>
            </div>

            {/* Download app link */}
            <Link
              href="#"
              className="bg-surface rounded-full px-4 py-2 flex items-center gap-2 text-sm text-brand-volt-blue hover:bg-surface-secondary transition-colors"
            >
              Descarcă aplicația
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Help button */}
            <button className="bg-surface rounded-full px-4 py-2 flex items-center gap-2 text-sm text-text-muted hover:bg-surface-secondary transition-colors">
              Ajutor
              <HelpCircle className="w-4 h-4" />
            </button>

            {/* Menu button */}
            <button className="p-2 hover:bg-surface/50 rounded-lg transition-colors">
              <Menu className="w-6 h-6 text-text-secondary" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-md">
          <div className="bg-surface rounded-3xl p-8 md:p-10 shadow-none">
            {/* Welcome section */}
            <div className="text-center mb-8">
              <div className="text-5xl mb-4 text-center">👋</div>
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">Bine ai venit</h1>
              <p className="text-text-muted">Intră în cont sau înregistrează-te</p>
            </div>

            {/* Phone input */}
            <div className="mb-8">
              <div className="flex gap-2">
                <div className="bg-surface-muted px-4 py-3 flex items-center justify-center text-text-secondary font-medium rounded-xl">
                  +40
                </div>
                <Input
                  type="tel"
                  placeholder="Introdu numărul de telefon"
                  className="flex-1 bg-surface-muted border-0 px-5 py-6 text-text-muted placeholder:text-text-placeholder focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-0 rounded-xl"
                />
              </div>
            </div>

            {/* Info items */}
            <div className="space-y-4 mb-8 text-slate-300">
              <div className="flex gap-3 items-start">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Numărul de telefon nu este distribuit către alte companii de creditare
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">Datele tale personale sunt în siguranță</p>
              </div>

              <div className="flex gap-3 items-start">
                <div className="mt-1">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Nu îți vom trimite mesaje decât cu acordul tău.
                </p>
              </div>
            </div>

            {/* Privacy checkbox */}
            <div className="flex items-start gap-3 mb-6">
              <Checkbox
                id="privacy"
                defaultChecked
                className="mt-0.5 border-brand-primary data-[state=checked]:bg-brand-primary data-[state=checked]:border-brand-primary"
              />
              <label htmlFor="privacy" className="text-sm text-text-muted leading-relaxed cursor-pointer">
                Sunt de acord cu{" "}
                <Link href="#" className="text-text-muted underline hover:text-text-secondary">
                  Politica de Confidențialitate
                </Link>
              </label>
            </div>

            {/* Continue button */}
            <Button className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white rounded-full py-6 text-base font-medium transition-colors">
              Continuă
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="p-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <p>© 2025 Ocean Credit IFN. Toate drepturile rezervate</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-text-secondary transition-colors">
              Pagina principală
            </Link>
            <Link href="#" className="hover:text-text-secondary transition-colors">
              Contact
            </Link>
            <Link href="#" className="hover:text-text-secondary transition-colors">
              Blog
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
