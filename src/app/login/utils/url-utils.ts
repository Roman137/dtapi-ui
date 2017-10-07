import {ActivatedRouteSnapshot} from '@angular/router';
export class UrlUtils {
  static previousUrl(route: ActivatedRouteSnapshot): string {
    let url = null;
    try {
      url = route.url[route.url.length - 2].toString();
    } catch (err) {
    }
    return url;
  }

  static adornRedirectionUrl(url: string): string {
    if (url == null) {
      return '/';
    }
    if (url[0] !== '/') {
      url = '/' + url;
    }
    return url;
  }

  static trimRedirectionUrl(url: string, restrictedUrls: string[], defaultUrl: string): string {
    return restrictedUrls.filter(restrictedUrl => restrictedUrl === url).length > 0 ? defaultUrl : url;
  }
}
