import type { ComponentType } from "react";

import { IconChat } from "@/components/ui/icons/icon-chat";
import { IconGlobe } from "@/components/ui/icons/icon-globe";
import { IconRocket } from "@/components/ui/icons/icon-rocket";
import { IconShield } from "@/components/ui/icons/icon-shield";

import type { Role, RoleIconKey } from "./participate.data";
import styles from "./role-card.module.css";

type IconComponent = ComponentType<{ className?: string }>;

const ICONS: Record<RoleIconKey, IconComponent> = {
  rocket: IconRocket,
  shield: IconShield,
  globe: IconGlobe,
  chat: IconChat,
};

const VARIANTS = [styles.v1, styles.v2, styles.v3, styles.v4];

type RoleCardProps = {
  role: Role;
  index: number;
};

export function RoleCard({ role, index }: RoleCardProps) {
  const Icon = ICONS[role.icon];
  const variantClass = VARIANTS[index] ?? styles.v1;

  return (
    <article className={`${styles.card} ${variantClass}`}>
      <div className={styles.top}>
        <h3 className={styles.title}>{role.title}</h3>

        <span className={styles.icon} aria-hidden="true">
          <Icon className={styles.iconSvg} />
        </span>
      </div>
      <p className={styles.desc}>{role.description}</p>
    </article>
  );
}
