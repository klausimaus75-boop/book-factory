import type { ReviewInfo } from "../types/course";

export const defaultReviewInfo: ReviewInfo = {
  lastReviewed: "2026-07-11",
  sourceType: "course-method",
  sourceReference: "KREA MIX Kursmethodik; KDP-Regeldetails vor Veröffentlichung mit Amazon KDP Help prüfen",
  needsReview: true
};

export const kdpSourceNotes = [
  {
    topic: "KDP Upload, Kategorien, Keywords, A+ Content und Werbung",
    lastReviewed: "2026-07-11",
    sourceType: "official",
    sourceReference: "Amazon KDP Help und Amazon Ads Dokumentation vor finaler Veröffentlichung prüfen",
    needsReview: true
  },
  {
    topic: "Kursmethodik, Projektplanung und Umsetzungsschritte",
    lastReviewed: "2026-07-11",
    sourceType: "course-method",
    sourceReference: "Interne KREA MIX Lernstruktur",
    needsReview: false
  }
];
