export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      mapSectionGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    title = '',
    __component: component = '',
    description: text = '',
    image: { data: { attributes: { url: srcImg = '' } = '' } = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};
export const mapSectionContent = (section) => {
  return section;
};
export const mapSectionGrid = (section) => {
  return section;
};
