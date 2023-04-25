import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-sections';

import pagesFakeData from './dados.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData.data[0].attributes.sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);

    expect(withNoTextOrImageGrid).toEqual([
      {
        __component: 'section.section-grid',
      },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should map section two columns with no data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with correct values', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title test',
      description: 'description test',
      image: {
        data: {
          attributes: {
            alternativeText: 'javascript.svg',
            url: 'test.png',
          },
        },
      },
      metadata: {
        section_id: 'test',
        background: true,
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('test');
    expect(data.srcImg).toBe('test.png');
    expect(data.text).toBe('description test');
    expect(data.title).toBe('title test');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content with correct values', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'title test',
      content: 'html test',
      metadata: {
        section_id: 'intro',
        background: false,
      },
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('html test');
    expect(data.title).toBe('title test');
  });

  it('should map section text grid with no data', () => {
    const data = mapTextGrid();
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section text grid with correct values', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'title test',
      description: 'description test',
      text_grid: [
        {
          id: 1,
          title: 'Test',
          description: 'description test',
        },
        {
          id: 2,
          title: 'Test',
          description: 'description test',
        },
      ],
      image_grid: [],
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
    });
    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('title test');
    expect(data.description).toBe('description test');
    expect(data.grid[0].title).toBe('Test');
    expect(data.grid[0].description).toBe('description test');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
  });

  it('should map section image grid with no data', () => {
    const data = mapImageGrid();
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section image grid with correct values', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid-image',
      title: 'title test',
      description: 'description test',
      image_grid: [
        {
          image: {
            data: {
              id: 4,
              attributes: {
                alternativeText: 'alt',
                url: 'a.svg',
              },
            },
          },
        },
      ],
      metadata: {
        section_id: 'grid-one',
        background: true,
      },
    });
    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('title test');
    expect(data.description).toBe('description test');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('alt');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
  });
});
