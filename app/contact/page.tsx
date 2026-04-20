import type { Metadata } from 'next';
import { Mail, MapPin, Clock } from 'lucide-react';
import { PageHeader } from '@/components/page-header';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez l’équipe AURA pour toute question sur le produit, les tarifs ou un partenariat.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Contact · Parler à l’équipe"
        title="Écrivez-nous."
        titleAccent="On répond vite."
        lede="Pas de formulaire à rallonge, pas de SDR qui vous rappelle 15 fois. Un message direct, une réponse en moins de 24 heures ouvrées."
      />

      <section className="bg-bg">
        <div className="container-x py-20 md:py-24">
          <div className="grid gap-16 md:grid-cols-12">
            {/* Infos de contact */}
            <div className="md:col-span-4">
              <div className="space-y-8 border-l border-ink-line pl-6">
                <ContactBlock
                  icon={Mail}
                  label="Email"
                  value="contact@aura-btp.com"
                  href="mailto:contact@aura-btp.com"
                />
                <ContactBlock
                  icon={MapPin}
                  label="Adresse"
                  value="Lyon, France"
                />
                <ContactBlock
                  icon={Clock}
                  label="Horaires"
                  value="Lundi → Vendredi, 8 h — 19 h"
                />
              </div>

              <div className="mt-12 border-t border-ink-line pt-8">
                <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  Pour les questions commerciales
                </h3>
                <p className="mt-4 font-sans text-sm leading-relaxed text-ink-soft">
                  Nous répondons nous-mêmes, sans intermédiaire. Prenez 5 minutes pour bien
                  décrire votre contexte, nous vous répondrons en conséquence.
                </p>
              </div>
            </div>

            {/* Formulaire */}
            <div className="md:col-span-7 md:col-start-6">
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Nom complet" name="name" />
                  <Field label="Entreprise" name="company" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Email" name="email" type="email" />
                  <Field label="Téléphone (facultatif)" name="phone" type="tel" />
                </div>

                <FieldTextarea label="Votre message" name="message" />

                <div className="flex items-center justify-between border-t border-ink-line pt-6">
                  <p className="font-mono text-xs text-ink-muted">
                    ↳ Réponse garantie sous 24 h ouvrées
                  </p>
                  <button type="submit" className="btn-primary">
                    Envoyer le message
                  </button>
                </div>

                <p className="font-mono text-[11px] text-ink-muted">
                  En envoyant ce formulaire, vous acceptez que vos informations soient utilisées pour répondre à votre demande. Nous ne les partageons avec personne.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactBlock({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex items-center gap-2">
        <Icon size={14} strokeWidth={1.5} className="text-accent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          {label}
        </span>
      </div>
      <div className="mt-2 font-sans text-base text-ink">{value}</div>
    </>
  );
  return href ? (
    <a href={href} className="block transition-colors hover:[&_.text-ink]:text-accent">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function Field({
  label,
  name,
  type = 'text',
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </span>
      <input
        type={type}
        name={name}
        className="mt-2 block w-full border-0 border-b border-ink bg-transparent px-0 py-2 font-sans text-base text-ink placeholder-ink-muted focus:border-accent focus:outline-none focus:ring-0"
      />
    </label>
  );
}

function FieldTextarea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
        {label}
      </span>
      <textarea
        name={name}
        rows={6}
        className="mt-2 block w-full border-0 border-b border-ink bg-transparent px-0 py-2 font-sans text-base text-ink placeholder-ink-muted focus:border-accent focus:outline-none focus:ring-0 resize-none"
      />
    </label>
  );
}
