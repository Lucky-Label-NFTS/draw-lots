import { LanguageToggle } from '@/components/language-toggle';
import { ConnectButton } from '@/components/connect-button';
import { ModeToggle } from '@/components/mode-toggle';
import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Integral } from '@/components/integral/integral';

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 24 24"
      className="text-[#2563eb]"
    >
      <g fill="none" fillRule="evenodd">
        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
        <path
          fill="currentColor"
          d="M14.718 1.858a10.502 10.502 0 0 1 7.784 10.06c.01 1.314-1.449 2.04-2.492 1.337l-2.678-1.805a1.692 1.692 0 0 1-.4-.37c-.08.338-.23.65-.432.92a2.5 2.5 0 0 1-2 4H14v1a1 1 0 1 1-2 0v-1h-1v1a1 1 0 1 1-2 0v-1H8a1 1 0 0 1-1-1l.004-.094c-.344.425-.902.68-1.573.534l-.108-.024a7.504 7.504 0 0 0 13.175.335a1.5 1.5 0 0 1 2.599 1.498c-2.317 4.019-7.119 6.152-11.815 4.893a10.502 10.502 0 0 1-7.784-10.06c-.01-1.314 1.45-2.04 2.492-1.337l2.678 1.805c.64.432.814 1.112.661 1.708A.996.996 0 0 1 8 14v-4a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v1h1V7a1 1 0 1 1 2 0v1h.5a2.5 2.5 0 0 1 2.272 1.456c.287-.627.952-1.08 1.797-.895l.109.023A7.504 7.504 0 0 0 5.504 8.25a1.5 1.5 0 1 1-2.6-1.498C5.22 2.732 10.022.6 14.718 1.858M14.5 13H10v1h4.5a.5.5 0 0 0 .09-.992zm0-3H10v1h4.5a.5.5 0 0 0 0-1"
        />
      </g>
    </svg>
  );
}

export const SiteHeader = ({ locale }: { locale: string }) => {
  const messages = useMessages();
  return (
    <nav className="flex h-20 justify-between px-12">
      <div className="flex flex-1 items-center ml-5 ">
        <Link href={`/${locale}`} className="flex items-center">
          <Logo />
        </Link>
      </div>

      <div className="flex flex-1 items-center  justify-end gap-x-6">
        <div className="flex items-center mr-14 gap-x-6">
          <NextIntlClientProvider
            messages={{
              Nav: messages.Nav,
            }}
          >
            <Navigation locale={locale} />
          </NextIntlClientProvider>
        </div>

        <Integral />
        {/* <LanguageToggle locale={locale} />
        <ModeToggle /> */}
        <ConnectButton></ConnectButton>
      </div>
    </nav>
  );
};