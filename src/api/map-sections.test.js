import { mapSectionTwoColumns, mapSections } from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });
  it('should map section two columns', () => {
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
});
