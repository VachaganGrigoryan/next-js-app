import createMiddleware from 'next-intl/middleware';

import { defaultLocale, langs } from './locale';

export default createMiddleware({
  // A list of all locales that are supported
  locales: Object.keys(langs),

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale,
});

export const config = {
  // Skip all paths that aren't pages that you'd like to internationalize
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
