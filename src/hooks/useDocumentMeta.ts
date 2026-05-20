import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description?: string;
}

const DEFAULT_DESCRIPTION =
  'Portfolio of Julian Avellaneda — software engineer building AI-driven mobile apps and teaching K-12 coding. Projects, experience, and contact.';

const setMetaContent = (selector: string, content: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute('content', content);
};

export function useDocumentMeta({ title, description }: DocumentMeta) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;
    setMetaContent('meta[name="description"]', description ?? DEFAULT_DESCRIPTION);
    return () => {
      document.title = previousTitle;
      setMetaContent('meta[name="description"]', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
}
