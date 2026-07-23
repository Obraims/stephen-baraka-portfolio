/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Milestone {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  image: string;
  tech: string[];
  side: "left" | "right";
}

export interface CodeSnippet {
  id: string;
  title: string;
  filename: string;
  description: string;
  icon: string;
  code: string;
  language: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}
