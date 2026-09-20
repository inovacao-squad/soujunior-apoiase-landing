"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./header.module.css";

const navigationItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Nossas iniciativas", href: "#iniciativas" },
  { label: "Participar", href: "#participar" },
  { label: "Transparência", href: "#transparencia" },
  { label: "Como apoiar", href: "#apoie" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.arrow}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
      onClick={onClick}
      aria-expanded={open}
      aria-label={open ? "Fechar menu" : "Abrir menu"}
    >
      <span />
      <span />
      <span />
    </button>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.headerInner}>
            <Link
              href="#topo"
              className={styles.brand}
              aria-label="Instituto SouJunior"
            >
              <Image
                src="/logoazul.png"
                alt="SouJunior Instituto"
                width={330}
                height={86}
                priority
              />
            </Link>
            <nav className={styles.nav} aria-label="Navegação principal">
              {navigationItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className={styles.headerActions}>
              <Link
                href="#apoie"
                className={`${styles.button} ${styles.primary} ${styles.small}`}
              >
                Apoiar <ArrowIcon />
              </Link>
              <MenuButton
                open={menuOpen}
                onClick={() => setMenuOpen((current) => !current)}
              />
            </div>
          </div>
        </div>
      </header>

      <aside
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileMenuTop}>
          <Link
            href="#topo"
            className={styles.mobileBrand}
            aria-label="Instituto SouJunior"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logobranco.png"
              alt="SouJunior Instituto"
              width={330}
              height={86}
            />
          </Link>
          <MenuButton open onClick={() => setMenuOpen(false)} />
        </div>
        <nav className={styles.mobileNav} aria-label="Navegação mobile">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.mobileMenuFooter}>
          <Link
            href="#apoie"
            className={`${styles.button} ${styles.primary}`}
            onClick={() => setMenuOpen(false)}
          >
            Apoiar a SouJunior <ArrowIcon />
          </Link>
        </div>
      </aside>
    </>
  );
}
