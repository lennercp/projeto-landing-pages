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
export const mapSectionContent = (section = {}) => {
  // {
  //   "id": 4,
  //   "__component": "section.section-content",
  //   "title": "NEWS COVERAGE AND SOME SURPRISES",
  //   "content": "The release of **Apple Silicon-based** Macs at the end of last year generated a flurry of news coverage and some surprises at the machine’s _performance_. This post details some background information on the <u>experience</u> of porting Firefox to run natively on these CPUs.\n\nWe’ll start with some background on the Mac transition and give an overview of Firefox internals that needed to know about the new architecture, before moving on to the concept of Universal Binaries.\n\nWe’ll then explain how DRM/EME works on the new platform, talk about our experience with macOS Big Sur, and discuss various updater problems we had to deal with. We’ll conclude with the release and an overview of various other improvements that are in the pipeline.\n\n",
  //   "metadata": {
  //     "id": 10,
  //     "name": "intro",
  //     "section_id": "intro",
  //     "background": false
  //   }
  // },
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
export const mapSectionGrid = (section = {}) => {
  return section;
};
