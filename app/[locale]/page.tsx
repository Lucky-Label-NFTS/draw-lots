import { useTranslations } from 'next-intl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RequestSignature } from '@/components/request-signature/index';

export default function Home() {
  const t = useTranslations('Basic');
  return (
    <div className="mx-auto w-96">
      <RequestSignature />
    </div>
  );
}
