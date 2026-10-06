import { MessageCircle, Phone } from "lucide-react";
import { business } from "@/lib/data";

const whatsappUrl = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent("Hello Sri Kala Bhairava Holidays, I would like to plan a trip.")}`;

export default function ContactActions() {
  return (
    <div className="fixed bottom-5 right-4 z-[60] flex flex-col gap-2 sm:right-6">
      <a href={`tel:${business.phone}`} aria-label={`Call Sri Kala Bhairava Holidays at ${business.phone}`} className="grid h-12 w-12 place-items-center rounded-full bg-[#08263f] text-white shadow-xl ring-2 ring-white/80 transition hover:-translate-y-0.5" title={`Call ${business.phone}`}>
        <Phone size={20} />
      </a>
      <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Chat with Sri Kala Bhairava Holidays on WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl ring-2 ring-white/80 transition hover:-translate-y-0.5" title="WhatsApp us">
        <MessageCircle size={21} />
      </a>
    </div>
  );
}
