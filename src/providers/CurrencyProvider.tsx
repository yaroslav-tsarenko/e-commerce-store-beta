"use client";

import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from "react";
import { useLocale } from "next-intl";

export type Currency = "EUR" | "RON" | "HUF";

interface Rates {
  EUR: number;
  RON: number;
  HUF: number;
}

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convert: (amountInEur: number) => number;
  rates: Rates;
}

const DEFAULT_RATES: Rates = { EUR: 1, RON: 4.97, HUF: 395 };

// Default display currency inferred from the active locale/region.
const LOCALE_CURRENCY: Record<string, Currency> = {
  ro: "RON",
  hu: "HUF",
  bg: "EUR",
  en: "EUR",
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const [currency, setCurrencyState] = useState<Currency>(
    () => LOCALE_CURRENCY[locale] ?? "EUR"
  );
  const [rates, setRates] = useState<Rates>(DEFAULT_RATES);

  useEffect(() => {
    const stored = localStorage.getItem("currency") as Currency | null;
    if (stored && ["EUR", "RON", "HUF"].includes(stored)) {
      setCurrencyState(stored);
    }
  }, []);

  useEffect(() => {
    fetch("/api/exchange-rates")
      .then((r) => r.json())
      .then((data) => {
        if (data.rates) {
          setRates({ EUR: 1, RON: data.rates.RON, HUF: data.rates.HUF });
        }
      })
      .catch(() => {});
  }, []);

  const setCurrency = (c: Currency) => {
    setCurrencyState(c);
    localStorage.setItem("currency", c);
  };

  const convert = useCallback(
    (amountInEur: number) => {
      if (currency === "EUR") return amountInEur;
      return Math.round(amountInEur * rates[currency] * 100) / 100;
    },
    [currency, rates]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
