import {
  mapImageGrid,
  mapSectionContent,
  mapSectionTwoColumns,
  mapSections,
  mapTextGrid,
} from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
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
      id: 4,
      __component: 'section.section-two-columns',
      title: 'title test',
      description: 'description test',
      image: {
        data: {
          id: 4,
          attributes: {
            name: 'javascript.svg',
            alternativeText: 'javascript.svg',
            caption: 'javascript.svg',
            width: null,
            height: null,
            formats: null,
            hash: 'javascript_8c37407653',
            ext: '.svg',
            mime: 'image/svg+xml',
            size: 30.31,
            url: 'test.png',
            previewUrl: null,
            provider: 'cloudinary',
            provider_metadata: {
              public_id: 'javascript_8c37407653',
              resource_type: 'image',
            },
            createdAt: '2022-05-07T12:24:52.179Z',
            updatedAt: '2022-05-07T12:24:52.179Z',
          },
        },
      },
      metadata: {
        id: 11,
        name: 'home',
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
      id: 4,
      __component: 'section.section-content',
      title: 'title test',
      content: 'html test',
      metadata: {
        id: 10,
        name: 'intro',
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
      id: 1,
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
        id: 2,
        name: 'grid-one',
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
      id: 1,
      __component: 'section.section-grid-image',
      title: 'title test',
      description: 'description test',
      image_grid: [
        {
          image: {
            data: {
              id: 4,
              attributes: {
                name: 'javascript.svg',
                alternativeText: 'alt',
                caption: 'javascript.svg',
                width: null,
                height: null,
                formats: null,
                hash: 'javascript_8c37407653',
                ext: '.svg',
                mime: 'image/svg+xml',
                size: 30.31,
                url: 'a.svg',
                previewUrl: null,
                provider: 'cloudinary',
                provider_metadata: {
                  public_id: 'javascript_8c37407653',
                  resource_type: 'image',
                },
                createdAt: '2022-05-07T12:24:52.179Z',
                updatedAt: '2022-05-07T12:24:52.179Z',
              },
            },
          },
        },
      ],
      metadata: {
        id: 2,
        name: 'grid-one',
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
