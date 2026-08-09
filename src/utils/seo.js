export const setDocumentTitle = (title) => {
  const baseTitle = 'Explore Bihar | Premium Digital Museum';
  document.title = title ? `${title} - ${baseTitle}` : baseTitle;
};

export const setMetaDescription = (description) => {
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = 'description';
    document.head.appendChild(meta);
  }
  meta.content = description;
};

export const updateSEO = ({ title, description }) => {
  if (title) setDocumentTitle(title);
  if (description) setMetaDescription(description);
};
