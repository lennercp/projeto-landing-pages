export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      mapSectionTwoColumns(section);
    }
    if (section.__component === 'section.section-content') {
      mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { text_grid = [], image_grid = [] } = section;

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
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

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    html,
    background,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    text_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    description,
    grid,
    background,
    sectionId,
  };
};
export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    image_grid: grid = [],
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component: 'section.section-grid-image',
    title,
    description,
    grid: grid.map((img) => {
      const {
        image: {
          data: {
            attributes: {
              url: srcImg = '',
              alternativeText: altText = '',
            } = '',
          } = '',
        } = '',
      } = img;
      return { srcImg, altText };
    }),
    background,
    sectionId,
  };
};
