import { override } from '@microsoft/decorators';
// import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
// import { Dialog } from '@microsoft/sp-dialog';

// import * as strings from 'BrandingRgdsApplicationCustomizerStrings';

// const LOG_SOURCE: string = 'BrandingRgdsApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IBrandingRgdsApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
  // tslint:disable-next-line: no-any
  cssUrl: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class BrandingRgdsApplicationCustomizer
  extends BaseApplicationCustomizer<IBrandingRgdsApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    console.log(this.context.pageContext.web.absoluteUrl);
    // tslint:disable-next-line: triple-equals
    if (window.location.href == this.context.pageContext.web.absoluteUrl ||
      window.location.href.indexOf( this.context.pageContext.web.absoluteUrl + '/SitePages/Home.aspx') >= 0 ) {
      // inject the style sheet
      // tslint:disable-next-line: no-any
      const head: any = document.getElementsByTagName('head')[0] || document.documentElement;
      const customHomeStyle: HTMLLinkElement = document.createElement('link');
      customHomeStyle.href = this.context.pageContext.web.absoluteUrl + '/Style%20Library/customHome.css';
      customHomeStyle.rel = 'stylesheet';
      customHomeStyle.type = 'text/css';
      head.insertAdjacentElement('beforeEnd', customHomeStyle);
    } else {
      // inject the style sheet
      // tslint:disable-next-line: no-any
      const head: any = document.getElementsByTagName('head')[0] || document.documentElement;
      const customHeaderStyle: HTMLLinkElement = document.createElement('link');
      customHeaderStyle.href = this.context.pageContext.web.absoluteUrl + '/Style%20Library/customHeader.css';
      customHeaderStyle.rel = 'stylesheet';
      customHeaderStyle.type = 'text/css';
      head.insertAdjacentElement('beforeEnd', customHeaderStyle);
    }
    return Promise.resolve();
  }
}
