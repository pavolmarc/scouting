import type { APIRoute } from 'astro';
import { assetUrl } from '../data/site';

const publicPages = ['', 'podporte-nas/'];

export const GET: APIRoute = ({ site }) => {
  const entries = site ? publicPages.map(path => {
    const url = new URL(assetUrl(path), site).href;
    return `  <url><loc>${url.replaceAll('&', '&amp;')}</loc></url>`;
  }) : [];

  return new Response([
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
  ].join('\n'), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
