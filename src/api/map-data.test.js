import { mapData } from './map-data';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.sections).toEqual([]);
    expect(pagesData.menu).toEqual({});
  });
  it('should map data if there data', () => {
    const pagesData = mapData([
      {
        footer_text: '<p>hey</p>',
        title: 'title',
        slug: 'slug',
        sections: [1, 2, 3, 4],
        menu: { a: 'b' },
      },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>hey</p>');
    expect(pagesData.title).toBe('title');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.sections).toEqual([1, 2, 3, 4]);
    expect(pagesData.menu).toEqual({ a: 'b' });
  });
});
